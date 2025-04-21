using backend.DTOs;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Services;

public interface IUserService
{
    public Task<IEnumerable<User>> GetUsersService();
    public Task<User> GetUserByIdService(Guid id);
    public Task<User> AddUserService(UserDTO userDTO);
    public Task<User> UpdateUserService(UserDTO userDTO, Guid id);
    public Task<User> DeleteUserService(Guid id);
}