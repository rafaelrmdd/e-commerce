namespace backend.Models;

public class Product
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public bool isBestSeller { get; set; } = false;
    public bool IsFeatured { get; set; } = false;

    public Product(string name, string description, decimal price)
    {
        Name = name;
        Description = description;
        Price = price;
    }
}