using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using StoreDash.Models;
using Microsoft.AspNetCore.Identity;

namespace StoreDash.Data;
public class StoreDashDbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;
    public DbSet<UserProfile> UserProfiles { get; set; }
    public DbSet<Distributor> Distributors { get; set; }
    public DbSet<Inventory> InventoryList { get; set; }
    public DbSet<InventoryOrder> InventoryOrders { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Store> Stores { get; set; }
    public DbSet<Types> Types { get; set; }
    public StoreDashDbContext(DbContextOptions<StoreDashDbContext> context, IConfiguration config) : base(context)
    {
        _configuration = config;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
        {
            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            Name = "Admin",
            NormalizedName = "admin"
        });

        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser
        {
            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            UserName = "Administrator",
            Email = "admina@strator.comx",
            PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
        });

        modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
        {
            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f"
        });
        modelBuilder.Entity<UserProfile>().HasData(new UserProfile
        {
            Id = 1,
            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            FirstName = "Admina",
            LastName = "Strator",
            Address = "101 Main Street",
        });
        modelBuilder.Entity<Distributor>().HasData(new Distributor[]
        {
            new Distributor{Id = 1, Active = true, City = "Goodlettsville", Name = "Associated WholeSale Grocers", State = "TN", Street = "500 South Cartwright St.", Zipcode = 37072},
            new Distributor{Id = 2, Active = true, City = "Freshville", Name = "Harvest Haven", State = "CA", Street = "123 Organic Avenue", Zipcode = 98765},
            new Distributor{Id = 3, Active = true, City = "Greenburgh", Name = "Eco-Food Emporium", State = "NY", Street = "456 Sustainable Street", Zipcode = 54321},
            new Distributor{Id = 4, Active = true, City = "NutriCity", Name = "Healthful Groceries Ltd.", State = "TX", Street = "789 Wellness Lane", Zipcode = 12345},
            new Distributor{Id = 5, Active = true, City = "VeggieVille", Name = "Farm Fresh Foods Inc.", State = "FL", Street = "321 Nutrient Boulevard", Zipcode = 67890},
            new Distributor{Id = 6, Active = true, City = "Organic Oasis", Name = "Pure Produce Haven", State = "WA", Street = "101 Green Plaza", Zipcode = 54321},
            new Distributor{Id = 7, Active = true, City = "Healthfield", Name = "Wellbeing Goods Co.", State = "GA", Street = "246 Vitality Street", Zipcode = 13579},
            new Distributor{Id = 8, Active = true, City = "Nutriburg", Name = "NourishGroceries R Us", State = "OH", Street = "876 Wellness Circle", Zipcode = 24680},
            new Distributor{Id = 9, Active = true, City = "Vitamin Vista", Name = "Nutrient Cuisine Co.", State = "IL", Street = "555 Wellness Lane", Zipcode = 98765},
            new Distributor{Id = 10, Active = true, City = "Wellnessville", Name = "HealthHub Inc.", State = "CO", Street = "777 Wellness Highway", Zipcode = 54321},
            new Distributor{Id = 11, Active = true, City = "Farmersburg", Name = "Nutrient Nosh Ltd.", State = "PA", Street = "999 Fresh Road", Zipcode = 13579},
            new Distributor{Id = 12, Active = true, City = "Produce Plaza", Name = "Fresh Food Collective", State = "MI", Street = "111 Nutritional Road", Zipcode = 24680},
            new Distributor{Id = 13, Active = true, City = "Greenfield", Name = "Greens Galore Hub", State = "NC", Street = "333 Veggie Lane", Zipcode = 98765},
            new Distributor{Id = 14, Active = true, City = "Harvest Hills", Name = "Natural Nibbles Palace", State = "AZ", Street = "444 Fresh Lane", Zipcode = 54321},
            new Distributor{Id = 15, Active = true, City = "Nutriwood", Name = "Healthful Harvesters Limited", State = "OR", Street = "222 Wellness Court", Zipcode = 13579},
            new Distributor{Id = 16, Active = true, City = "Wellnessville", Name = "Wellness Wonders Inc.", State = "NV", Street = "888 Nutrient Junction", Zipcode = 24680},
            new Distributor{Id = 17, Active = true, City = "Greenfields", Name = "Wholesome Goods Co.", State = "UT", Street = "777 Health Lane", Zipcode = 54321},
            new Distributor{Id = 18, Active = true, City = "Pureville", Name = "PureFood Fortress", State = "ID", Street = "555 Nutri Street", Zipcode = 13579},
            new Distributor{Id = 19, Active = true, City = "Health Haven", Name = "Wellness Groceries Galore", State = "OK", Street = "123 Green Chateau", Zipcode = 24680},
            new Distributor{Id = 20, Active = true, City = "Nature Nook", Name = "Nature's Bounty Emporium", State = "LA", Street = "999 Green Cove", Zipcode = 98765},
        });
        modelBuilder.Entity<Inventory>().HasData(new Inventory[]
        {
            new Inventory{}
        });
        modelBuilder.Entity<Types>().HasData(new Types[]
        {
            new Types{Id = 1, Name = "Deli"},
            new Types{Id = 2, Name = "Produce"},
            new Types{Id = 3, Name = "Dairy"},
            new Types{Id = 4, Name = "Meat"},
            new Types{Id = 5, Name = "Bakery"},
            new Types{Id = 6, Name = "Frozen Foods"},
            new Types{Id = 7, Name = "Canned Goods"},
            new Types{Id = 8, Name = "Snacks"},
            new Types{Id = 9, Name = "Beverages"},
            new Types{Id = 10, Name = "Seafood"},
            new Types{Id = 11, Name = "Condiments"},
            new Types{Id = 12, Name = "Grains & Pasta"},
            new Types{Id = 13, Name = "Sweets & Desserts"},
            new Types{Id = 14, Name = "Spices & Seasonings"},
            new Types{Id = 15, Name = "Organic & Natural"},
            new Types{Id = 16, Name = "Ethnic Foods"},
            new Types{Id = 17, Name = "Health & Wellness"},
            new Types{Id = 18, Name = "Baby & Toddler"},
            new Types{Id = 19, Name = "Household Essentials"},
            new Types{Id = 20, Name = "Pet Supplies"},
            new Types{Id = 21, Name = "Specialty Foods"},
            new Types{Id = 22, Name = "Alcohol"},
        });
        modelBuilder.Entity<Product>().HasData(new Product[]
        {
            new Product{Id = 1, Available = true, ImageUrl = "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=800", Name = "Apples", TypeId = 2},
            new Product{Id = 2, Available = true, ImageUrl = "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?b=1&s=612x612&w=0&k=20&c=LE7IRYWDGyPHLw2p-OrVpM07h7KVaIeb1Jn104y_pkU=", Name = "Bananas", TypeId = 3},
            new Product{Id = 3, Available = true, ImageUrl = "https://media.istockphoto.com/id/1412854156/photo/strawberries-isolated-strawberry-whole-and-a-half-on-white-background-strawberry-slice-with.jpg?b=1&s=612x612&w=0&k=20&c=zTWv_RCMlSfr4ATR45uYGFCRMCp8AoBiBCEO_P6XK1Q=", Name = "Strawberries", TypeId = 3},
            new Product{Id = 4, Available = true, ImageUrl = "https://media.istockphoto.com/id/911794888/photo/lettuce-salad-leaves-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=4PbkvklrFRhrCOZ1yg_YKvRrykiZ2kGcCH7RJFvpa3E=", Name = "Lettuce", TypeId = 2},
            new Product{Id = 5, Available = true, ImageUrl = "https://media.istockphoto.com/id/466175630/photo/tomato-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=zN55o1lj4JdZCOI6BBnt6ARtJL7X9lHJ5POS4aGFnyw=", Name = "Tomatoes", TypeId = 3},
            new Product{Id = 6, Available = true, ImageUrl = "https://media.istockphoto.com/id/545454816/photo/fresh-carrots-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=ABrFz1h6Vx62kC_QBzH1wUKv6BCMf7II_QnysmfYOr4=", Name = "Carrots", TypeId = 3},
            new Product{Id = 7, Available = true, ImageUrl = "https://media.istockphoto.com/id/1135308302/photo/broccoli-on-white.jpg?b=1&s=612x612&w=0&k=20&c=tP6GicNnKNhChipfwgqQqMLH7k0iUl7PEC8nUNbDAYU=", Name = "Broccoli", TypeId = 3},
            new Product{Id = 8, Available = true, ImageUrl = "https://media.istockphoto.com/id/537828836/photo/spinach.jpg?b=1&s=612x612&w=0&k=20&c=GVlNnWriXj5DTYl0Bw7VkUPtQShMkVYUzTW1WtrNz9M=", Name = "Spinach", TypeId = 3},
            new Product{Id = 9, Available = true, ImageUrl = "https://media.istockphoto.com/id/91516166/photo/cucumber-slices-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=WBXIqmpn8tpOofwT54sItsSaJN8c_-beqrmcVIsl8kw=", Name = "Cucumbers", TypeId = 3},
            new Product{Id = 10, Available = true, ImageUrl = "https://media.istockphoto.com/id/153564958/photo/colorful-peppers.jpg?b=1&s=612x612&w=0&k=20&c=w1mwm8XwNc9M139FLN-lsfeAoA4VL0DENuqAvWxk-hM=", Name = "Bell Peppers", TypeId = 3},
            new Product{Id = 11, Available = true, ImageUrl = "https://media.istockphoto.com/id/185284489/photo/orange.jpg?b=1&s=612x612&w=0&k=20&c=P6dfluS7PhPHB4BpgWlNmsFOUyUuD8wQMPGOtnsBln4=", Name = "Oranges", TypeId = 3},
            new Product{Id = 12, Available = true, ImageUrl = "https://media.istockphoto.com/id/803721418/photo/grape-dark-grape-grapes-with-leaves-isolated-with-clipping-path-full-depth-of-field.jpg?b=1&s=612x612&w=0&k=20&c=05K35Jy2PWEnbSIXh2PaS8mB5rxQwp0BgS_N9Atb3BE=", Name = "Grapes", TypeId = 3},
            new Product{Id = 13, Available = true, ImageUrl = "https://media.istockphoto.com/id/1217479737/photo/pineapple-with-slices-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=YurK7AyvZP3WcBjrhXXQ_WhtzVmnyhn__hjJNvHYEPM=", Name = "Pineapple", TypeId = 3},
            new Product{Id = 14, Available = true, ImageUrl = "https://media.istockphoto.com/id/492393524/photo/two-slices-of-watermelon-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=EU3xDGKgQSU9NFngVcHHik75LqvhH1ewiI-yfhhHCyw=", Name = "Watermelon", TypeId = 3},
            new Product{Id = 15, Available = true, ImageUrl = "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?b=1&s=612x612&w=0&k=20&c=txk4DGWXL9cntyePO6C-X8inysng0mQ0lCuW2FdjG00=", Name = "Potatoes", TypeId = 6},
            new Product{Id = 16, Available = true, ImageUrl = "https://media.istockphoto.com/id/513920379/photo/onion-bulbs.jpg?b=1&s=612x612&w=0&k=20&c=6QujvqU2k2C0kZhlihQsakOLjh5j_DLz_xEL6bXshZ4=", Name = "Onions", TypeId = 6},
            new Product{Id = 17, Available = true, ImageUrl = "https://media.istockphoto.com/id/94929126/photo/avocados-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=_166_YaZUSyO54A-4SYxBGn_U23XAytL2xOmjbwqhSc=", Name = "Avocado", TypeId = 3},
            new Product{Id = 18, Available = true, ImageUrl = "https://media.istockphoto.com/id/168370138/photo/mango.jpg?b=1&s=612x612&w=0&k=20&c=Xo2Wr9mMxe2KWZI1__4usBsgR7t8mJvemHZTrLMylOc=", Name = "Mango", TypeId = 3},
            new Product{Id = 19, Available = true, ImageUrl = "https://media.istockphoto.com/id/834807852/photo/whole-kiwi-fruit-and-half-kiwi-fruit-on-white.jpg?b=1&s=612x612&w=0&k=20&c=j_FB9-cSPCt3d8VNFmTrob7mD4aVAQ6wQ8DjWhww8UI=", Name = "Kiwi", TypeId = 3},
            new Product{Id = 20, Available = true, ImageUrl = "https://media.istockphoto.com/id/1299073137/photo/pears-isolated-one-and-a-half-green-pear-fruit-with-leaf-on-white-background-pear-slice-with.jpg?b=1&s=612x612&w=0&k=20&c=fIG7kvOBpZ5HCz60I3nUX71IzdK0eM5teJh-UeY7kVs=", Name = "Pears", TypeId = 3},
            new Product{Id = 21, Available = true, ImageUrl = "https://media.istockphoto.com/id/1151868959/photo/single-whole-peach-fruit-with-leaf-and-slice-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=X3NY9RVSDT6bCgd-kAHNiLJaR5WhSp74xAwX8bZnsoA=", Name = "Plums", TypeId = 3},
            new Product{Id = 23, Available = true, ImageUrl = "https://media.istockphoto.com/id/533381303/photo/cherry-with-leaves-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=BVZA7JWVXV-tk4QXrwgDLooLir9E3lcg-BjDXLFVKcA=", Name = "Cherries", TypeId = 3},
            new Product{Id = 24, Available = true, ImageUrl = "https://media.istockphoto.com/id/853493518/photo/blueberry-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=8WA9WRalXfMEDpUBfBevYc-E7SUvbBIAoFTDDlfHewI=", Name = "Blueberries", TypeId = 3},
            new Product{Id = 25, Available = true, ImageUrl = "https://media.istockphoto.com/id/648967314/photo/raspberry-with-leaves-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=0I6-RpRF77o5nd2Cc1bYDipVb3VAxrKTFN-7QxRleQ0=", Name = "Raspberries", TypeId = 3},
            new Product{Id = 26, Available = true, ImageUrl = "https://media.istockphoto.com/id/173612468/photo/close-up-of-two-fresh-blackberry-with-leaves.jpg?b=1&s=612x612&w=0&k=20&c=whggdKzkxQp9PRamQQkHhksCEnRtRg5MOY9vl1KvhEs=", Name = "Blackberries", TypeId = 3},
            new Product{Id = 27, Available = true, ImageUrl = "https://media.istockphoto.com/id/673162168/photo/green-cabbage-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=D18qaU48dFgRfwgQs6BqBZacGq7J7qVy6g5gJGS0zHY=", Name = "Cabbage", TypeId = 3},
            new Product{Id = 28, Available = true, ImageUrl = "https://media.istockphoto.com/id/492464736/photo/fresh-celery-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=AdaGNsFFhbvbMRRqAqZfQ3rYspco_VIRJJInKv_UDNw=", Name = "Celery", TypeId = 3},
            new Product{Id = 29, Available = true, ImageUrl = "https://media.istockphoto.com/id/1149201983/photo/fresh-whole-and-sliced-zucchini-isolated-on-white-background-from-top-view-courgette-zucchini.jpg?b=1&s=612x612&w=0&k=20&c=u5wFmhkRu6KOFv-TeOVEAXbN2DQJ8JQFWrBAz2eraSk=", Name = "Zucchini", TypeId = 3},
            new Product{Id = 30, Available = true, ImageUrl = "https://media.istockphoto.com/id/1168507984/photo/artichoke-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=vCDAjxui2vI0Rny_VLP_tdg2_vW_AP8ZDB8ngvV2Dq8=", Name = "Artichokes", TypeId = 3},
            new Product{Id = 31, Available = true, ImageUrl = "https://media.istockphoto.com/id/510515443/photo/eggplant-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=VXWufiM7dTBQ2Vn4Mln2CvJTkXWTcJg127W_s-5Q-sE=", Name = "Eggplant", TypeId = 3},
            new Product{Id = 32, Available = true, ImageUrl = "https://media.istockphoto.com/id/1209954419/photo/asparagus.jpg?b=1&s=612x612&w=0&k=20&c=J0Qshe5QRKtadKCKWi6bVWP17oLfXlv_yphulh4Ffrg=", Name = "Asparagus", TypeId = 3},
            new Product{Id = 33, Available = true, ImageUrl = "https://media.istockphoto.com/id/121137414/photo/small-garden-radish.jpg?b=1&s=612x612&w=0&k=20&c=2KG1LALR1D3nYAlr0I_XKcMvHJcdZnzvMZIUPrcMXis=", Name = "Radishes", TypeId = 3},
            new Product{Id = 34, Available = true, ImageUrl = "https://media.istockphoto.com/id/511868689/photo/fresh-cauliflower-with-pieces-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=3ixuBhi6PlK-Cz9Bcvt3WnWcSuXVoMBM0LjpQeGviTo=", Name = "Cauliflower", TypeId = 3},
            new Product{Id = 35, Available = true, ImageUrl = "https://media.istockphoto.com/id/183537075/photo/sprouts.jpg?b=1&s=612x612&w=0&k=20&c=QZnI1pBQQgsSN3tkN8wjlrQGt1W-HISuvDPPnlpBhaE=", Name = "Brussels Sprouts", TypeId = 3},
            new Product{Id = 36, Available = true, ImageUrl = "https://media.istockphoto.com/id/1349843758/photo/green-beans-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=H-hNL7PCzqgW6Br73ibvtX0nlEIyJjaQpzrkTqEeIGM=", Name = "Green Beans", TypeId = 3},
            new Product{Id = 37, Available = true, ImageUrl = "https://media.istockphoto.com/id/135091129/photo/kale.jpg?b=1&s=612x612&w=0&k=20&c=g6O2ZC99WobX27nmQH77D_ZK32qpgKcwvTleOWrrKx8=", Name = "Kale", TypeId = 3},
            new Product{Id = 38, Available = true, ImageUrl = "https://media.istockphoto.com/id/466175634/photo/lemon-fruit-with-half-and-leaves-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=J8s3KvBhcIgn8tRskk2iZfroHMEBvsmb2mkn2yBeU68=", Name = "Lemons", TypeId = 3},
            new Product{Id = 39, Available = true, ImageUrl = "https://media.istockphoto.com/id/1156644711/photo/lime-isolated-lime-half-slice-piece-isolate-on-white-lime-set.jpg?b=1&s=612x612&w=0&k=20&c=gbWnImzEn43Q7imNt9D_8OfE-2LEtf2zGVsBaocKGmo=", Name = "Limes", TypeId = 3},
            new Product{Id = 40, Available = true, ImageUrl = "https://media.istockphoto.com/id/511851020/photo/fresh-ginger-root-or-rhizome-isolated-on-white-background-cutout.jpg?b=1&s=612x612&w=0&k=20&c=WHXw67apYjP8bTHxoJzS8MRGnSWHNHF9RrBuC4OwkD0=", Name = "Ginger", TypeId = 13},
            new Product{Id = 41, Available = true, ImageUrl = "https://media.istockphoto.com/id/499147864/photo/garlic.jpg?b=1&s=612x612&w=0&k=20&c=YMolUd7kApfhkI8apiGLMyy67rNNi7Fcj80sDVt9ATo=", Name = "Garlic", TypeId = 13},
            new Product{Id = 42, Available = true, ImageUrl = "https://media.istockphoto.com/id/513920379/photo/onion-bulbs.jpg?b=1&s=612x612&w=0&k=20&c=6QujvqU2k2C0kZhlihQsakOLjh5j_DLz_xEL6bXshZ4=", Name = "Onions", TypeId = 13},
            new Product{Id = 43, Available = true, ImageUrl = "https://media.istockphoto.com/id/489426066/photo/parsley-isolated-on-white-background-collection.jpg?b=1&s=612x612&w=0&k=20&c=8b6WqDXw9czEJxojZCKGmPka-k73dMsFgCDAXPCdf8Q=", Name = "Parsley", TypeId = 14},
            new Product{Id = 44, Available = true, ImageUrl = "https://media.istockphoto.com/id/935822182/photo/basil-leaves-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=87EpPFv8ku1Q7_kvUdm8BHipXAl1FYfeXROmdvNoya4=", Name = "Basil", TypeId = 14},
            new Product{Id = 45, Available = true, ImageUrl = "https://media.istockphoto.com/id/155598075/photo/fresh-mint-leaf-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=bQMWIv7xpwCZBRLgzHlmppbxTEMRr4KYBJof0ugImvA=", Name = "Mint", TypeId = 14},
            new Product{Id = 46, Available = true, ImageUrl = "https://media.istockphoto.com/id/155098529/photo/coriander.jpg?b=1&s=612x612&w=0&k=20&c=V3hy0483I85S1K1UO7kuAYbwLvTKoxhepSEudinHIqY=", Name = "Cilantro", TypeId = 14},
            new Product{Id = 47, Available = true, ImageUrl = "https://media.istockphoto.com/id/157568691/photo/fresh-thyme-bunch-tied-up-shot-on-white-backdrop.jpg?b=1&s=612x612&w=0&k=20&c=6Vv0rdMtXCQVq2d8oE5kvnG9ZDXeShpsT8wlAIgEN8g=", Name = "Thyme", TypeId = 14},
            new Product{Id = 48, Available = true, ImageUrl = "https://media.istockphoto.com/id/157336697/photo/fresh-rosemary-sprigs-or-rosmarinus-officinalis-on-white.jpg?b=1&s=612x612&w=0&k=20&c=8h0WS_6KeMXpFzRb2scB3sl6YK00CNg8KfRv_jDComg=", Name = "Rosemary", TypeId = 14},
            new Product{Id = 49, Available = true, ImageUrl = "https://media.istockphoto.com/id/174651894/photo/oregano-twigs.jpg?b=1&s=612x612&w=0&k=20&c=nRQgoumGmIZ-d8DCbnfc-MQ14CraxUzuRDlDMSrklfg=", Name = "Oregano", TypeId = 14},
            new Product{Id = 50, Available = true, ImageUrl = "https://media.istockphoto.com/id/183812930/photo/sage.jpg?b=1&s=612x612&w=0&k=20&c=TZQyMyAkYWhqCaO4MKylLFhnivjlKS8NFHGgCzFuq7k=", Name = "Sage", TypeId = 14},
            new Product{Id = 51, Available = true, ImageUrl = "https://media.istockphoto.com/id/151905632/photo/freshly-sliced-stack-of-turkey-breast-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=G4sKiMZhc6yOVAqwvxMM_e_l2I3MzzoGwDTj1E2SO2U=", Name = "Turkey Breast", TypeId = 1},
            new Product{Id = 52, Available = true, ImageUrl = "https://media.istockphoto.com/id/500454774/photo/piece-of-cheese-isolated.jpg?b=1&s=612x612&w=0&k=20&c=J4ABnayJtoaD6w_WEL4rsiNnzK0HneUIQCoydMCn6Go=", Name = "Swiss Cheese", TypeId = 1},
            new Product{Id = 53, Available = true, ImageUrl = "https://media.istockphoto.com/id/169943249/photo/heap-of-pepperoni.jpg?b=1&s=612x612&w=0&k=20&c=xrG7pqhvctZQA_M5AfahZIz7wvFdz4_isD5DaAnqk4Y=", Name = "Salami", TypeId = 1},
            new Product{Id = 54, Available = true, ImageUrl = "https://media.istockphoto.com/id/966204184/photo/bowl-of-hummus.jpg?b=1&s=612x612&w=0&k=20&c=5XfpPsiMJBAdfAyXxsWik8TWENq6F5rEjyenM_izPNk=", Name = "Hummus", TypeId = 1},
            new Product{Id = 55, Available = true, ImageUrl = "https://media.istockphoto.com/id/1211166166/photo/caesar-salad-with-grilled-chicken-and-croutons-of-bread.jpg?b=1&s=612x612&w=0&k=20&c=riKpBoUiokgk5X0UvYBJeoMuPD1hsHtNFkk5-tj58us=", Name = "Chicken Salad", TypeId = 1},
            new Product{Id = 56, Available = true, ImageUrl = "https://media.istockphoto.com/id/540233806/photo/grilled-beef-steaks.jpg?b=1&s=612x612&w=0&k=20&c=15VmUXcSgyuml4SBCA-0HoSENGwu11RI0WRI-6r43I4=", Name = "Beef Steak", TypeId = 4},
            new Product{Id = 57, Available = true, ImageUrl = "https://media.istockphoto.com/id/1318456834/photo/raw-pork-pieces-isolated-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=QLuAEGqzOqiZ7MxQvrN5rz00rqXyt0nt1FwmKB0Gba0=", Name = "Pork Chops", TypeId = 4},
            new Product{Id = 58, Available = true, ImageUrl = "https://media.istockphoto.com/id/1287490302/photo/minced-meat-of-chicken-fillet-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=ERrQ9no_OUfBmWygtOteOD9zAn_JHF_gwM4BqIgMk5A=", Name = "Ground Chicken", TypeId = 4},
            new Product{Id = 59, Available = true, ImageUrl = "https://media.istockphoto.com/id/917272858/photo/isolated-image-of-raw-pork-ribs-with-seasoning-rosemary-pepper-on-white-background-top-view.jpg?b=1&s=612x612&w=0&k=20&c=mYQ_WDzrVUmplHm0Dcs9BU0htrKrVhv4-IKRQB5Bu00=", Name = "Lamb Ribs", TypeId = 4},
            new Product{Id = 60, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Marketside-Ground-Bison-1-lb_cc968341-6fbf-4fb9-aa86-e745ba43f5d1_1.4e4f2c2eece1a63b0ccd58b9ff19f301.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Bison Burger", TypeId = 4},
            new Product{Id = 61, Available = true, ImageUrl = "https://media.istockphoto.com/id/174893437/photo/two-baguettes-with-clipping-path.jpg?b=1&s=612x612&w=0&k=20&c=goWWR5v5-B5gak2TEX8j5_-lnJ-3VRSy0k3aJEQgL44=", Name = "Baguette", TypeId = 5},
            new Product{Id = 62, Available = true, ImageUrl = "https://media.istockphoto.com/id/545086644/photo/fresh-baked-croissant.jpg?b=1&s=612x612&w=0&k=20&c=lS3WXNl7Jj35HN1gVjf92huNdygDUASB9PvC31O8gaY=", Name = "Croissants", TypeId = 5},
            new Product{Id = 63, Available = true, ImageUrl = "https://media.istockphoto.com/id/183296470/photo/a-tasty-cinnamon-bun-with-icing-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=U9czvGKKJeEts5cSMxE_htwDghV5F-CVBPfIcT_63yc=", Name = "Cinnamon Rolls", TypeId = 5},
            new Product{Id = 64, Available = true, ImageUrl = "https://media.istockphoto.com/id/156396408/photo/close-up-of-a-blueberry-muffin.jpg?b=1&s=612x612&w=0&k=20&c=AKaqZ7GSSLjVE4DH7Y962fV-ikiAfHrnEKpaPhog3jw=", Name = "Blueberry Muffins", TypeId = 5},
            new Product{Id = 65, Available = true, ImageUrl = "https://media.istockphoto.com/id/1399203362/photo/slice-of-chocolate-cake-with-cream-filling-and-chocolate-shavings.jpg?b=1&s=612x612&w=0&k=20&c=PMUruOu-1dRVB_ewP905vk3DXJZbczj9nSMOCXJUfsM=", Name = "Chocolate Cake", TypeId = 5},
            new Product{Id = 66, Available = true, ImageUrl = "https://media.istockphoto.com/id/1097498008/photo/tomato-soup-in-a-white-bowl-with-saucer-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=THbgEpkVwJl-DfMEov05wbV8XVH0NaYp4mNimM8Skzs=", Name = "Tomato Soup", TypeId = 7},
            new Product{Id = 67, Available = true, ImageUrl = "https://media.istockphoto.com/id/637797476/photo/tinned-corn-isolated.jpg?b=1&s=612x612&w=0&k=20&c=BRS0GgX2Wo24SnC0lDsHuD4Vu7XBWee6_aUkdaopYAQ=", Name = "Canned Corn", TypeId = 7},
            new Product{Id = 68, Available = true, ImageUrl = "https://media.istockphoto.com/id/468484516/photo/pepper.jpg?b=1&s=612x612&w=0&k=20&c=BTeF0tqED4AGSuR-5xHVkQpPXpdzbRLma6UIpooflTY=", Name = "Vegetable Chili", TypeId = 7},
            new Product{Id = 69, Available = true, ImageUrl = "https://media.istockphoto.com/id/157615983/photo/tuna.jpg?b=1&s=612x612&w=0&k=20&c=QoT-rZjmtEy5NnZLrRzrBGX5S0DF8ngO6CKAIiMHFQI=", Name = "Tuna Fish", TypeId = 7},
            new Product{Id = 70, Available = true, ImageUrl = "https://media.istockphoto.com/id/515015341/photo/peach-slices-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=66SFLkwPjaf3MHwzU2xsM6mLCnPB3YmnHDLeeiFS7pY=", Name = "Peach Slices", TypeId = 7},
            new Product{Id = 71, Available = true, ImageUrl = "https://media.istockphoto.com/id/175012912/photo/crisps.jpg?b=1&s=612x612&w=0&k=20&c=oV50cXeduXkBHV7gs2xQIABnbdk067TE6K9tjJyrRwA=", Name = "Potato Chips", TypeId = 8},
            new Product{Id = 72, Available = true, ImageUrl = "https://media.istockphoto.com/id/115984173/photo/soft-pretzel-on-white.jpg?b=1&s=612x612&w=0&k=20&c=jExOGfjxGkAsNLi2rhhqW2_JnxNTu5sCSKjOY8qCJog=", Name = "Pretzels", TypeId = 8},
            new Product{Id = 73, Available = true, ImageUrl = "https://media.istockphoto.com/id/483585729/photo/trail-mix-on-white.jpg?b=1&s=612x612&w=0&k=20&c=AR7sfyb6lUYJRkSt2cjpik6qgirIsbvkd700w43Va7M=", Name = "Trail Mix", TypeId = 8},
            new Product{Id = 74, Available = true, ImageUrl = "https://media.istockphoto.com/id/1295165510/photo/popcorn-flying.jpg?b=1&s=612x612&w=0&k=20&c=layOmCVMZgz672UEYjJ7cRUk-LVRLu9sdVcN7LtkaGE=", Name = "Popcorn", TypeId = 8},
            new Product{Id = 75, Available = true, ImageUrl = "https://media.istockphoto.com/id/186682188/photo/chocolate-bar-with-a-missing-bite-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=wIUro93kV6UyqVz8hJUyHjdfjWHRe8SjJoA5JSHN5fs=", Name = "Chocolate Bars", TypeId = 8},
            new Product{Id = 76, Available = true, ImageUrl = "https://media.istockphoto.com/id/152971676/photo/glass-of-orange-juice-and-fresh-oranges.jpg?b=1&s=612x612&w=0&k=20&c=qYsE1GXeW_WwPAILXigyf7eNjaDWCEhyKYp9xCGIdNI=", Name = "Orange Juice", TypeId = 9},
            new Product{Id = 77, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Pure-Leaf-Unsweetened-Green-Tea-Real-Brewed-Iced-Tea-18-5-oz-12-Pack-Bottles_a384ee78-03a9-4f7f-a2d5-7ff9b21dc7d1.9c5b69cb876487d19db0f118d6246f5b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Green Tea", TypeId = 9},
            new Product{Id = 78, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Sparkling-Ice-Variety-Pack-17-Fl-Oz-12-Count-Black-Raspberry-Cherry-Limeade-Orange-Mango-Kiwi-Strawberry_75d33e46-de37-43e0-9666-e82a1a4966aa.61908e13829ac73c2946186bd0ba78c8.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Sparkling Water", TypeId = 9},
            new Product{Id = 79, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/International-Delight-OREO-Cookie-Flavored-Iced-Coffee-15-fl-oz_a8644014-9da7-4ac8-bff1-7b38f8809d82.076a91baa85b8623de6bdc4fd4096721.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Iced Coffee", TypeId = 9},
            new Product{Id = 80, Available = true, ImageUrl = "https://media.istockphoto.com/id/1164372498/photo/lemonade-in-a-jar.jpg?b=1&s=612x612&w=0&k=20&c=bsLQ9PawSoj4DAt7QR6ezAivCnO1LbzOVCXm3RXlSME=", Name = "Lemonade", TypeId = 9},
            new Product{Id = 81, Available = true, ImageUrl = "https://media.istockphoto.com/id/609046646/photo/two-raw-salmon-fillets.jpg?b=1&s=612x612&w=0&k=20&c=5rF1fZO9NEJ30LpSTOg4xFCSKjKJzNeQE0mLUj6IJQM=", Name = "Salmon Fillet", TypeId = 10},
            new Product{Id = 82, Available = true, ImageUrl = "https://media.istockphoto.com/id/154969747/photo/shrimp.jpg?b=1&s=612x612&w=0&k=20&c=bV1t2mFzM-myrW6bvs49Lgs2m8jSuOoh64j7OKMqAeo=", Name = "Shrimp", TypeId = 10},
            new Product{Id = 83, Available = true, ImageUrl = "https://media.istockphoto.com/id/1301917262/photo/fresh-tuna-fish-fillet-steaks-garnished-with-parsley-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=CohQyZuGuqC8mmvBgfW4AmKVWZrBDtXh68uq6gPu3Cg=", Name = "Tuna Steak", TypeId = 10},
            new Product{Id = 84, Available = true, ImageUrl = "https://media.istockphoto.com/id/1219089216/photo/cooked-organic-alaskan-king-crab-legs-with-butter-and-lemons-alaskan-king-crab-on-wood-plate.jpg?b=1&s=612x612&w=0&k=20&c=TFYaKeDOULeDRqk54v_3L4eE5axuvUmUYZ14lMAZDMg=", Name = "Crab Legs", TypeId = 10},
            new Product{Id = 85, Available = true, ImageUrl = "https://media.istockphoto.com/id/520621629/photo/lobster-tails.jpg?b=1&s=612x612&w=0&k=20&c=ws8VWA9aHl-IByQK3ZOkmzjX-QSzfVcWsL2Qilo7TDE=", Name = "Lobster Tail", TypeId = 10},
            new Product{Id = 86, Available = true, ImageUrl = "https://media.istockphoto.com/id/184388608/photo/ketchup.jpg?b=1&s=612x612&w=0&k=20&c=wELXOtbNGBEwfJLiejXcndIa8RBVuHXl_zA7P3DR7Cc=", Name = "Ketchup", TypeId = 11},
            new Product{Id = 87, Available = true, ImageUrl = "https://media.istockphoto.com/id/185067816/photo/close-up-of-yellow-mustard-bottle-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=hdIm1Iw1nMAzjlIAUFkseoohvw5Wveve-AvLPjQe14I=", Name = "Mustard", TypeId = 11},
            new Product{Id = 88, Available = true, ImageUrl = "https://media.istockphoto.com/id/1312015198/photo/mayonnaise-in-bottle-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=ih4eighz2nbOGT6OBoZY6sdPFY8iIZGpsliVO0jaYRQ=", Name = "Mayonnaise", TypeId = 11},
            new Product{Id = 89, Available = true, ImageUrl = "https://media.istockphoto.com/id/175387957/photo/glass-bottle-of-soy-sauce-isolated-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=iYrmoVDWY6BcbJppMsHETGMTDJZE7UQuLgd_Kq7AOnM=", Name = "Soy Sauce", TypeId = 11},
            new Product{Id = 90, Available = true, ImageUrl = "https://media.istockphoto.com/id/1401340171/photo/hot-chili-sauce-bottle.jpg?b=1&s=612x612&w=0&k=20&c=CK05vS8unQm7GcERdRGWpecZ0-rjtvkh6wP2x-aEPlc=", Name = "Hot Sauce", TypeId = 11},
            new Product{Id = 91, Available = true, ImageUrl = "https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=yWXnUB0TbGVWD5NE-dbu33KzQ_ujPXWQtU7809AUwxE=", Name = "Spaghetti", TypeId = 12},
            new Product{Id = 92, Available = true, ImageUrl = "https://media.istockphoto.com/id/485130848/photo/heap-of-raw-quinoa-seeds.jpg?b=1&s=612x612&w=0&k=20&c=fdgth3fOQa3JukWibxj2Bo2bK0zRCQ_oPW-Vuc-TW3k=", Name = "Quinoa", TypeId = 12},
            new Product{Id = 93, Available = true, ImageUrl = "https://media.istockphoto.com/id/183427268/photo/beans-lentils-peas-and-grains-brown-rice.jpg?b=1&s=612x612&w=0&k=20&c=9eATU2zJs7tiD1yQocMBDPJ2vgMJql4QkBcxMAP3M5g=", Name = "Brown Rice", TypeId = 12},
            new Product{Id = 94, Available = true, ImageUrl = "https://media.istockphoto.com/id/480558745/photo/couscous.jpg?b=1&s=612x612&w=0&k=20&c=EHGfY7blVbqFyk5TK_rVI4VSlzpBZe03gGgh-VebGec=", Name = "Couscous", TypeId = 12},
            new Product{Id = 95, Available = true, ImageUrl = "https://media.istockphoto.com/id/157587362/photo/detailed-close-up-of-sliced-grain-bread-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=etEHmHt4SBkovHw9Dl3J347gKA1DW5SKpb4fxyACWko=", Name = "Whole Wheat Bread", TypeId = 12},
            new Product{Id = 96, Available = true, ImageUrl = "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?b=1&s=612x612&w=0&k=20&c=TBBd7De6JAG56-Wz8vrwIFqxnZ0KctXFZCFsmsBK8Xk=", Name = "Organic Apples", TypeId = 15},
            new Product{Id = 97, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Great-Value-Natural-Whole-Almonds-30-oz_a6c16569-d88f-4f33-ad52-44322f7b7bde.70f7b151129e805537a7493fea2b3654.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Natural Almonds", TypeId = 15},
            new Product{Id = 98, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Marketside-Organic-Baby-Spinach-16-oz-Clam-Shell-Fresh_03b1e82b-ae79-43b8-a361-325ae87396f1.692883c91785230e2a0595e99fe0172b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Organic Spinach", TypeId = 15},
            new Product{Id = 99, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/FAGE-BestSelf-All-Natural-Reduced-Fat-Lactose-Free-Greek-Strained-Yogurt-32oz_81b1f02d-d7d2-44a7-9109-f4e5889a95e4.5ae493c25d6462b7f20d628a7a70281e.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Natural Yogurt", TypeId = 15},
            new Product{Id = 100, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/White-Royal-Quinoa-10-Lb_80ac806d-fb9d-44c7-a5c3-0f4da46ac4fe.9b97a1dec37cf9751f4daa2e88efa8ee.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Organic Quinoa", TypeId = 15},
            new Product{Id = 101, Available = true, ImageUrl = "https://media.istockphoto.com/id/483226976/photo/heap-of-japanese-sushi-rice.jpg?b=1&s=612x612&w=0&k=20&c=7DwRstGOQCQcqUkLu0W7mAn0mZbTedev3HPZUUPuiNM=", Name = "Sushi Rice", TypeId = 16},
            new Product{Id = 102, Available = true, ImageUrl = "https://media.istockphoto.com/id/898251592/photo/curry-powder-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=wNFusa7iRCbuBVBRGEynCqwyZhHD_z4e7qfUGl2wn54=", Name = "Curry Powder", TypeId = 16},
            new Product{Id = 103, Available = true, ImageUrl = "https://media.istockphoto.com/id/472173464/photo/piadina-round-italian-tortilla.jpg?b=1&s=612x612&w=0&k=20&c=tWoNfS3ohNu1k1JQOsVnnF1GeEHIxeHMhJJGV8m6tg0=", Name = "Tortillas", TypeId = 16},
            new Product{Id = 104, Available = true, ImageUrl = "https://media.istockphoto.com/id/1356970482/photo/sesame-oil-with-white-sesame-seed.jpg?b=1&s=612x612&w=0&k=20&c=Ofahpdu83bsXZSWbZsQ2dtjzhB15T7QjLRLaTt2M8nM=", Name = "Sesame Oil", TypeId = 16},
            new Product{Id = 105, Available = true, ImageUrl = "https://media.istockphoto.com/id/480558745/photo/couscous.jpg?b=1&s=612x612&w=0&k=20&c=EHGfY7blVbqFyk5TK_rVI4VSlzpBZe03gGgh-VebGec=", Name = "Couscous", TypeId = 16},
            new Product{Id = 106, Available = true, ImageUrl = "https://images.pexels.com/photos/14027298/pexels-photo-14027298.jpeg?auto=compress&cs=tinysrgb&w=800", Name = "Vitamin C Supplements", TypeId = 17},
            new Product{Id = 107, Available = true, ImageUrl = "https://media.istockphoto.com/id/617900032/photo/granola-muesli-bars.jpg?b=1&s=612x612&w=0&k=20&c=JnmV85dflbs1zxTiGE2IrfqRWXXpSxQF1qoQAkts7EQ=", Name = "Protein Bars", TypeId = 17},
            new Product{Id = 108, Available = true, ImageUrl = "https://media.istockphoto.com/id/1165030372/photo/fish-oil-supplement-capsules-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=i5lgj7bUMYLClFQxd9PBhNd-NdgdjuFHTq4RofEKs2o=", Name = "Fish Oil Capsules", TypeId = 17},
            new Product{Id = 109, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Bigelow-Cozy-Chamomile-Caffeine-Free-Herbal-Tea-Bags-20-Count_4878d77e-3954-4f72-b86d-ba60d8c1a987.e013f5cdf4ac50c480a2e3edadafe562.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Herbal Tea", TypeId = 17},
            new Product{Id = 110, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/SkinnyPop-Gluten-Free-Original-Popcorn-0-65-oz-Snack-Size-Bags-10-Count_435d5a58-52a5-4918-93f6-54da593b1a9a.00feaa34a202b4b8935b143a7b5ce0c9.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Gluten-Free Snacks", TypeId = 17},
            new Product{Id = 111, Available = true, ImageUrl = "https://media.istockphoto.com/id/638173396/photo/baby-milk-bottle.jpg?b=1&s=612x612&w=0&k=20&c=gseAHrlqzja0wEXQ-SvKjiu1FCpHXqR7oXWSa0M2ioA=", Name = "Baby Formula", TypeId = 18},
            new Product{Id = 112, Available = true, ImageUrl = "https://media.istockphoto.com/id/533725934/photo/stacks-diapers-for-children-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=m1lKvsylP-Gm_-Extzto4C_Aj5qwg9j6LXOViOLDlFo=", Name = "Diapers", TypeId = 18},
            new Product{Id = 113, Available = true, ImageUrl = "https://media.istockphoto.com/id/152145349/photo/baby-wipes.jpg?b=1&s=612x612&w=0&k=20&c=hGawDuJnXc2RhQ4gp-TskuR_03P1dp78EWB8SHTDdqc=", Name = "Baby Wipes", TypeId = 18},
            new Product{Id = 114, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Gerber-Animal-Crackers-Toddler-Snacks-Cinnamon-Graham-Crackers-6-oz-Bag_2a89b3d4-aecc-486d-a039-809cf0306c2a.d5b1a10f8dd56f13def24821bff95b56.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Toddler Snacks", TypeId = 18},
            new Product{Id = 115, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Hello-Bello-Sweet-Cream-Infant-Shampoo-Body-Wash-Tear-Free-All-Skin-Types-10-fl-oz_bb36e405-44fc-4b13-b9ad-2bc2ef211775.51d7304d215f021b94e93df8f936f744.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Baby Shampoo", TypeId = 18},
            new Product{Id = 116, Available = true, ImageUrl = "https://media.istockphoto.com/id/995557138/photo/toilet-paper-isolated.jpg?b=1&s=612x612&w=0&k=20&c=ouQ8wfA5Rfd8ALDCA8RXN-BuJhkWIB-SYO4P94I8udY=", Name = "Toilet Paper", TypeId = 19},
            new Product{Id = 117, Available = true, ImageUrl = "https://media.istockphoto.com/id/512574098/photo/laundry-detergent-bottle.jpg?b=1&s=612x612&w=0&k=20&c=nyO5_R1hUVktFI9NgBVp2viLSi2d9VKXXx2JNzMt0JQ=", Name = "Laundry Detergent", TypeId = 19},
            new Product{Id = 118, Available = true, ImageUrl = "https://media.istockphoto.com/id/969720440/photo/spray-bottle-isolated.jpg?b=1&s=612x612&w=0&k=20&c=UBMLh7VGaIAA20nTLSbVdfSkEu0yUMuWy4WRNzp-yBE=", Name = "Cleaning Spray", TypeId = 19},
            new Product{Id = 119, Available = true, ImageUrl = "https://media.istockphoto.com/id/152974340/photo/paper-towel-roll.jpg?b=1&s=612x612&w=0&k=20&c=E7XBF1xlEX_MDvXP7J3n9KXrO1cD9sYvptMOAgpNp5Y=", Name = "Paper Towels", TypeId = 19},
            new Product{Id = 120, Available = true, ImageUrl = "https://media.istockphoto.com/id/172857643/photo/a-bottle-of-green-dishwashing-detergent.jpg?b=1&s=612x612&w=0&k=20&c=kpHR1dgPr4VET0qCRgD3Wjx4nB_o9PLX3lR-AlAAqXQ=", Name = "Dish Soap", TypeId = 19},
            new Product{Id = 121, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/PEDIGREE-Complete-Nutrition-Grilled-Steak-and-Vegetable-Dry-Dog-Food-for-Small-Adult-Dog-14-lb-Bag_eb06b6bb-4ffb-4a92-93d9-713333981b80.3e8d1837e51694ea59b9c49baeab2289.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Dog Food", TypeId = 20},
            new Product{Id = 122, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Arm-Hammer-SLIDE-Easy-Clean-Up-Multi-Cat-Clumping-Cat-Litter-38lb_12472a8c-0613-4e85-a1da-ad27bb5b37d7.9bdb8685968b32a075cab2b8b14d5938.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Cat Litter", TypeId = 20},
            new Product{Id = 123, Available = true, ImageUrl = "https://media.istockphoto.com/id/154956025/photo/dog-equipment.jpg?b=1&s=612x612&w=0&k=20&c=VTw0dkn_XQwB9YgiXm0mGXT6N4tflX6z1D1KOTKbikk=", Name = "Pet Toys", TypeId = 20},
            new Product{Id = 124, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Tetra-TetraFin-Goldfish-Flakes-7-06-Ounces-Balanced-Diet-Fish-Food_e0cf7a89-4f10-44f6-89be-d70102e11487.5720308f34d7e840e5deca2362c85607.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Fish Food", TypeId = 20},
            new Product{Id = 125, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Global-Harvest-Foods-Sunflower-Grains-Wild-Bird-Feed-Dry-5-lb-Bag_4bad5198-aae2-43a7-b934-2ae8d51deee2.48bdcd1afa4f602343f0db5a5315db0c.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", Name = "Bird Seed", TypeId = 20},
            new Product{Id = 126, Available = true, ImageUrl = "https://media.istockphoto.com/id/1369748329/photo/truffle-oil-and-black-edible-winter-truffle-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=TcChKD9GgLEYdwtIx2P41Gi--Xis9CcYI2v-53p49Oc=", Name = "Truffle Oil", TypeId = 21},
            new Product{Id = 127, Available = true, ImageUrl = "https://media.istockphoto.com/id/1292595189/photo/stigmas-of-saffron-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=ZBtqWX5SWdi1M4eQTGwOiWv41R7uCcF_LT4IUV33LFg=", Name = "Saffron", TypeId = 21},
            new Product{Id = 128, Available = true, ImageUrl = "https://media.istockphoto.com/id/1287290400/photo/variety-of-cheeses-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=O17CtDK00pVgUZbnDix4EWy7xLlqxPff4ySE85NQ5gA=", Name = "Artisan Cheese", TypeId = 21},
            new Product{Id = 129, Available = true, ImageUrl = "https://media.istockphoto.com/id/171360702/photo/overhead-view-of-tray-with-cupcakes.jpg?b=1&s=612x612&w=0&k=20&c=PrjckllxDlkxuSaMZzZFyonbVm7LNfWxsjzqfwb3yj0=", Name = "Gourmet Chocolate", TypeId = 21},
            new Product{Id = 130, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Lavazza-Super-Crema-Whole-Bean-Coffee-Blend-Medium-Espresso-Roast-35-2-Ounce-Bag_c3ecf626-ddfe-4a34-8d6b-b0e1cdc63abd.5581a1624cbeecea830afbcebaf4e675.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Specialty Coffee Beans", TypeId = 21},
            new Product{Id = 131, Available = true, ImageUrl = "https://media.istockphoto.com/id/1030766462/photo/truffle-salt-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=I7SYb2Wv5_WbAG77MiPN636etuUjqa_udpRjilGcnr8=", Name = "Truffle Salt", TypeId = 21},
            new Product{Id = 132, Available = true, ImageUrl = "https://media.istockphoto.com/id/450736789/photo/traditional-unsliced-bread-loaf.jpg?b=1&s=612x612&w=0&k=20&c=7LKIUPojM-zQXmPc_vUsYusQ_b8uSAxR-LDoGZkKfaQ=", Name = "Sourdough Bread", TypeId = 21},
            new Product{Id = 133, Available = true, ImageUrl = "https://media.istockphoto.com/id/182176911/photo/caviar.jpg?b=1&s=612x612&w=0&k=20&c=gPS7JpC70KRo_UhdwP-e7lG4dumWv4uAZOsUnUhrDPQ=", Name = "Caviar", TypeId = 21},
            new Product{Id = 134, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Cobram-Estate-Mild-100-California-Extra-Virgin-Olive-Oil-12-7-fl-oz-Glass-Bottle_40127cf9-2957-4308-b76e-28445db37a4e.a748a20341530e60dc30ba82a7418dac.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Gourmet Olive Oil", TypeId = 21},
            new Product{Id = 135, Available = true, ImageUrl = "https://media.istockphoto.com/id/179713491/photo/glass-bottle-with-handle-full-of-black-liquid.jpg?b=1&s=612x612&w=0&k=20&c=7U-w_3vGyGi6UyjTmcfBW0ZiyJVbOoTqhNl5WvV_Ef0=", Name = "Balsamic Vinegar", TypeId = 21},
            new Product{Id = 136, Available = true, ImageUrl = "https://i5.walmartimages.com/seo/Oak-Leaf-Vineyards-Cabernet-Sauvignon-Red-Wine-750-ml-Glass-ABV-13-00-5-5oz-servings-California_4ddf36db-ea43-44f0-ac4f-b2c021396811.4006152fd91b1c0660aa13576b32c30f.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", Name = "Red Wine", TypeId = 23},
            new Product{Id = 137, Available = true, ImageUrl = "https://media.istockphoto.com/id/1164593695/photo/ipa-pint.jpg?b=1&s=612x612&w=0&k=20&c=0DD4FsKdsK-Fg7bQmE_6ZiGxR5QoI-ryJ-fw2BWoDFs=", Name = "Craft Beer", TypeId = 23},
            new Product{Id = 138, Available = true, ImageUrl = "https://media.istockphoto.com/id/1310472003/photo/bottle-of-transparent-glass-with-gin-tequila-rum-or-vodka-isolated-on-pure-white-background.jpg?b=1&s=612x612&w=0&k=20&c=E3bldG7QG-zBGCzrJi6AuHcwca6oEP2qqP9M-F5hPOo=", Name = "Vodka", TypeId = 23},
            new Product{Id = 139, Available = true, ImageUrl = "https://media.istockphoto.com/id/922676952/photo/whiskey-bottle-on-white.jpg?b=1&s=612x612&w=0&k=20&c=WnYCM66fRPMyhJhpqX2d3j7VJKgWIoCgGt8WaoXz4MI=", Name = "Whiskey", TypeId = 23},
            new Product{Id = 140, Available = true, ImageUrl = "https://media.istockphoto.com/id/159018520/photo/generic-bottle-of-gold-tequila-on-a-white-surface.jpg?b=1&s=612x612&w=0&k=20&c=p5wmsdKHAAM5iyD0oeKrdfuZ936X9BchuI4FXcTEsMI=", Name = "Tequila", TypeId = 23},
        });
    }
}