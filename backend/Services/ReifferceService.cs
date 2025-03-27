using backend.Context;
using backend.DTOs;
using backend.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class ReifferceService : IReifferceService
{
    private readonly ReifferceContext _context;

    public ReifferceService(ReifferceContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Product>> GetProductsService()
    {
        var products = await _context.Products.ToListAsync();

        if (products.Count < 1)
        {
            throw new NotFoundException("No product was found");
        }

        return products;
    }

    public async Task<Product> GetProductByIdService(Guid id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            throw new NotFoundException($"Product with id: {id} was not found");
        }

        return product;
    }

    public async Task<Product> AddProductService(ProductDTO productDto)
    {
        if (string.IsNullOrEmpty(productDto.Name))
        {
            throw new ValidationException("Product's name can't be null or empty");
        }

        if (productDto.Price < 1)
        {
            throw new ValidationException("Product's price can't be lower than $1");
        }

        Product newProduct = new Product(
            productDto.Name,
            productDto.Description,
            productDto.Price
        );

        await _context.Products.AddAsync(newProduct);
        await _context.SaveChangesAsync();

        return newProduct;
    }

    public async Task<Product> UpdateProductService(ProductDTO productDto, Guid id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            throw new NotFoundException($"Product with id: {id} was not found");
        }

        if (string.IsNullOrEmpty(productDto.Name))
        {
            throw new ValidationException("Product's name can't be null or empty");
        }

        if (productDto.Price < 1)
        {
            throw new ValidationException("Product's price can't be lower than $1");
        }

        product.Name = productDto.Name;
        product.Description = productDto.Description;
        product.Price = productDto.Price;

        await _context.SaveChangesAsync();

        return product;
    }

    public async Task<Product> DeleteProductService(Guid id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            throw new NotFoundException($"Product with id: {id} was not found");
        }

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();

        return product;
    }

    public async Task<Product> SetProductAsBestSeller(Guid id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            throw new NotFoundException($"Product with id: {id} was not found");
        }

        product.isBestSeller = true;
        await _context.SaveChangesAsync();

        return product;
    }
    public async Task<Product> SetProductAsFeatured(Guid id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            throw new NotFoundException($"Product with id: {id} was not found");
        }

        product.IsFeatured = true;
        await _context.SaveChangesAsync();

        return product;
    }

    public async Task<Product> UnSetProductAsBestSeller(Guid id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            throw new NotFoundException($"Product with id: {id} was not found");
        }

        product.isBestSeller = false;
        await _context.SaveChangesAsync();

        return product;
    }
    public async Task<Product> UnSetProductAsFeatured(Guid id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            throw new NotFoundException($"Product with id: {id} was not found");
        }

        product.IsFeatured = false;
        await _context.SaveChangesAsync();

        return product;
    }

}