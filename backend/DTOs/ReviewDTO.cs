namespace backend.DTOs;

public record ReviewDTO(Guid UserId, Guid ProductId, int Stars, string Comment);