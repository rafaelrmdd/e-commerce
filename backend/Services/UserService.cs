using backend.Context;
using backend.DTOs;
using backend.Models;
using backend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace backend.Services;

public class UserService : IUserService
{
    private readonly ReifferceContext _context;
    private readonly IConfiguration _configuration;

    public UserService(ReifferceContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    public async Task<IEnumerable<User>> GetUsersService()
    {
        var users = await _context.Users.ToListAsync();

        if (users.Count < 1)
        {
            throw new NotFoundException("No user was found");
        }

        return users;
    }

    public async Task<User> GetUserByIdService(Guid id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            throw new NotFoundException($"User with id: {id} was not found");
        }

        return user;
    }

    public async Task<User> GetUserByEmailService(string email)
    {
        var user = await _context.Users.FirstOrDefaultAsync(user => user.Email == email);

        if (user == null)
        {
            throw new NotFoundException($"User with email: {email} was not found");
        }

        return user;
    }

    public async Task<User> GetUserByRefreshTokenService(string refreshToken)
    {
        var user = await _context.Users.FirstOrDefaultAsync(user => user.RefreshToken == refreshToken);

        if (user == null)
        {
            throw new NotFoundException($"User with refresh token: {refreshToken} was not found");
        }

        return user;
    }

    public async Task<User> RegisterUserService(UserRegisterDTO userDTO)
    {
        if (string.IsNullOrEmpty(userDTO.Email))
        {
            throw new ValidationException("User's email can't be null or empty");
        }

        if (userDTO.Password != userDTO.ConfirmPassword)
        {
            throw new ValidationException("The passwords should be the same");
        }

        var findUser = await _context.Users.FirstOrDefaultAsync(user => user.Email == userDTO.Email);

        if (findUser is not null)
        {
            throw new ValidationException("This email is already registered");
        }

        var refreshToken = GenerateRefreshToken();

        User newUser = new User(
            userDTO.Email,
            userDTO.Password,
            refreshToken
        );

        await _context.Users.AddAsync(newUser);
        await _context.SaveChangesAsync();

        return newUser;
    }

    public async Task<object> UserSessionService(UserDTO userDTO)
    {
        var user = await _context.Users.FirstOrDefaultAsync(user => user.Email == userDTO.Email);

        if (user is null)
        {
            throw new ValidationException("Wrong email!");
        }

        if (user.Password != userDTO.Password)
        {
            throw new ValidationException("Wrong password!");
        }

        var jwt = GenerateJwtToken(userDTO);

        return new
        {
            user.Id,
            user.Email,
            user.Password,
            user.RefreshToken,
            jwt
        };
    }

    public async Task<object> UserRefresh(RefreshTokenDTO refreshTokenDTO)
    {
        if (string.IsNullOrEmpty(refreshTokenDTO.RefreshToken))
        {
            throw new ValidationException("Refresh token is necessary");
        }

        var user = await _context.Users.FirstOrDefaultAsync(user => user.RefreshToken == refreshTokenDTO.RefreshToken);

        if (user is null)
        {
            throw new ValidationException($"No user with refreshToken: {refreshTokenDTO.RefreshToken} was found");
        }

        var newRefreshToken = GenerateRefreshToken();
        user.RefreshToken = newRefreshToken;

        await _context.SaveChangesAsync();

        UserDTO userDTO = new
        (
            user.Email,
            user.Password
        );

        var jwt = GenerateJwtToken(userDTO);

        return new
        {
            jwt,
            newRefreshToken,
        };
    }

    public async Task<User> UpdateUserService(UserDTO userDTO, Guid id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            throw new NotFoundException($"User with id: {id} was not found");
        }

        if (string.IsNullOrEmpty(userDTO.Email))
        {
            throw new ValidationException("User's name can't be null or empty");
        }

        user.Email = userDTO.Email;
        user.Password = userDTO.Password;

        await _context.SaveChangesAsync();

        return user;
    }

    public async Task<User> DeleteUserService(Guid id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            throw new NotFoundException($"User with id: {id} was not found");
        }

        _context.Users.Remove(user);
        await _context.SaveChangesAsync();

        return user;
    }

    public string GenerateJwtToken(UserDTO userDTO)
    {
        var jwtKey = _configuration["JWT:Key"];
        var key = Encoding.ASCII.GetBytes(jwtKey!);

        var claims = new[]
        {
            new Claim(ClaimTypes.Email, userDTO.Email),
        };

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),

            Expires = DateTime.UtcNow.AddSeconds(20),
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature
            ),
            Issuer = _configuration["JWT:Issuer"],
            Audience = _configuration["JWT:Audience"]
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }

    public string GenerateRefreshToken()
    {
        Guid refreshToken = Guid.NewGuid();
        string refreshTokenString = refreshToken.ToString();

        return refreshTokenString;
    }
}