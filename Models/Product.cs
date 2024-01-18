using System.ComponentModel.DataAnnotations;

namespace StoreDash.Models;
public class Product
{
    public int Id { get; set; }
    public bool Available { get; set; }
    [Required]
    public string? ImageUrl { get; set; }
    [Required]
    public string? Name { get; set; }
    public int TypeId { get; set; }
}