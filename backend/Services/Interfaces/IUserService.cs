using backend.DTOs;
using backend.Models;

namespace backend.Services.Interfaces;

public interface IUserService
{
    public Task<IEnumerable<User>> GetUsersService();
    public Task<User> GetUserByIdService(Guid id);
    public Task<object> UserSessionService(UserDTO userDTO);
    public Task<User> RegisterUserService(UserRegisterDTO userDTO);
    public Task<User> UpdateUserService(UserDTO userDTO, Guid id);
    public Task<User> DeleteUserService(Guid id);
    public string GenerateJwtToken(UserDTO userDTO);
    public string GenerateRefreshToken();
}