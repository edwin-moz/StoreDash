using System.ComponentModel.DataAnnotations;

namespace StoreDash.Models;
public class Type
{
    public int Id { get; set; }
    [Required]
    public string? Name { get; set; }
}