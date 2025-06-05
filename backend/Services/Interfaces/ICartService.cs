using backend.DTOs;
using backend.Models;

namespace backend.Services.Interfaces;

public interface ICartService
{
    public Task<IEnumerable<CartItem>> GetCartItemsService();
    public Task<CartItem> GetCartItemByIdService(Guid id);
    public Task<CartItem> AddCartItemService(CartDTO cartDto);
    public Task<CartItem> UpdateCartItemService(CartDTO cartDto, Guid id);
    public Task<CartItem> DeleteCartItemService(Guid id);
}