using backend.DTOs;
using backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("/api/reifferce")]
public class ReviewController : ControllerBase
{
    private readonly IReviewService _service;

    public ReviewController(IReviewService service)
    {
        _service = service;
    }

    [HttpGet("reviews")]
    public async Task<IActionResult> GetReviews()
    {
        try
        {
            var reviews = await _service.GetReviewsService();
            return Ok(reviews);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }

    }

    [HttpGet("review/{id}", Name = "GetReviewById")]
    public async Task<IActionResult> GetReviewById(int id)
    {
        try
        {
            var review = await _service.GetReviewByIdService(id);
            return Ok(review);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpGet("review/user/{id}", Name = "GetReviewByUserId")]
    public async Task<IActionResult> GetReviewByUserId(Guid id)
    {
        try
        {
            var review = await _service.GetReviewByUserIdService(id);
            return Ok(review);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpGet("review/product/{id}", Name = "GetReviewByProductId")]
    public async Task<IActionResult> GetReviewByProductId(Guid id)
    {
        try
        {
            var review = await _service.GetReviewByProductIdService(id);
            return Ok(review);
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPost("review")]
    public async Task<IActionResult> AddReview([FromBody] ReviewDTO reviewDTO)
    {
        try
        {
            await _service.AddReviewService(reviewDTO);
            return Ok("Review was successful added");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpPut("review/{id}")]
    public async Task<IActionResult> UpdateReview(ReviewDTO reviewDTO, int id)
    {
        try
        {
            await _service.UpdateReviewService(reviewDTO, id);
            return Ok("Specified review was updated");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpDelete("review/{id}")]
    public async Task<IActionResult> DeleteReview(int id)
    {
        try
        {
            await _service.DeleteReviewService(id);
            return Ok("Specified review was deleted");
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }
}