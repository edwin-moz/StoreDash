namespace StoreDash.Models.DTOs;
public class OrderDTO
{
    public int Id { get; set; }
    public bool Cancelled { get; set; }
    public DateTime Date { get; set; }
    public bool Fulfilled { get; set; }
    public int StoreId { get; set; }
}