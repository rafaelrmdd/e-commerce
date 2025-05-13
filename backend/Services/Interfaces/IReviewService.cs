using backend.DTOs;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Services.Interfaces;

public interface IReviewService
{
    public Task<IEnumerable<Review>> GetReviewsService();
    public Task<Review> GetReviewByIdService(int id);
    public Task<Review> GetReviewByUserIdService(Guid id);
    public Task<Review> GetReviewByProductIdService(Guid id);
    public Task<Review> AddReviewService(ReviewDTO reviewDTO);
    public Task<Review> UpdateReviewService(ReviewDTO reviewDTO, int id);
    public Task<Review> DeleteReviewService(int id);
}