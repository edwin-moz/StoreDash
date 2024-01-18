namespace StoreDash.Models;
public class Inventory
{
    public int Id { get; set; }
    public bool Available { get; set; }
    public int DistributorId { get; set; }
    public Distributor? Distributor { get; set; }
    public decimal Price { get; set; }
    public int ProductId { get; set; }
    public Product? Product { get; set; }
    public int Stock { get; set; }
}