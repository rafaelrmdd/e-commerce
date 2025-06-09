using backend.DTOs;
using backend.Models;

namespace backend.Services.Interfaces;

public interface ICartItemService
{
    public Task<IEnumerable<CartItem>> GetCartItemsService();
    public Task<CartItem> GetCartItemByIdService(Guid id);
    public Task<CartItem> AddCartItemService(CartItemDTO cartDto, Guid userId);
    public Task<CartItem> UpdateCartItemService(CartItemDTO cartDto, Guid id);
    public Task<CartItem> DeleteCartItemService(Guid id);
}