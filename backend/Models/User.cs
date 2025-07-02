using System.Text.Json.Serialization;

namespace backend.Models;

public class User
{
    public Guid Id { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string RefreshToken { get; set; } = "";

    [JsonIgnore]
    public virtual ICollection<Review>? Reviews { get; set; }
    [JsonIgnore]
    public virtual IEnumerable<CartItem>? CartItems { get; set; }

    public DateTime Timestamp { get; set; } = DateTime.UtcNow;

    public User(string email, string password)
    {
        Email = email;
        Password = password;
    }

    public User(string email, string password, string refreshToken)
    {
        Email = email;
        Password = password;
        RefreshToken = refreshToken;
    }
}