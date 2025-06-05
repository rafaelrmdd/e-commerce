using backend.DTOs;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Services.Interfaces;

public interface ICartService
{
    public Task<IEnumerable<Cart>> GetCartsService();
    public Task<Cart> GetCartByIdService(Guid id);
    public Task<Cart> AddCartService(CartDTO cartDto);
    public Task<Cart> UpdateCartService(CartDTO cartDto, Guid id);
    public Task<Cart> DeleteCartService(Guid id);
}