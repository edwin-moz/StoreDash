using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StoreDash.Data;
using StoreDash.Models;
using StoreDash.Models.DTOs;

namespace StoreDash.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DistributorController : ControllerBase
{
    private StoreDashDbContext _dbContext;
    public DistributorController(StoreDashDbContext context, UserManager<IdentityUser> userManager)
    {
        _dbContext = context;
    }
    [HttpGet]
    [Authorize]
    public IActionResult GetDistributors()
    {
        List<Distributor> distributors = _dbContext.Distributors
        .OrderBy((distributor) => distributor.Name)
        .ToList();
        return Ok(
            distributors.Select((distributor) => new DistributorDTO
            {
                Id = distributor.Id,
                Active = distributor.Active,
                City = distributor.City,
                Name = distributor.Name,
                State = distributor.State,
                Street = distributor.Street,
                Zipcode = distributor.Zipcode,
            })
        );
    }
    [HttpGet("{distributorId}")]
    // [Authorize]
    public IActionResult GetDistributor(int distributorId)
    {
        Distributor? distributor = _dbContext.Distributors
        .Include((distributor) => distributor.Inventories)
        .ThenInclude((inventory) => inventory.Product)
        .ToList()
        .SingleOrDefault((distributor) => distributor.Id == distributorId);
        if (distributor == null)
        {
            return BadRequest();
        }
        distributor.Inventories = distributor.Inventories.OrderBy((inventory) => inventory.Product.Name).ToList();
        return Ok(new DistributorDTO
        {
            Id = distributor.Id,
            Active = distributor.Active,
            City = distributor.City,
            Name = distributor.Name,
            State = distributor.State,
            Street = distributor.Street,
            Zipcode = distributor.Zipcode,
            Inventories = distributor.Inventories?.Select((inventory) => new InventoryDTO
            {
                Id = inventory.Id,
                Available = inventory.Available,
                DistributorId = inventory.DistributorId,
                Price = inventory.Price,
                ProductId = inventory.ProductId,
                Product = new ProductDTO
                {
                    Id = inventory.Product.Id,
                    Available = inventory.Product.Available,
                    ImageUrl = inventory.Product.ImageUrl,
                    Name = inventory.Product.Name,
                    TypeId = inventory.Product.TypeId,
                },
                Stock = inventory.Stock,
            }).ToList()
        });
    }
}