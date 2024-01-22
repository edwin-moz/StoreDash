namespace StoreDash.Models.DTOs;
public class OrderDTO
{
    public int Id { get; set; }
    public bool Cancelled { get; set; }
    public DateTime Date { get; set; }
    public bool Fulfilled { get; set; }
    public int StoreId { get; set; }
    public StoreDTO? Store { get; set; }
    public List<InventoryOrderDTO>? InventoryOrders { get; set; }
    public decimal Total
    {
        get
        {
            decimal total = 0M;
            foreach (InventoryOrderDTO inventoryOrder in InventoryOrders)
            {
                decimal price = inventoryOrder.Inventory.Price;
                int quantity = inventoryOrder.Quantity;
                total += price * quantity;
            }
            return total;
        }
    }
}