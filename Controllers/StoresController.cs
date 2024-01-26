using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StoreDash.Data;
using StoreDash.Models;
using StoreDash.Models.DTOs;

namespace StoreDash.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StoreController : ControllerBase
{
    private StoreDashDbContext _dbContext;
    public StoreController(StoreDashDbContext context, UserManager<IdentityUser> userManager)
    {
        _dbContext = context;
    }
    [HttpGet("{userId}")]
    [Authorize]
    public IActionResult GetStores(int userId)
    {
        List<Store> stores = _dbContext.Stores
        .Where((store) => store.UserId == userId)
        .OrderBy((store) => store.Name)
        .ToList();
        return Ok(stores.Select((store) => new StoreDTO
        {
            Id = store.Id,
            Active = store.Active,
            City = store.City,
            State = store.State,
            Street = store.Street,
            Name = store.Name,
            UserId = store.UserId,
            Zipcode = store.Zipcode,
        }));
    }
    [HttpPost]
    [Authorize]
    public IActionResult AddStore(Store store)
    {
        store.Active = true;
        _dbContext.Stores.Add(store);
        _dbContext.SaveChanges();
        return Created($"api/stores/{store.Id}", store);
    }
    [HttpPut("{storeId}")]
    [Authorize]
    public IActionResult EditStore(int storeId, Store store)
    {
        Store? storeToEdit = _dbContext.Stores.SingleOrDefault((store) => store.Id == storeId);
        if (storeToEdit != null)
        {
            storeToEdit.City = store.City;
            storeToEdit.State = store.State;
            storeToEdit.Street = store.Street;
            storeToEdit.Name = store.Name;
            storeToEdit.Zipcode = store.Zipcode;
            _dbContext.SaveChanges();
            return NoContent();
        }
        return BadRequest();
    }
    [HttpDelete("{storeId}")]
    [Authorize]
    public IActionResult DeleteStore(int storeId)
    {
        Store? store = _dbContext.Stores.SingleOrDefault((store) => store.Id == storeId);
        if (store == null)
        {
            return BadRequest();
        }
        _dbContext.Stores.Remove(store);
        _dbContext.SaveChanges();
        return NoContent();
    }
}