namespace backend.DTOs;

public record UserRegisterDTO(string Email, string Password, string ConfirmPassword);