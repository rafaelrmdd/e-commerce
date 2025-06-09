using backend.DTOs;
using backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("/api/reifferce")]
public class CartItemController : ControllerBase
{
    private readonly ICartItemService _service;

    public CartItemController(ICartItemService service)
    {
        _service = service;
    }

    [HttpGet("carts")]
    public async Task<IActionResult> GetCarts()
    {
        try
        {
            var carts = await _service.GetCartItemsService();
            return Ok(carts);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }

    }

    [HttpGet("carts/{id}")]
    public async Task<IActionResult> GetCartItemById(Guid id)
    {
        try
        {
            var cart = await _service.GetCartItemByIdService(id);
            return Ok(cart);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPost("cart/{userId}")]
    public async Task<IActionResult> AddCartItem(CartItemDTO cartItemDto, Guid userId)
    {
        try
        {
            await _service.AddCartItemService(cartItemDto, userId);
            return Ok("Cart was successful added");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPut("cart/{id}")]
    public async Task<IActionResult> UpdateCartItem(CartItemDTO cartItemDto, Guid id)
    {
        try
        {
            await _service.UpdateCartItemService(cartItemDto, id);
            return Ok("Specified cart was updated");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpDelete("cart/{id}")]
    public async Task<IActionResult> DeleteCartItem(Guid id)
    {
        try
        {
            await _service.DeleteCartItemService(id);
            return Ok("Specified category was deleted");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }
}