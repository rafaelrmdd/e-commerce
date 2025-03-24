using backend.Context;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("/api")]
public class ReifferceControllers : ControllerBase
{
    private readonly ReifferceContext _context;

    public ReifferceControllers(ReifferceContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> getProducts()
    {
        var products = await _context.Products.ToListAsync();

        if (products.Count < 1)
        {
            return NotFound("No product was found.");
        }

        return Ok(products);
    }
}