using backend.Context;
using backend.DTOs;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("/api/reifferce")]
public class ReifferceControllers : ControllerBase
{
    private readonly ReifferceService _service;

    public ReifferceControllers(ReifferceService service)
    {
        _service = service;
    }

    [HttpGet]
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

    [HttpGet("{id}", Name = "GetProductById")]
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

    [HttpPost]
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

    [HttpPut("{id}")]
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

    [HttpDelete("{id}")]
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
}