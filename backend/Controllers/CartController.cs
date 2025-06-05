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
            var carts = await _service.GetCartsService();
            return Ok(carts);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }

    }

    [HttpGet("carts/{id}", Name = "GetCartsById")]
    public async Task<IActionResult> GetCartById(Guid id)
    {
        try
        {
            var cart = await _service.GetCartByIdService(id);
            return Ok(cart);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPost("cart")]
    public async Task<IActionResult> AddCategory(CartDTO cartDto)
    {
        try
        {
            await _service.AddCartService(cartDto);
            return Ok("Cart was successful added");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPut("cart/{id}")]
    public async Task<IActionResult> UpdateCart(CartDTO cartDto, Guid id)
    {
        try
        {
            await _service.UpdateCartService(cartDto, id);
            return Ok("Specified cart was updated");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpDelete("cart/{id}")]
    public async Task<IActionResult> DeleteCart(Guid id)
    {
        try
        {
            await _service.DeleteCartService(id);
            return Ok("Specified category was deleted");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }
}