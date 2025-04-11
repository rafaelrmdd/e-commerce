using backend.Context;
using backend.DTOs;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class SubCategoryService : ISubCategoryService
{
    private readonly ReifferceContext _context;

    public SubCategoryService(ReifferceContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<SubCategory>> GetSubCategoriesService()
    {
        var subCategories = await _context.SubCategories.ToListAsync();

        if (subCategories.Count < 1)
        {
            throw new NotFoundException("No subcategory was found");
        }

        return subCategories;
    }

    public async Task<SubCategory> GetSubCategoryByIdService(int id)
    {
        var subCategory = await _context.SubCategories.FindAsync(id);

        if (subCategory == null)
        {
            throw new NotFoundException($"Subcategory with id: {id} was not found");
        }

        return subCategory;
    }

    public async Task<SubCategory> AddSubCategoryService(SubCategoryDTO subCategoryDto)
    {
        if (string.IsNullOrEmpty(subCategoryDto.Name))
        {
            throw new ValidationException("Subcategory's name can't be null or empty");
        }

        SubCategory newSubCategory = new SubCategory(
            subCategoryDto.Name
        );

        await _context.SubCategories.AddAsync(newSubCategory);
        await _context.SaveChangesAsync();

        return newSubCategory;
    }

    public async Task<SubCategory> UpdateSubCategoryService(SubCategoryDTO categoryDto, int id)
    {
        var subCategory = await _context.SubCategories.FindAsync(id);

        if (subCategory == null)
        {
            throw new NotFoundException($"Subcategory with id: {id} was not found");
        }

        if (string.IsNullOrEmpty(categoryDto.Name))
        {
            throw new ValidationException("Subcategory's name can't be null or empty");
        }

        subCategory.Name = categoryDto.Name;

        await _context.SaveChangesAsync();

        return subCategory;
    }

    public async Task<SubCategory> DeleteSubCategoryService(int id)
    {
        var subCategory = await _context.SubCategories.FindAsync(id);

        if (subCategory == null)
        {
            throw new NotFoundException($"Subcategory with id: {id} was not found");
        }

        _context.SubCategories.Remove(subCategory);
        await _context.SaveChangesAsync();

        return subCategory;
    }

}
