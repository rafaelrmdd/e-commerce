namespace backend.Models;

public class SubCategory
{
    public int Id { get; set; }
    public string Name { get; set; }
    public virtual ICollection<Product>? Products { get; set; }

    public SubCategory(string name)
    {
        Name = name;
    }
}