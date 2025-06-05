using backend.DTOs;
using backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("/api/reifferce")]
public class CategoryController : ControllerBase
{
    private readonly ICategoryService _service;

    public CategoryController(ICategoryService service)
    {
        _service = service;
    }

    [HttpGet("categories")]
    public async Task<IActionResult> GetCategories()
    {
        try
        {
            var products = await _service.GetCategoriesService();
            return Ok(products);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }

    }

    [HttpGet("category/{id}")]
    public async Task<IActionResult> GetCategoryById(int id)
    {
        try
        {
            var category = await _service.GetCategoryByIdService(id);
            return Ok(category);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPost("category")]
    public async Task<IActionResult> AddCategory(CategoryDto categoryDto)
    {
        try
        {
            await _service.AddCategoryService(categoryDto);
            return Ok("Category was successful added");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPut("category/{id}")]
    public async Task<IActionResult> UpdateCategory(CategoryDto categoryDto, int id)
    {
        try
        {
            await _service.UpdateCategoryService(categoryDto, id);
            return Ok("Specified category was updated");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpDelete("category/{id}")]
    public async Task<IActionResult> DeleteCategory(int id)
    {
        try
        {
            await _service.DeleteCategoryService(id);
            return Ok("Specified category was deleted");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }
}