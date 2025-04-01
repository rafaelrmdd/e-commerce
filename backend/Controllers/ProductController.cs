using backend.DTOs;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("/api/reifferce")]
public class ProductController : ControllerBase
{
    private readonly IProductService _service;

    public ProductController(IProductService service)
    {
        _service = service;
    }

    [HttpGet("products")]
    public async Task<IActionResult> GetProducts()
    {
        try
        {
            var products = await _service.GetProductsService();
            return Ok(products);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }

    }

    [HttpGet("product/{id}", Name = "GetProductById")]
    public async Task<IActionResult> GetProductById(Guid id)
    {
        try
        {
            var products = await _service.GetProductByIdService(id);
            return Ok(products);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPost("product")]
    public async Task<IActionResult> AddProduct(ProductDTO productDto)
    {
        try
        {
            await _service.AddProductService(productDto);
            return Ok("Product was successful added");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPut("product/{id}")]
    public async Task<IActionResult> UpdateProduct(ProductDTO productDto, Guid id)
    {
        try
        {
            await _service.UpdateProductService(productDto, id);
            return Ok("Specified product was updated");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpDelete("product/{id}")]
    public async Task<IActionResult> DeleteProduct(Guid id)
    {
        try
        {
            await _service.DeleteProductService(id);
            return Ok("Specified product was deleted");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpDelete]
    public async void DeleteAllProducts()
    {
        await _service.DeleteAllProductsService();
    }

    [HttpPut("product/setbestseller/{id}")]
    public async Task<IActionResult> SetProductAsBestSeller(Guid id)
    {
        try
        {
            await _service.SetProductAsBestSeller(id);
            return Ok("Specified product was updated");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPut("product/setfeatured/{id}")]
    public async Task<IActionResult> SetProductAsFeatured(Guid id)
    {
        try
        {
            await _service.SetProductAsFeatured(id);
            return Ok("Specified product was updated");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPut("product/unsetbestseller/{id}")]
    public async Task<IActionResult> UnSetProductAsBestSeller(Guid id)
    {
        try
        {
            await _service.UnSetProductAsBestSeller(id);
            return Ok("Specified product was updated");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPut("product/unsetfeatured/{id}")]
    public async Task<IActionResult> UnSetProductAsFeatured(Guid id)
    {
        try
        {
            await _service.UnSetProductAsFeatured(id);
            return Ok("Specified product was updated");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }
}