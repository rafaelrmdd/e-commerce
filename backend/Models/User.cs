using System.Text.Json.Serialization;

namespace backend.Models;

public class User
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Login { get; set; }
    public string Password { get; set; }

    [JsonIgnore]
    public virtual ICollection<Review>? Reviews { get; set; }

    public User(string name, string login, string password)
    {
        Name = name;
        Login = login;
        Password = password;
    }
}