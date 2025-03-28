using backend.Models;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace backend.Context;

public class ReifferceContext : DbContext
{
    public readonly IConfiguration _configuration;

    public ReifferceContext(IConfiguration configuration, DbContextOptions options) : base(options)
    {
        _configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseNpgsql(_configuration["MyConnectionStrings:NpgsqlConnectionString"]);
        }
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Categorie> Categories { get; set; }
}