using backend.DTOs;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Services.Interfaces;

public interface ISubCategoryService
{
    public Task<IEnumerable<SubCategory>> GetSubCategoriesService();
    public Task<SubCategory> GetSubCategoryByIdService(int id);
    public Task<SubCategory> AddSubCategoryService(SubCategoryDTO subCategoryDto);
    public Task<SubCategory> UpdateSubCategoryService(SubCategoryDTO subCategoryDto, int id);
    public Task<SubCategory> DeleteSubCategoryService(int id);
}