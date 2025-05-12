using backend.DTOs;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Services.Interfaces;

public interface IProductService
{
    public Task<IEnumerable<Product>> GetProductsService();
    public Task<Product> GetProductByIdService(Guid id);
    public Task<Product> AddProductService(ProductDTO productDto);
    public Task<Product> UpdateProductService(ProductDTO productDto, Guid id);
    public Task<Product> DeleteProductService(Guid id);
    public Task<IEnumerable<Product>> DeleteAllProductsService();
    public Task<Product> SetProductAsBestSeller(Guid id);
    public Task<Product> SetProductAsFeatured(Guid id);
    public Task<Product> UnSetProductAsBestSeller(Guid id);
    public Task<Product> UnSetProductAsFeatured(Guid id);
}