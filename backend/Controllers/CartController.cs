using backend.DTOs;
using backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("/api/reifferce")]
public class CartController : ControllerBase
{
    private readonly ICartService _service;

    public CartController(ICartService service)
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

    [HttpPost("cart")]
    public async Task<IActionResult> AddCartItem(CartDTO cartDto)
    {
        try
        {
            await _service.AddCartItemService(cartDto);
            return Ok("Cart was successful added");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPut("cart/{id}")]
    public async Task<IActionResult> UpdateCartItem(CartDTO cartDto, Guid id)
    {
        try
        {
            await _service.UpdateCartItemService(cartDto, id);
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