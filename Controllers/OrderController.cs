using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StoreDash.Data;
using StoreDash.Models;
using StoreDash.Models.DTOs;

namespace StoreDash.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrderController : ControllerBase
{
    private StoreDashDbContext _dbContext;
    public OrderController(StoreDashDbContext context)
    {
        _dbContext = context;
    }
    [HttpGet("{userId}")]
    // [Authorize]
    public IActionResult GetOrders(int userId)
    {
        List<Order> orders = _dbContext.Orders
        .Include((order) => order.Store)
        .Include((order) => order.InventoryOrders)
        .ThenInclude((inventoryOrder) => inventoryOrder.Inventory)
        .ThenInclude((inventory) => inventory.Product)
        .Where((order) => order.Store.UserId == userId)
        .ToList();
        return Ok(orders.Select((order) => new OrderDTO
        {
            Id = order.Id,
            Cancelled = order.Cancelled,
            Date = order.Date,
            Fulfilled = order.Fulfilled,
            StoreId = order.StoreId,
            Store = new StoreDTO
            {
                Id = order.Store.Id,
                Active = order.Store.Active,
                City = order.Store.City,
                State = order.Store.State,
                Street = order.Store.Street,
                Name = order.Store.Name,
                UserId = order.Store.UserId,
                Zipcode = order.Store.Zipcode,
            },
            InventoryOrders = order.InventoryOrders.Select((inventoryOrder) => new InventoryOrderDTO
            {
                Id = inventoryOrder.Id,
                InventoryId = inventoryOrder.InventoryId,
                Inventory = new InventoryDTO
                {
                    Id = inventoryOrder.Inventory.Id,
                    Available = inventoryOrder.Inventory.Available,
                    DistributorId = inventoryOrder.Inventory.DistributorId,
                    Price = inventoryOrder.Inventory.Price,
                    ProductId = inventoryOrder.Inventory.ProductId,
                    Product = new ProductDTO
                    {
                        Id = inventoryOrder.Inventory.Product.Id,
                        Available = inventoryOrder.Inventory.Product.Available,
                        ImageUrl = inventoryOrder.Inventory.Product.ImageUrl,
                        Name = inventoryOrder.Inventory.Product.Name,
                        TypeId = inventoryOrder.Inventory.Product.TypeId,
                    },
                    Stock = inventoryOrder.Inventory.Stock,
                },
                Quantity = inventoryOrder.Quantity,
                OrderId = inventoryOrder.OrderId,
            })
            .ToList()

        }));
    }
    [HttpPost]
    [Authorize]
    public IActionResult PlaceOrder(Order order)
    {
        order.Date = DateTime.Now;
        _dbContext.Orders.Add(order);
        _dbContext.SaveChanges();
        return Created($"api/order/{order.Id}", order);
    }
    [HttpDelete("{orderId}")]
    [Authorize]
    public IActionResult DeleteOrder(int orderId)
    {
        Order? order = _dbContext.Orders.SingleOrDefault((order) => order.Id == orderId);
        if (order == null)
        {
            return BadRequest();
        }
        _dbContext.Orders.Remove(order);
        _dbContext.SaveChanges();
        return NoContent();
    }
}