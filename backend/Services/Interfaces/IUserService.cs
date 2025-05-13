using backend.DTOs;
using backend.Models;

namespace backend.Services.Interfaces;

public interface IUserService
{
    public Task<IEnumerable<User>> GetUsersService();
    public Task<User> GetUserByIdService(Guid id);
    public Task<User> AddUserService(UserDTO userDTO);
    public Task<User> UpdateUserService(UserDTO userDTO, Guid id);
    public Task<User> DeleteUserService(Guid id);
    public string GenerateJwtToken(string username, string password, string userId);
    public string GenerateRefreshToken();
}