using backend.Context;
using backend.DTOs;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class UserService : IUserService
{
    private readonly ReifferceContext _context;

    public UserService(ReifferceContext context)
    {
        _context = context;
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

    public async Task<User> AddUserService(UserDTO userDTO)
    {
        if (string.IsNullOrEmpty(userDTO.Name))
        {
            throw new ValidationException("User's name can't be null or empty");
        }

        User newUser = new User(
            userDTO.Name,
            userDTO.Login,
            userDTO.Password
        );

        await _context.Users.AddAsync(newUser);
        await _context.SaveChangesAsync();

        return newUser;
    }

    public async Task<User> UpdateUserService(UserDTO userDTO, Guid id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            throw new NotFoundException($"User with id: {id} was not found");
        }

        if (string.IsNullOrEmpty(userDTO.Name))
        {
            throw new ValidationException("User's name can't be null or empty");
        }

        user.Name = userDTO.Name;
        user.Login = userDTO.Login;
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

}