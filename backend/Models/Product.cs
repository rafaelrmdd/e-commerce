using System.Text.Json.Serialization;

namespace backend.Models;

public class Product
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public bool isBestSeller { get; set; } = false;
    public bool IsFeatured { get; set; } = false;

    public int CategoryId { get; set; }

    [JsonIgnore]
    public virtual Category? Category { get; set; }
    public int SubCategoryId { get; set; }

    [JsonIgnore]
    public virtual SubCategory? SubCategory { get; set; }

    public Product(string name, string description, decimal price, int categoryId, int subCategoryId)
    {
        Name = name;
        Description = description;
        Price = price;
        CategoryId = categoryId;
        SubCategoryId = subCategoryId;
    }

    public Product(string name, string description, decimal price, int categoryId)
    {
        Name = name;
        Description = description;
        Price = price;
        CategoryId = categoryId;
    }

    public Product(string name, string description, decimal price)
    {
        Name = name;
        Description = description;
        Price = price;
    }
}