namespace StoreDash.Models.DTOs;
public class InventoryDTO
{
    public int Id { get; set; }
    public bool Available { get; set; }
    public int DistributorId { get; set; }
    public DistributorDTO? Distributor { get; set; }
    public decimal Price { get; set; }
    public int ProductId { get; set; }
    public ProductDTO? Product { get; set; }
    public int Stock { get; set; }
}