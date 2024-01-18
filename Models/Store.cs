using System.ComponentModel.DataAnnotations;

namespace StoreDash.Models;
public class Store
{
    public int Id { get; set; }
    public bool Active { get; set; }
    [Required]
    public string? City { get; set; }
    [Required]
    public string? State { get; set; }
    [Required]
    public string? Street { get; set; }
    [Required]
    public string? Name { get; set; }
    public int UserId { get; set; }
    public int Zipcode { get; set; }
}