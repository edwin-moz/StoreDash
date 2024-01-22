using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StoreDash.Data;
using StoreDash.Models;

namespace StoreDash.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserProfileController : ControllerBase
{
    private StoreDashDbContext _dbContext;
    public UserProfileController(StoreDashDbContext context)
    {
        _dbContext = context;
    }
    [HttpPut("{userId}")]
    // [Authorize]
    public IActionResult EditUser(int userId, UserProfile user)
    {
        UserProfile? userToEdit = _dbContext.UserProfiles
        .Include((userProfile) => userProfile.IdentityUser)
        .SingleOrDefault((userProfile) => userProfile.Id == userId);
        if (userToEdit == null)
        {
            return BadRequest();
        }
        userToEdit.FirstName = user.FirstName;
        userToEdit.LastName = user.LastName;
        userToEdit.Address = user.Address;
        _dbContext.SaveChanges();
        return NoContent();
    }
}