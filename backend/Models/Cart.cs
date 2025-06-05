using System.ComponentModel;

namespace backend.Models;

public class Cart
{
    public Guid Id { get; set; }
    public virtual Product? Product { get; set; }
    [DefaultValue("")]
    public Guid ProductId { get; set; }
    public virtual User? User { get; set; }
    [DefaultValue("")]
    public Guid UserId { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;

    public Cart(Guid productId, Guid userId)
    {
        ProductId = productId;
        UserId = userId;
    }
}