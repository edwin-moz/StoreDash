using System.ComponentModel.DataAnnotations;

namespace StoreDash.Models;
public class Types
{
    public int Id { get; set; }
    [Required]
    public string? Name { get; set; }
}