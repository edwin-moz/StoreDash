using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StoreDash.Models;
using StoreDash.Data.Interfaces;

namespace StoreDash.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TypeController : ControllerBase
{
    private readonly ITypeRepository typeRepository;

    public TypeController(ITypeRepository typeRepository)
    {
        this.typeRepository = typeRepository;
    }

    [HttpGet]
    [Authorize]
    public IActionResult GetTypes()
    {
        List<Types> types = typeRepository.Get();

        return Ok(types);
    }

    [HttpPost]
    [Authorize]
    public IActionResult AddType(Types type)
    {
        Types results = typeRepository.Post(type);

        return Created($"api/type/{results.Id}", type);
    }

    [HttpPut("{typeId}")]
    [Authorize]
    public IActionResult EditType(int typeId, Types type)
    {
        Types? results = typeRepository.Put(type);

        if (results == null)
        {
            return BadRequest();
        }

        return NoContent();
    }
    [HttpDelete("{typeId}")]
    [Authorize]
    public IActionResult DeleteType(int typeId)
    {
        bool results = typeRepository.Delete(typeId);

        if (results)
        {
            return NoContent();
        }

        return BadRequest();
    }
}
