using backend.DTOs;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Services.Interfaces;

public interface ICategoryService
{
    public Task<IEnumerable<Category>> GetCategoriesService();
    public Task<Category> GetCategoryByIdService(int id);
    public Task<Category> AddCategoryService(CategoryDto categoryDto);
    public Task<Category> UpdateCategoryService(CategoryDto categoryDto, int id);
    public Task<Category> DeleteCategoryService(int id);
}