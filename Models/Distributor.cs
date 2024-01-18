using System.ComponentModel.DataAnnotations;

namespace StoreDash.Models;
public class Distributor
{
    public int Id { get; set; }
    public bool Active { get; set; }
    [Required]
    public string? City { get; set; }
    [Required]
    public string? Name { get; set; }
    [Required]
    public string? State { get; set; }
    [Required]
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
    public List<Inventory>? InventoryList { get; set; }
}