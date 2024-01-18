namespace StoreDash.Models;
public class InventoryOrder
{
    public int Id { get; set; }
    public int InventoryId { get; set; }
    public Inventory? Inventory { get; set; }
    public int Quantity { get; set; }
    public int OrderId { get; set; }
}