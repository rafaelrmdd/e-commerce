namespace backend.DTOs;

public record ProductDTO(string Name, string Description, decimal Price, int CategoryId, int SubCategoryId);