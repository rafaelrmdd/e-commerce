namespace backend.DTOs;

public record CartItemDTO(string ProductId, string UserId, int Quantity);