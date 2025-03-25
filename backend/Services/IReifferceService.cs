using backend.DTOs;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Services;

public interface IReifferceService
{
    public Task<IEnumerable<Product>> GetProductsService();
    public Task<Product> GetProductByIdService(Guid id);
    public Task<Product> AddProductService(ProductDTO productDto);
    public Task<Product> UpdateProductService(ProductDTO productDto, Guid id);
    public Task<Product> DeleteProductService(Guid id);
}