namespace StoreDash.Models.DTOs;
public class ProductDTO
{
    public int Id { get; set; }
    public bool Available { get; set; }
    public string? ImageUrl { get; set; }
    public string? Name { get; set; }
    public int TypeId { get; set; }
}