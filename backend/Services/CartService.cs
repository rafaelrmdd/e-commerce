using backend.Context;
using backend.DTOs;
using backend.Models;
using backend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class CartService : ICartService
{
    private readonly ReifferceContext _context;

    public CartService(ReifferceContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Cart>> GetCartsService()
    {
        var carts = await _context.Carts.ToListAsync();

        if (carts.Count < 1)
        {
            throw new NotFoundException("No cart was found");
        }

        return carts;
    }

    public async Task<Cart> GetCartByIdService(Guid id)
    {
        var cart = await _context.Carts.FindAsync(id);

        if (cart == null)
        {
            throw new NotFoundException($"Cart with id: {id} was not found");
        }

        return cart;
    }

    public async Task<Cart> AddCartService(CartDTO cartDto)
    {
        if (cartDto.UserId == null)
        {
            throw new NotFoundException($"Cart's UserId can't be empty");
        }

        if (cartDto.ProductId == null)
        {
            throw new NotFoundException($"Cart's ProductId can't be empty");
        }

        Cart newCart = new Cart(
            Guid.Parse(cartDto.ProductId),
            Guid.Parse(cartDto.UserId)
        );

        await _context.Carts.AddAsync(newCart);
        await _context.SaveChangesAsync();

        return newCart;
    }

    public async Task<Cart> UpdateCartService(CartDTO cartDto, Guid id)
    {
        var cart = await _context.Carts.FindAsync(id);

        if (cart == null)
        {
            throw new NotFoundException($"Cart with id: {id} was not found");
        }

        if (cartDto.UserId == null)
        {
            throw new NotFoundException($"Cart's UserId can't be empty");
        }

        if (cartDto.ProductId == null)
        {
            throw new NotFoundException($"Cart's ProductId can't be empty");
        }

        cart.UserId = Guid.Parse(cartDto.UserId);
        cart.ProductId = Guid.Parse(cartDto.ProductId);

        await _context.SaveChangesAsync();

        return cart;
    }

    public async Task<Cart> DeleteCartService(Guid id)
    {
        var cart = await _context.Carts.FindAsync(id);

        if (cart == null)
        {
            throw new NotFoundException($"Cart with id: {id} was not found");
        }

        _context.Carts.Remove(cart);
        await _context.SaveChangesAsync();

        return cart;
    }

}