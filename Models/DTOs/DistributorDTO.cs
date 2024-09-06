namespace StoreDash.Models.DTOs;
public class DistributorDTO
{
    public int Id { get; set; }
    public bool Active { get; set; }
    public string? City { get; set; }
    public string? Name { get; set; }
    public string? State { get; set; }
    public string? Street { get; set; }
    public int Zipcode { get; set; }
    public string Address
    {
        get
        {
            string address = Street + " " + City + ", " + State + " " + Zipcode;
            return address;
        }
    }
    public List<InventoryDTO>? Inventories { get; set; }
}
