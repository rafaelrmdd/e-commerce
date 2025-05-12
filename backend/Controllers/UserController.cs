using backend.DTOs;
using backend.Services;
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

    [HttpGet("user/{id}", Name = "GetUserById")]
    public async Task<IActionResult> GetReviewById(Guid id)
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

    [HttpPost("user")]
    public async Task<IActionResult> RegisterUser([FromBody] UserDTO userDTO)
    {
        try
        {
            await _service.AddUserService(userDTO);
            return Ok("User was successful registered");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPut("user/{id}")]
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