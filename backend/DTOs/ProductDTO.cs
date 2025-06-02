namespace backend.DTOs;

public record ProductDTO(string Name, string Description, decimal Price, string ImageURL, int CategoryId, int SubCategoryId);