namespace backend.DTOs;

public record ReviewDTO(string UserId, string ProductId, int Stars, string Title, string Comment);