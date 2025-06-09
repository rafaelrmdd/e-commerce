using backend.Context;
using backend.DTOs;
using backend.Models;
using backend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class CartItemService : ICartItemService
{
    private readonly ReifferceContext _context;

    public CartItemService(ReifferceContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<CartItem>> GetCartItemsService()
    {
        var carts = await _context.CartItems.ToListAsync();

        if (carts.Count < 1)
        {
            throw new NotFoundException("No cart was found");
        }

        return carts;
    }

    public async Task<CartItem> GetCartItemByIdService(Guid id)
    {
        var cart = await _context.CartItems.FindAsync(id);

        if (cart == null)
        {
            throw new NotFoundException($"Cart with id: {id} was not found");
        }

        return cart;
    }

    public async Task<CartItem> AddCartItemService(CartItemDTO cartItemDto, Guid userId)
    {
        if (cartItemDto.UserId == null)
        {
            throw new NotFoundException($"Cart's UserId can't be empty");
        }

        if (cartItemDto.ProductId == null)
        {
            throw new NotFoundException($"Cart's ProductId can't be empty");
        }

        var cartItem = await _context.CartItems
            .Where(item => item.UserId == userId && item.ProductId == Guid.Parse(cartItemDto.ProductId))
            .FirstOrDefaultAsync();

        if (cartItem != null)
        {
            cartItem.Quantity++;
        }

        CartItem newCart = new CartItem(
            Guid.Parse(cartItemDto.ProductId),
            Guid.Parse(cartItemDto.UserId),
            cartItemDto.Quantity
        );

        await _context.CartItems.AddAsync(newCart);
        await _context.SaveChangesAsync();

        return newCart;
    }

    public async Task<CartItem> UpdateCartItemService(CartItemDTO cartItemDto, Guid id)
    {
        var cart = await _context.CartItems.FindAsync(id);

        if (cart == null)
        {
            throw new NotFoundException($"Cart with id: {id} was not found");
        }

        if (cartItemDto.UserId == null)
        {
            throw new NotFoundException($"Cart's UserId can't be empty");
        }

        if (cartItemDto.ProductId == null)
        {
            throw new NotFoundException($"Cart's ProductId can't be empty");
        }


        if (cartItemDto.Quantity < 1)
        {
            throw new NotFoundException($"Cart's Quantity can't be less than 1");
        }

        cart.UserId = Guid.Parse(cartItemDto.UserId);
        cart.ProductId = Guid.Parse(cartItemDto.ProductId);

        await _context.SaveChangesAsync();

        return cart;
    }

    public async Task<CartItem> DeleteCartItemService(Guid id)
    {
        var cart = await _context.CartItems.FindAsync(id);

        if (cart == null)
        {
            throw new NotFoundException($"Cart with id: {id} was not found");
        }

        _context.CartItems.Remove(cart);
        await _context.SaveChangesAsync();

        return cart;
    }

}