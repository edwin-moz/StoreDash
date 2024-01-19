using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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
    // [Authorize]
    public IActionResult GetDistributors()
    {
        List<Distributor> distributors = _dbContext.Distributors.ToList();
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
}