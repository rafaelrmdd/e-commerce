using System.ComponentModel;
using System.Text.Json.Serialization;

namespace backend.Models;

public class CartItem
{
    public Guid Id { get; set; }

    [JsonIgnore]
    public virtual Product? Product { get; set; }

    [DefaultValue("")]
    public Guid ProductId { get; set; }

    [JsonIgnore]
    public virtual User? User { get; set; }

    [DefaultValue("")]
    public Guid UserId { get; set; }

    public int Quantity { get; set; } = 1;
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;

    public CartItem(Guid productId, Guid userId)
    {
        ProductId = productId;
        UserId = userId;
    }
}