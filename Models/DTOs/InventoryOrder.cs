namespace StoreDash.Models.DTOs;
public class InventoryOrderDTO
{
    public int Id { get; set; }
    public int InventoryId { get; set; }
    public InventoryDTO? Inventory { get; set; }
    public int Quantity { get; set; }
    public int OrderId { get; set; }
}