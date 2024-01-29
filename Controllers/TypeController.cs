using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StoreDash.Data;
using StoreDash.Models;
using StoreDash.ModelsDTO;

namespace StoreDash.Controllers;
[ApiController]
[Route("api/[controller]")]
public class TypeController : ControllerBase
{
    private StoreDashDbContext _dbContext;
    public TypeController(StoreDashDbContext context)
    {
        _dbContext = context;
    }
    [HttpGet]
    [Authorize]
    public IActionResult GetTypes()
    {
        List<Types> types = _dbContext.Types.OrderBy((type) => type.Name).ToList();
        return Ok(types.Select((type) => new TypesDTO
        {
            Id = type.Id,
            Name = type.Name
        }));
    }
    [HttpPost]
    [Authorize]
    public IActionResult AddType(Types type)
    {
        _dbContext.Add(type);
        _dbContext.SaveChanges();
        return Created($"api/type/{type.Id}", type);
    }
    [HttpPut("{typeId}")]
    [Authorize]
    public IActionResult EditType(int typeId, Types type)
    {
        Types? typeToEdit = _dbContext.Types.SingleOrDefault((type) => type.Id == typeId);
        if (typeToEdit == null)
        {
            return BadRequest();
        }
        typeToEdit.Name = type.Name;
        _dbContext.SaveChanges();
        return NoContent();
    }
    [HttpDelete("{typeId}")]
    [Authorize]
    public IActionResult DeleteType(int typeId)
    {
        Types? type = _dbContext.Types.SingleOrDefault((type) => type.Id == typeId);
        if (type == null)
        {
            return BadRequest();
        }
        _dbContext.Types.Remove(type);
        _dbContext.SaveChanges();
        return NoContent();
    }
}