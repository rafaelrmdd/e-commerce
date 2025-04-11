using backend.DTOs;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("/api/reifferce")]
public class SubCategoryController : ControllerBase
{
    private readonly ISubCategoryService _service;

    public SubCategoryController(ISubCategoryService service)
    {
        _service = service;
    }

    [HttpGet("subcategory")]
    public async Task<IActionResult> GetSubCategories()
    {
        try
        {
            var products = await _service.GetSubCategoriesService();
            return Ok(products);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }

    }

    [HttpGet("subcategory/{id}", Name = "GetSubCategoryById")]
    public async Task<IActionResult> GetSubCategoryById(int id)
    {
        try
        {
            var products = await _service.GetSubCategoryByIdService(id);
            return Ok(products);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPost("subcategory")]
    public async Task<IActionResult> AddCategory(SubCategoryDTO subCategoryDto)
    {
        try
        {
            await _service.AddSubCategoryService(subCategoryDto);
            return Ok("Subcategory was successful added");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPut("subcategory/{id}")]
    public async Task<IActionResult> UpdateSubCategory(SubCategoryDTO subCategoryDto, int id)
    {
        try
        {
            await _service.UpdateSubCategoryService(subCategoryDto, id);
            return Ok("Specified subcategory was updated");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpDelete("subcategory/{id}")]
    public async Task<IActionResult> DeleteSubCategory(int id)
    {
        try
        {
            await _service.DeleteSubCategoryService(id);
            return Ok("Specified subcategory was deleted");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }
}