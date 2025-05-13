using backend.Context;
using backend.DTOs;
using backend.Models;
using backend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class CategoryService : ICategoryService
{
    private readonly ReifferceContext _context;

    public CategoryService(ReifferceContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Category>> GetCategoriesService()
    {
        var categories = await _context.Categories.ToListAsync();

        if (categories.Count < 1)
        {
            throw new NotFoundException("No category was found");
        }

        return categories;
    }

    public async Task<Category> GetCategoryByIdService(int id)
    {
        var category = await _context.Categories.FindAsync(id);

        if (category == null)
        {
            throw new NotFoundException($"Category with id: {id} was not found");
        }

        return category;
    }

    public async Task<Category> AddCategoryService(CategoryDto categoryDto)
    {
        if (string.IsNullOrEmpty(categoryDto.Name))
        {
            throw new ValidationException("Category's name can't be null or empty");
        }

        Category newCategory = new Category(
            categoryDto.Name
        );

        await _context.Categories.AddAsync(newCategory);
        await _context.SaveChangesAsync();

        return newCategory;
    }

    public async Task<Category> UpdateCategoryService(CategoryDto categoryDto, int id)
    {
        var category = await _context.Categories.FindAsync(id);

        if (category == null)
        {
            throw new NotFoundException($"Category with id: {id} was not found");
        }

        if (string.IsNullOrEmpty(categoryDto.Name))
        {
            throw new ValidationException("Category's name can't be null or empty");
        }

        category.Name = categoryDto.Name;

        await _context.SaveChangesAsync();

        return category;
    }

    public async Task<Category> DeleteCategoryService(int id)
    {
        var category = await _context.Categories.FindAsync(id);

        if (category == null)
        {
            throw new NotFoundException($"Category with id: {id} was not found");
        }

        _context.Categories.Remove(category);
        await _context.SaveChangesAsync();

        return category;
    }

}