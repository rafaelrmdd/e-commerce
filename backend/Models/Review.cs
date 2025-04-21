using System.Text.Json.Serialization;

namespace backend.Models;

public class Review
{
    public int Id { get; set; }

    [JsonIgnore]
    public virtual User User { get; set; }
    public Guid UserId { get; set; }

    [JsonIgnore]
    public virtual Product? Product { get; set; }
    public Guid ProductId { get; set; }

    public int Stars { get; set; }
    public string Comment { get; set; }

    public Review(Guid userId, Guid productId, int stars, string comment)
    {
        UserId = userId;
        ProductId = productId;
        Stars = stars;
        Comment = comment;
    }
}