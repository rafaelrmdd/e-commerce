using backend.DTOs;
using backend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("/api/reifferce")]
public class UserController : ControllerBase
{
    private readonly IUserService _service;

    public UserController(IUserService service)
    {
        _service = service;
    }

    [HttpGet("users")]
    [Authorize]
    public async Task<IActionResult> GetUsers()
    {
        try
        {
            var users = await _service.GetUsersService();
            return Ok(users);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }

    }

    [HttpGet("user/id/{id}", Name = "GetUserById")]
    [Authorize]
    public async Task<IActionResult> GetUserById(Guid id)
    {
        try
        {
            var user = await _service.GetUserByIdService(id);
            return Ok(user);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpGet("user/email/{email}", Name = "GetUserByEmail")]
    [Authorize]
    public async Task<IActionResult> GetUserByEmail(string email)
    {
        try
        {
            var user = await _service.GetUserByEmailService(email);
            return Ok(user);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpGet("user/refreshToken/{refreshToken}", Name = "GetUserByRefreshToken")]
    [Authorize]
    public async Task<IActionResult> GetUserByRefreshToken(string refreshToken)
    {
        try
        {
            var user = await _service.GetUserByRefreshTokenService(refreshToken);
            return Ok(user);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPost("user/register")]
    public async Task<IActionResult> RegisterUser([FromBody] UserRegisterDTO userDTO)
    {
        try
        {
            await _service.RegisterUserService(userDTO);
            return Ok("User was successful registered");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPost("user/session")]
    public async Task<IActionResult> UserSession([FromBody] UserDTO userDTO)
    {
        try
        {
            var response = await _service.UserSessionService(userDTO);
            return Ok(response);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPost("user/refresh")]
    public async Task<IActionResult> UserRefresh([FromBody] RefreshTokenDTO refreshTokenDTO)
    {
        try
        {
            var response = await _service.UserRefresh(refreshTokenDTO);
            return Ok(response);
        }
        catch (NotFoundException ex)
        {
            return Unauthorized(ex.Message);
        }
    }

    [HttpPut("user/{id}")]
    [Authorize]
    public async Task<IActionResult> UpdateUser(UserDTO userDTO, Guid id)
    {
        try
        {
            await _service.UpdateUserService(userDTO, id);
            return Ok("Specified user was updated");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpDelete("user/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteUser(Guid id)
    {
        try
        {
            await _service.DeleteUserService(id);
            return Ok("Specified user was deleted");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }
}