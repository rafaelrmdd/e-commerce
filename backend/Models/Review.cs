using System.ComponentModel;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace backend.Models;

public class Review
{
    public int Id { get; set; }

    [JsonIgnore]
    public virtual User User { get; set; }

    [DefaultValue("")]
    public Guid UserId { get; set; }

    [JsonIgnore]
    public virtual Product? Product { get; set; }

    [DefaultValue("")]
    public Guid ProductId { get; set; }

    public int Stars { get; set; }
    public string Title { get; set; }
    public string Comment { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;

    public Review(Guid userId, Guid productId, int stars, string title, string comment)
    {
        UserId = userId;
        ProductId = productId;
        Stars = stars;
        Title = title;
        Comment = comment;
    }
}