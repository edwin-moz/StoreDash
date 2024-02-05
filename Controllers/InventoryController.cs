using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StoreDash.Data;
using StoreDash.Models;

namespace StoreDash.Controllers;
[ApiController]
[Route("api/[controller]")]
public class InventoryController : ControllerBase
{
    private StoreDashDbContext _dbContext;
    public InventoryController(StoreDashDbContext context)
    {
        _dbContext = context;
    }
    [HttpPost]
    [Authorize]
    public IActionResult AddInventory(Inventory inventory)
    {
        inventory.Available = true;
        inventory.Stock = 999;
        _dbContext.Inventories.Add(inventory);
        _dbContext.SaveChanges();
        return Created($"api/inventories/{inventory.Id}", inventory);
    }
    [HttpPut("{inventoryId}")]
    [Authorize]
    public IActionResult EditInventory(int inventoryId, Inventory inventory)
    {
        Inventory? inventoryToEdit = _dbContext.Inventories.SingleOrDefault((inventory) => inventory.Id == inventoryId);
        if (inventoryToEdit == null)
        {
            return BadRequest();
        }
        inventoryToEdit.Available = inventory.Available;
        inventoryToEdit.Price = inventory.Price;
        inventoryToEdit.Stock = inventory.Stock;
        _dbContext.SaveChanges();
        return NoContent();
    }
    [HttpDelete("{inventoryId}")]
    [Authorize]
    public IActionResult DeleteInventory(int inventoryId)
    {
        Inventory? inventory = _dbContext.Inventories.SingleOrDefault((inventory) => inventory.Id == inventoryId);
        if (inventory == null)
        {
            return BadRequest();
        }
        _dbContext.Inventories.Remove(inventory);
        _dbContext.SaveChanges();
        return NoContent();
    }
}