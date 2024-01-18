namespace StoreDash.Models.DTOs;
public class Store
{
    public int Id { get; set; }
    public bool Active { get; set; }
    public string? City { get; set; }
    public string? State { get; set; }
    public string? Street { get; set; }
    public string? Name { get; set; }
    public int UserId { get; set; }
    public int Zipcode { get; set; }
}