using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StoreDash.Data;
using StoreDash.Models;
using StoreDash.Models.DTOs;

namespace StoreDash.Controllers;
[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private StoreDashDbContext _dbContext;
    public ProductController(StoreDashDbContext context)
    {
        _dbContext = context;
    }
    [HttpGet]
    [Authorize]
    public IActionResult GetProducts()
    {
        List<Product> products = _dbContext.Products.OrderBy((product) => product.Name).ToList();
        return Ok(products.Select((product) => new ProductDTO
        {
            Id = product.Id,
            Available = product.Available,
            ImageUrl = product.ImageUrl,
            Name = product.Name,
            TypeId = product.TypeId,
        }));
    }
    [HttpPost]
    [Authorize]
    public IActionResult AddProduct(Product product)
    {
        product.Available = true;
        _dbContext.Products.Add(product);
        _dbContext.SaveChanges();
        return Created($"api/product/{product.Id}", product);
    }
    [HttpPut("{productId}")]
    [Authorize]
    public IActionResult EditProduct(int productId, Product product)
    {
        Product? productToEdit = _dbContext.Products.SingleOrDefault((product) => product.Id == productId);
        if (productToEdit == null)
        {
            return BadRequest();
        }
        productToEdit.Available = product.Available;
        productToEdit.ImageUrl = product.ImageUrl;
        productToEdit.Name = product.Name;
        productToEdit.TypeId = product.TypeId;
        _dbContext.SaveChanges();
        return NoContent();
    }
    [HttpDelete("{productId}")]
    [Authorize]
    public IActionResult DeleteProduct(int productId)
    {
        Product? product = _dbContext.Products.SingleOrDefault((product) => product.Id == productId);
        if (product == null)
        {
            return BadRequest();
        }
        _dbContext.Products.Remove(product);
        _dbContext.SaveChanges();
        return NoContent();
    }
}