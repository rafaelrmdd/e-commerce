using backend.Context;
using backend.DTOs;
using backend.Models;
using backend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class ReviewService : IReviewService
{
    private readonly ReifferceContext _context;

    public ReviewService(ReifferceContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Review>> GetReviewsService()
    {
        var reviews = await _context.Reviews.ToListAsync();

        if (reviews.Count < 1)
        {
            throw new NotFoundException("No review was found");
        }

        return reviews;
    }

    public async Task<Review> GetReviewByIdService(int id)
    {
        var reviews = await _context.Reviews.FindAsync(id);

        if (reviews == null)
        {
            throw new NotFoundException($"Review with id: {id} was not found");
        }

        return reviews;
    }

    public async Task<Review> GetReviewByUserIdService(Guid id)
    {
        var review = await _context.Reviews.FindAsync(id);

        if (review == null)
        {
            throw new NotFoundException($"Review with user id: {id} was not found");
        }

        return review;
    }


    public async Task<Review> GetReviewByProductIdService(Guid id)
    {
        var review = await _context.Reviews.FindAsync(id);

        if (review == null)
        {
            throw new NotFoundException($"Review with id: {id} was not found");
        }

        return review;
    }

    public async Task<Review> AddReviewService(ReviewDTO reviewDTO)
    {
        if (string.IsNullOrEmpty(reviewDTO.Comment) || string.IsNullOrEmpty(reviewDTO.Title) || reviewDTO.Stars == 0)
        {
            throw new ValidationException("All review's fields must have an value");
        }

        Review newReview = new Review(
            Guid.Parse(reviewDTO.UserId),
            Guid.Parse(reviewDTO.ProductId),
            reviewDTO.Stars,
            reviewDTO.Title,
            reviewDTO.Comment
        );

        await _context.Reviews.AddAsync(newReview);
        await _context.SaveChangesAsync();

        return newReview;
    }

    public async Task<Review> UpdateReviewService(ReviewDTO reviewDTO, int id)
    {
        var review = await _context.Reviews.FindAsync(id);

        if (review == null)
        {
            throw new NotFoundException($"Review with id: {id} was not found");
        }

        if (string.IsNullOrEmpty(reviewDTO.Comment))
        {
            throw new ValidationException("Review's comment can't be null or empty");
        }

        review.Title = reviewDTO.Title;
        review.Comment = reviewDTO.Comment;
        review.Stars = reviewDTO.Stars;
        review.ProductId = Guid.Parse(reviewDTO.ProductId);
        review.UserId = Guid.Parse(reviewDTO.UserId);
        review.Timestamp = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return review;
    }

    public async Task<Review> DeleteReviewService(int id)
    {
        var review = await _context.Reviews.FindAsync(id);

        if (review == null)
        {
            throw new NotFoundException($"Review with id: {id} was not found");
        }

        _context.Reviews.Remove(review);
        await _context.SaveChangesAsync();

        return review;
    }

}