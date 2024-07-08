using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace StoreDash.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    UserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: true),
                    SecurityStamp = table.Column<string>(type: "text", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Distributors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Active = table.Column<bool>(type: "boolean", nullable: false),
                    City = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    State = table.Column<string>(type: "text", nullable: false),
                    Street = table.Column<string>(type: "text", nullable: false),
                    Zipcode = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Distributors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Available = table.Column<bool>(type: "boolean", nullable: false),
                    ImageUrl = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    TypeId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Stores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Active = table.Column<bool>(type: "boolean", nullable: false),
                    City = table.Column<string>(type: "text", nullable: false),
                    State = table.Column<string>(type: "text", nullable: false),
                    Street = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    Zipcode = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Types",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Types", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RoleId = table.Column<string>(type: "text", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<string>(type: "text", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    ProviderKey = table.Column<string>(type: "text", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "text", nullable: true),
                    UserId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "text", nullable: false),
                    RoleId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "text", nullable: false),
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Value = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserProfiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    LastName = table.Column<string>(type: "text", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: true),
                    IdentityUserId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserProfiles_AspNetUsers_IdentityUserId",
                        column: x => x.IdentityUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Inventories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Available = table.Column<bool>(type: "boolean", nullable: false),
                    DistributorId = table.Column<int>(type: "integer", nullable: false),
                    Price = table.Column<decimal>(type: "numeric", nullable: false),
                    ProductId = table.Column<int>(type: "integer", nullable: false),
                    Stock = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inventories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Inventories_Distributors_DistributorId",
                        column: x => x.DistributorId,
                        principalTable: "Distributors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Inventories_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Cancelled = table.Column<bool>(type: "boolean", nullable: false),
                    Date = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    Fulfilled = table.Column<bool>(type: "boolean", nullable: false),
                    StoreId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_Stores_StoreId",
                        column: x => x.StoreId,
                        principalTable: "Stores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "InventoryOrders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    InventoryId = table.Column<int>(type: "integer", nullable: false),
                    Quantity = table.Column<int>(type: "integer", nullable: false),
                    OrderId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventoryOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_InventoryOrders_Inventories_InventoryId",
                        column: x => x.InventoryId,
                        principalTable: "Inventories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_InventoryOrders_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c3aaeb97-d2ba-4a53-a521-4eea61e59b35", "61b88ff9-f094-43c1-a7f0-174709ce8880", "Admin", "admin" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f", 0, "14a59b62-81e0-4288-bb70-257b495503aa", "admina@strator.comx", false, false, null, null, null, "AQAAAAEAACcQAAAAEGcP5xiyqmta0+hb3CZ4GF/JHjjom2vXUAgJk9peBHEc7ACD7aQCT10p3b9pTqEH1w==", null, false, "e9e0e7e1-0549-485b-959a-6060a6041a93", false, "Administrator" });

            migrationBuilder.InsertData(
                table: "Distributors",
                columns: new[] { "Id", "Active", "City", "Name", "State", "Street", "Zipcode" },
                values: new object[,]
                {
                    { 1, true, "Goodlettsville", "Associated WholeSale Grocers", "TN", "500 South Cartwright St.", 37072 },
                    { 2, true, "Freshville", "Harvest Haven", "CA", "123 Organic Avenue", 98765 },
                    { 3, true, "Greenburgh", "Eco-Food Emporium", "NY", "456 Sustainable Street", 54321 },
                    { 4, true, "NutriCity", "Healthful Groceries Ltd.", "TX", "789 Wellness Lane", 12345 },
                    { 5, true, "VeggieVille", "Farm Fresh Foods Inc.", "FL", "321 Nutrient Boulevard", 67890 },
                    { 6, true, "Organic Oasis", "Pure Produce Haven", "WA", "101 Green Plaza", 54321 },
                    { 7, true, "Healthfield", "Wellbeing Goods Co.", "GA", "246 Vitality Street", 13579 },
                    { 8, true, "Nutriburg", "NourishGroceries R Us", "OH", "876 Wellness Circle", 24680 },
                    { 9, true, "Vitamin Vista", "Nutrient Cuisine Co.", "IL", "555 Wellness Lane", 98765 },
                    { 10, true, "Wellnessville", "HealthHub Inc.", "CO", "777 Wellness Highway", 54321 },
                    { 11, true, "Farmersburg", "Nutrient Nosh Ltd.", "PA", "999 Fresh Road", 13579 },
                    { 12, true, "Produce Plaza", "Fresh Food Collective", "MI", "111 Nutritional Road", 24680 },
                    { 13, true, "Greenfield", "Greens Galore Hub", "NC", "333 Veggie Lane", 98765 },
                    { 14, true, "Harvest Hills", "Natural Nibbles Palace", "AZ", "444 Fresh Lane", 54321 },
                    { 15, true, "Nutriwood", "Healthful Harvesters Limited", "OR", "222 Wellness Court", 13579 },
                    { 16, true, "Wellnessville", "Wellness Wonders Inc.", "NV", "888 Nutrient Junction", 24680 },
                    { 17, true, "Greenfields", "Wholesome Goods Co.", "UT", "777 Health Lane", 54321 },
                    { 18, true, "Pureville", "PureFood Fortress", "ID", "555 Nutri Street", 13579 },
                    { 19, true, "Health Haven", "Wellness Groceries Galore", "OK", "123 Green Chateau", 24680 },
                    { 20, true, "Nature Nook", "Nature's Bounty Emporium", "LA", "999 Green Cove", 98765 }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Available", "ImageUrl", "Name", "TypeId" },
                values: new object[,]
                {
                    { 1, true, "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=800", "Apples", 2 },
                    { 2, true, "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?b=1&s=612x612&w=0&k=20&c=LE7IRYWDGyPHLw2p-OrVpM07h7KVaIeb1Jn104y_pkU=", "Bananas", 3 },
                    { 3, true, "https://media.istockphoto.com/id/1412854156/photo/strawberries-isolated-strawberry-whole-and-a-half-on-white-background-strawberry-slice-with.jpg?b=1&s=612x612&w=0&k=20&c=zTWv_RCMlSfr4ATR45uYGFCRMCp8AoBiBCEO_P6XK1Q=", "Strawberries", 3 },
                    { 4, true, "https://media.istockphoto.com/id/911794888/photo/lettuce-salad-leaves-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=4PbkvklrFRhrCOZ1yg_YKvRrykiZ2kGcCH7RJFvpa3E=", "Lettuce", 2 },
                    { 5, true, "https://media.istockphoto.com/id/466175630/photo/tomato-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=zN55o1lj4JdZCOI6BBnt6ARtJL7X9lHJ5POS4aGFnyw=", "Tomatoes", 3 },
                    { 6, true, "https://media.istockphoto.com/id/545454816/photo/fresh-carrots-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=ABrFz1h6Vx62kC_QBzH1wUKv6BCMf7II_QnysmfYOr4=", "Carrots", 3 },
                    { 7, true, "https://media.istockphoto.com/id/1135308302/photo/broccoli-on-white.jpg?b=1&s=612x612&w=0&k=20&c=tP6GicNnKNhChipfwgqQqMLH7k0iUl7PEC8nUNbDAYU=", "Broccoli", 3 },
                    { 8, true, "https://media.istockphoto.com/id/537828836/photo/spinach.jpg?b=1&s=612x612&w=0&k=20&c=GVlNnWriXj5DTYl0Bw7VkUPtQShMkVYUzTW1WtrNz9M=", "Spinach", 3 },
                    { 9, true, "https://media.istockphoto.com/id/91516166/photo/cucumber-slices-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=WBXIqmpn8tpOofwT54sItsSaJN8c_-beqrmcVIsl8kw=", "Cucumbers", 3 },
                    { 10, true, "https://media.istockphoto.com/id/153564958/photo/colorful-peppers.jpg?b=1&s=612x612&w=0&k=20&c=w1mwm8XwNc9M139FLN-lsfeAoA4VL0DENuqAvWxk-hM=", "Bell Peppers", 3 },
                    { 11, true, "https://media.istockphoto.com/id/185284489/photo/orange.jpg?b=1&s=612x612&w=0&k=20&c=P6dfluS7PhPHB4BpgWlNmsFOUyUuD8wQMPGOtnsBln4=", "Oranges", 3 },
                    { 12, true, "https://media.istockphoto.com/id/803721418/photo/grape-dark-grape-grapes-with-leaves-isolated-with-clipping-path-full-depth-of-field.jpg?b=1&s=612x612&w=0&k=20&c=05K35Jy2PWEnbSIXh2PaS8mB5rxQwp0BgS_N9Atb3BE=", "Grapes", 3 },
                    { 13, true, "https://media.istockphoto.com/id/1217479737/photo/pineapple-with-slices-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=YurK7AyvZP3WcBjrhXXQ_WhtzVmnyhn__hjJNvHYEPM=", "Pineapple", 3 },
                    { 14, true, "https://media.istockphoto.com/id/492393524/photo/two-slices-of-watermelon-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=EU3xDGKgQSU9NFngVcHHik75LqvhH1ewiI-yfhhHCyw=", "Watermelon", 3 },
                    { 15, true, "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?b=1&s=612x612&w=0&k=20&c=txk4DGWXL9cntyePO6C-X8inysng0mQ0lCuW2FdjG00=", "Potatoes", 6 },
                    { 16, true, "https://media.istockphoto.com/id/513920379/photo/onion-bulbs.jpg?b=1&s=612x612&w=0&k=20&c=6QujvqU2k2C0kZhlihQsakOLjh5j_DLz_xEL6bXshZ4=", "Onions", 6 },
                    { 17, true, "https://media.istockphoto.com/id/94929126/photo/avocados-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=_166_YaZUSyO54A-4SYxBGn_U23XAytL2xOmjbwqhSc=", "Avocado", 3 },
                    { 18, true, "https://media.istockphoto.com/id/168370138/photo/mango.jpg?b=1&s=612x612&w=0&k=20&c=Xo2Wr9mMxe2KWZI1__4usBsgR7t8mJvemHZTrLMylOc=", "Mango", 3 },
                    { 19, true, "https://media.istockphoto.com/id/834807852/photo/whole-kiwi-fruit-and-half-kiwi-fruit-on-white.jpg?b=1&s=612x612&w=0&k=20&c=j_FB9-cSPCt3d8VNFmTrob7mD4aVAQ6wQ8DjWhww8UI=", "Kiwi", 3 },
                    { 20, true, "https://media.istockphoto.com/id/1299073137/photo/pears-isolated-one-and-a-half-green-pear-fruit-with-leaf-on-white-background-pear-slice-with.jpg?b=1&s=612x612&w=0&k=20&c=fIG7kvOBpZ5HCz60I3nUX71IzdK0eM5teJh-UeY7kVs=", "Pears", 3 },
                    { 21, true, "https://media.istockphoto.com/id/1151868959/photo/single-whole-peach-fruit-with-leaf-and-slice-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=X3NY9RVSDT6bCgd-kAHNiLJaR5WhSp74xAwX8bZnsoA=", "Plums", 3 },
                    { 23, true, "https://media.istockphoto.com/id/533381303/photo/cherry-with-leaves-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=BVZA7JWVXV-tk4QXrwgDLooLir9E3lcg-BjDXLFVKcA=", "Cherries", 3 },
                    { 24, true, "https://media.istockphoto.com/id/853493518/photo/blueberry-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=8WA9WRalXfMEDpUBfBevYc-E7SUvbBIAoFTDDlfHewI=", "Blueberries", 3 },
                    { 25, true, "https://media.istockphoto.com/id/648967314/photo/raspberry-with-leaves-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=0I6-RpRF77o5nd2Cc1bYDipVb3VAxrKTFN-7QxRleQ0=", "Raspberries", 3 },
                    { 26, true, "https://media.istockphoto.com/id/173612468/photo/close-up-of-two-fresh-blackberry-with-leaves.jpg?b=1&s=612x612&w=0&k=20&c=whggdKzkxQp9PRamQQkHhksCEnRtRg5MOY9vl1KvhEs=", "Blackberries", 3 },
                    { 27, true, "https://media.istockphoto.com/id/673162168/photo/green-cabbage-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=D18qaU48dFgRfwgQs6BqBZacGq7J7qVy6g5gJGS0zHY=", "Cabbage", 3 },
                    { 28, true, "https://media.istockphoto.com/id/492464736/photo/fresh-celery-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=AdaGNsFFhbvbMRRqAqZfQ3rYspco_VIRJJInKv_UDNw=", "Celery", 3 },
                    { 29, true, "https://media.istockphoto.com/id/1149201983/photo/fresh-whole-and-sliced-zucchini-isolated-on-white-background-from-top-view-courgette-zucchini.jpg?b=1&s=612x612&w=0&k=20&c=u5wFmhkRu6KOFv-TeOVEAXbN2DQJ8JQFWrBAz2eraSk=", "Zucchini", 3 },
                    { 30, true, "https://media.istockphoto.com/id/1168507984/photo/artichoke-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=vCDAjxui2vI0Rny_VLP_tdg2_vW_AP8ZDB8ngvV2Dq8=", "Artichokes", 3 },
                    { 31, true, "https://media.istockphoto.com/id/510515443/photo/eggplant-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=VXWufiM7dTBQ2Vn4Mln2CvJTkXWTcJg127W_s-5Q-sE=", "Eggplant", 3 },
                    { 32, true, "https://media.istockphoto.com/id/1209954419/photo/asparagus.jpg?b=1&s=612x612&w=0&k=20&c=J0Qshe5QRKtadKCKWi6bVWP17oLfXlv_yphulh4Ffrg=", "Asparagus", 3 },
                    { 33, true, "https://media.istockphoto.com/id/121137414/photo/small-garden-radish.jpg?b=1&s=612x612&w=0&k=20&c=2KG1LALR1D3nYAlr0I_XKcMvHJcdZnzvMZIUPrcMXis=", "Radishes", 3 },
                    { 34, true, "https://media.istockphoto.com/id/511868689/photo/fresh-cauliflower-with-pieces-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=3ixuBhi6PlK-Cz9Bcvt3WnWcSuXVoMBM0LjpQeGviTo=", "Cauliflower", 3 },
                    { 35, true, "https://media.istockphoto.com/id/183537075/photo/sprouts.jpg?b=1&s=612x612&w=0&k=20&c=QZnI1pBQQgsSN3tkN8wjlrQGt1W-HISuvDPPnlpBhaE=", "Brussels Sprouts", 3 },
                    { 36, true, "https://media.istockphoto.com/id/1349843758/photo/green-beans-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=H-hNL7PCzqgW6Br73ibvtX0nlEIyJjaQpzrkTqEeIGM=", "Green Beans", 3 },
                    { 37, true, "https://media.istockphoto.com/id/135091129/photo/kale.jpg?b=1&s=612x612&w=0&k=20&c=g6O2ZC99WobX27nmQH77D_ZK32qpgKcwvTleOWrrKx8=", "Kale", 3 },
                    { 38, true, "https://media.istockphoto.com/id/466175634/photo/lemon-fruit-with-half-and-leaves-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=J8s3KvBhcIgn8tRskk2iZfroHMEBvsmb2mkn2yBeU68=", "Lemons", 3 },
                    { 39, true, "https://media.istockphoto.com/id/1156644711/photo/lime-isolated-lime-half-slice-piece-isolate-on-white-lime-set.jpg?b=1&s=612x612&w=0&k=20&c=gbWnImzEn43Q7imNt9D_8OfE-2LEtf2zGVsBaocKGmo=", "Limes", 3 },
                    { 40, true, "https://media.istockphoto.com/id/511851020/photo/fresh-ginger-root-or-rhizome-isolated-on-white-background-cutout.jpg?b=1&s=612x612&w=0&k=20&c=WHXw67apYjP8bTHxoJzS8MRGnSWHNHF9RrBuC4OwkD0=", "Ginger", 13 },
                    { 41, true, "https://media.istockphoto.com/id/499147864/photo/garlic.jpg?b=1&s=612x612&w=0&k=20&c=YMolUd7kApfhkI8apiGLMyy67rNNi7Fcj80sDVt9ATo=", "Garlic", 13 },
                    { 42, true, "https://media.istockphoto.com/id/513920379/photo/onion-bulbs.jpg?b=1&s=612x612&w=0&k=20&c=6QujvqU2k2C0kZhlihQsakOLjh5j_DLz_xEL6bXshZ4=", "Onions", 13 },
                    { 43, true, "https://media.istockphoto.com/id/489426066/photo/parsley-isolated-on-white-background-collection.jpg?b=1&s=612x612&w=0&k=20&c=8b6WqDXw9czEJxojZCKGmPka-k73dMsFgCDAXPCdf8Q=", "Parsley", 14 },
                    { 44, true, "https://media.istockphoto.com/id/935822182/photo/basil-leaves-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=87EpPFv8ku1Q7_kvUdm8BHipXAl1FYfeXROmdvNoya4=", "Basil", 14 },
                    { 45, true, "https://media.istockphoto.com/id/155598075/photo/fresh-mint-leaf-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=bQMWIv7xpwCZBRLgzHlmppbxTEMRr4KYBJof0ugImvA=", "Mint", 14 },
                    { 46, true, "https://media.istockphoto.com/id/155098529/photo/coriander.jpg?b=1&s=612x612&w=0&k=20&c=V3hy0483I85S1K1UO7kuAYbwLvTKoxhepSEudinHIqY=", "Cilantro", 14 },
                    { 47, true, "https://media.istockphoto.com/id/157568691/photo/fresh-thyme-bunch-tied-up-shot-on-white-backdrop.jpg?b=1&s=612x612&w=0&k=20&c=6Vv0rdMtXCQVq2d8oE5kvnG9ZDXeShpsT8wlAIgEN8g=", "Thyme", 14 },
                    { 48, true, "https://media.istockphoto.com/id/157336697/photo/fresh-rosemary-sprigs-or-rosmarinus-officinalis-on-white.jpg?b=1&s=612x612&w=0&k=20&c=8h0WS_6KeMXpFzRb2scB3sl6YK00CNg8KfRv_jDComg=", "Rosemary", 14 },
                    { 49, true, "https://media.istockphoto.com/id/174651894/photo/oregano-twigs.jpg?b=1&s=612x612&w=0&k=20&c=nRQgoumGmIZ-d8DCbnfc-MQ14CraxUzuRDlDMSrklfg=", "Oregano", 14 },
                    { 50, true, "https://media.istockphoto.com/id/183812930/photo/sage.jpg?b=1&s=612x612&w=0&k=20&c=TZQyMyAkYWhqCaO4MKylLFhnivjlKS8NFHGgCzFuq7k=", "Sage", 14 },
                    { 51, true, "https://media.istockphoto.com/id/151905632/photo/freshly-sliced-stack-of-turkey-breast-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=G4sKiMZhc6yOVAqwvxMM_e_l2I3MzzoGwDTj1E2SO2U=", "Turkey Breast", 1 },
                    { 52, true, "https://media.istockphoto.com/id/500454774/photo/piece-of-cheese-isolated.jpg?b=1&s=612x612&w=0&k=20&c=J4ABnayJtoaD6w_WEL4rsiNnzK0HneUIQCoydMCn6Go=", "Swiss Cheese", 1 },
                    { 53, true, "https://media.istockphoto.com/id/169943249/photo/heap-of-pepperoni.jpg?b=1&s=612x612&w=0&k=20&c=xrG7pqhvctZQA_M5AfahZIz7wvFdz4_isD5DaAnqk4Y=", "Salami", 1 },
                    { 54, true, "https://media.istockphoto.com/id/966204184/photo/bowl-of-hummus.jpg?b=1&s=612x612&w=0&k=20&c=5XfpPsiMJBAdfAyXxsWik8TWENq6F5rEjyenM_izPNk=", "Hummus", 1 },
                    { 55, true, "https://media.istockphoto.com/id/1211166166/photo/caesar-salad-with-grilled-chicken-and-croutons-of-bread.jpg?b=1&s=612x612&w=0&k=20&c=riKpBoUiokgk5X0UvYBJeoMuPD1hsHtNFkk5-tj58us=", "Chicken Salad", 1 },
                    { 56, true, "https://media.istockphoto.com/id/540233806/photo/grilled-beef-steaks.jpg?b=1&s=612x612&w=0&k=20&c=15VmUXcSgyuml4SBCA-0HoSENGwu11RI0WRI-6r43I4=", "Beef Steak", 4 },
                    { 57, true, "https://media.istockphoto.com/id/1318456834/photo/raw-pork-pieces-isolated-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=QLuAEGqzOqiZ7MxQvrN5rz00rqXyt0nt1FwmKB0Gba0=", "Pork Chops", 4 },
                    { 58, true, "https://media.istockphoto.com/id/1287490302/photo/minced-meat-of-chicken-fillet-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=ERrQ9no_OUfBmWygtOteOD9zAn_JHF_gwM4BqIgMk5A=", "Ground Chicken", 4 },
                    { 59, true, "https://media.istockphoto.com/id/917272858/photo/isolated-image-of-raw-pork-ribs-with-seasoning-rosemary-pepper-on-white-background-top-view.jpg?b=1&s=612x612&w=0&k=20&c=mYQ_WDzrVUmplHm0Dcs9BU0htrKrVhv4-IKRQB5Bu00=", "Lamb Ribs", 4 },
                    { 60, true, "https://i5.walmartimages.com/seo/Marketside-Ground-Bison-1-lb_cc968341-6fbf-4fb9-aa86-e745ba43f5d1_1.4e4f2c2eece1a63b0ccd58b9ff19f301.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Bison Burger", 4 },
                    { 61, true, "https://media.istockphoto.com/id/174893437/photo/two-baguettes-with-clipping-path.jpg?b=1&s=612x612&w=0&k=20&c=goWWR5v5-B5gak2TEX8j5_-lnJ-3VRSy0k3aJEQgL44=", "Baguette", 5 },
                    { 62, true, "https://media.istockphoto.com/id/545086644/photo/fresh-baked-croissant.jpg?b=1&s=612x612&w=0&k=20&c=lS3WXNl7Jj35HN1gVjf92huNdygDUASB9PvC31O8gaY=", "Croissants", 5 },
                    { 63, true, "https://media.istockphoto.com/id/183296470/photo/a-tasty-cinnamon-bun-with-icing-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=U9czvGKKJeEts5cSMxE_htwDghV5F-CVBPfIcT_63yc=", "Cinnamon Rolls", 5 },
                    { 64, true, "https://media.istockphoto.com/id/156396408/photo/close-up-of-a-blueberry-muffin.jpg?b=1&s=612x612&w=0&k=20&c=AKaqZ7GSSLjVE4DH7Y962fV-ikiAfHrnEKpaPhog3jw=", "Blueberry Muffins", 5 },
                    { 65, true, "https://media.istockphoto.com/id/1399203362/photo/slice-of-chocolate-cake-with-cream-filling-and-chocolate-shavings.jpg?b=1&s=612x612&w=0&k=20&c=PMUruOu-1dRVB_ewP905vk3DXJZbczj9nSMOCXJUfsM=", "Chocolate Cake", 5 },
                    { 66, true, "https://media.istockphoto.com/id/1097498008/photo/tomato-soup-in-a-white-bowl-with-saucer-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=THbgEpkVwJl-DfMEov05wbV8XVH0NaYp4mNimM8Skzs=", "Tomato Soup", 7 },
                    { 67, true, "https://media.istockphoto.com/id/637797476/photo/tinned-corn-isolated.jpg?b=1&s=612x612&w=0&k=20&c=BRS0GgX2Wo24SnC0lDsHuD4Vu7XBWee6_aUkdaopYAQ=", "Canned Corn", 7 },
                    { 68, true, "https://media.istockphoto.com/id/468484516/photo/pepper.jpg?b=1&s=612x612&w=0&k=20&c=BTeF0tqED4AGSuR-5xHVkQpPXpdzbRLma6UIpooflTY=", "Vegetable Chili", 7 },
                    { 69, true, "https://media.istockphoto.com/id/157615983/photo/tuna.jpg?b=1&s=612x612&w=0&k=20&c=QoT-rZjmtEy5NnZLrRzrBGX5S0DF8ngO6CKAIiMHFQI=", "Tuna Fish", 7 },
                    { 70, true, "https://media.istockphoto.com/id/515015341/photo/peach-slices-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=66SFLkwPjaf3MHwzU2xsM6mLCnPB3YmnHDLeeiFS7pY=", "Peach Slices", 7 },
                    { 71, true, "https://media.istockphoto.com/id/175012912/photo/crisps.jpg?b=1&s=612x612&w=0&k=20&c=oV50cXeduXkBHV7gs2xQIABnbdk067TE6K9tjJyrRwA=", "Potato Chips", 8 },
                    { 72, true, "https://media.istockphoto.com/id/115984173/photo/soft-pretzel-on-white.jpg?b=1&s=612x612&w=0&k=20&c=jExOGfjxGkAsNLi2rhhqW2_JnxNTu5sCSKjOY8qCJog=", "Pretzels", 8 },
                    { 73, true, "https://media.istockphoto.com/id/483585729/photo/trail-mix-on-white.jpg?b=1&s=612x612&w=0&k=20&c=AR7sfyb6lUYJRkSt2cjpik6qgirIsbvkd700w43Va7M=", "Trail Mix", 8 },
                    { 74, true, "https://media.istockphoto.com/id/1295165510/photo/popcorn-flying.jpg?b=1&s=612x612&w=0&k=20&c=layOmCVMZgz672UEYjJ7cRUk-LVRLu9sdVcN7LtkaGE=", "Popcorn", 8 },
                    { 75, true, "https://media.istockphoto.com/id/186682188/photo/chocolate-bar-with-a-missing-bite-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=wIUro93kV6UyqVz8hJUyHjdfjWHRe8SjJoA5JSHN5fs=", "Chocolate Bars", 8 },
                    { 76, true, "https://media.istockphoto.com/id/152971676/photo/glass-of-orange-juice-and-fresh-oranges.jpg?b=1&s=612x612&w=0&k=20&c=qYsE1GXeW_WwPAILXigyf7eNjaDWCEhyKYp9xCGIdNI=", "Orange Juice", 9 },
                    { 77, true, "https://i5.walmartimages.com/seo/Pure-Leaf-Unsweetened-Green-Tea-Real-Brewed-Iced-Tea-18-5-oz-12-Pack-Bottles_a384ee78-03a9-4f7f-a2d5-7ff9b21dc7d1.9c5b69cb876487d19db0f118d6246f5b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Green Tea", 9 },
                    { 78, true, "https://i5.walmartimages.com/seo/Sparkling-Ice-Variety-Pack-17-Fl-Oz-12-Count-Black-Raspberry-Cherry-Limeade-Orange-Mango-Kiwi-Strawberry_75d33e46-de37-43e0-9666-e82a1a4966aa.61908e13829ac73c2946186bd0ba78c8.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Sparkling Water", 9 },
                    { 79, true, "https://i5.walmartimages.com/seo/International-Delight-OREO-Cookie-Flavored-Iced-Coffee-15-fl-oz_a8644014-9da7-4ac8-bff1-7b38f8809d82.076a91baa85b8623de6bdc4fd4096721.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Iced Coffee", 9 },
                    { 80, true, "https://media.istockphoto.com/id/1164372498/photo/lemonade-in-a-jar.jpg?b=1&s=612x612&w=0&k=20&c=bsLQ9PawSoj4DAt7QR6ezAivCnO1LbzOVCXm3RXlSME=", "Lemonade", 9 },
                    { 81, true, "https://media.istockphoto.com/id/609046646/photo/two-raw-salmon-fillets.jpg?b=1&s=612x612&w=0&k=20&c=5rF1fZO9NEJ30LpSTOg4xFCSKjKJzNeQE0mLUj6IJQM=", "Salmon Fillet", 10 },
                    { 82, true, "https://media.istockphoto.com/id/154969747/photo/shrimp.jpg?b=1&s=612x612&w=0&k=20&c=bV1t2mFzM-myrW6bvs49Lgs2m8jSuOoh64j7OKMqAeo=", "Shrimp", 10 },
                    { 83, true, "https://media.istockphoto.com/id/1301917262/photo/fresh-tuna-fish-fillet-steaks-garnished-with-parsley-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=CohQyZuGuqC8mmvBgfW4AmKVWZrBDtXh68uq6gPu3Cg=", "Tuna Steak", 10 },
                    { 84, true, "https://media.istockphoto.com/id/1219089216/photo/cooked-organic-alaskan-king-crab-legs-with-butter-and-lemons-alaskan-king-crab-on-wood-plate.jpg?b=1&s=612x612&w=0&k=20&c=TFYaKeDOULeDRqk54v_3L4eE5axuvUmUYZ14lMAZDMg=", "Crab Legs", 10 },
                    { 85, true, "https://media.istockphoto.com/id/520621629/photo/lobster-tails.jpg?b=1&s=612x612&w=0&k=20&c=ws8VWA9aHl-IByQK3ZOkmzjX-QSzfVcWsL2Qilo7TDE=", "Lobster Tail", 10 },
                    { 86, true, "https://media.istockphoto.com/id/184388608/photo/ketchup.jpg?b=1&s=612x612&w=0&k=20&c=wELXOtbNGBEwfJLiejXcndIa8RBVuHXl_zA7P3DR7Cc=", "Ketchup", 11 },
                    { 87, true, "https://media.istockphoto.com/id/185067816/photo/close-up-of-yellow-mustard-bottle-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=hdIm1Iw1nMAzjlIAUFkseoohvw5Wveve-AvLPjQe14I=", "Mustard", 11 },
                    { 88, true, "https://media.istockphoto.com/id/1312015198/photo/mayonnaise-in-bottle-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=ih4eighz2nbOGT6OBoZY6sdPFY8iIZGpsliVO0jaYRQ=", "Mayonnaise", 11 },
                    { 89, true, "https://media.istockphoto.com/id/175387957/photo/glass-bottle-of-soy-sauce-isolated-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=iYrmoVDWY6BcbJppMsHETGMTDJZE7UQuLgd_Kq7AOnM=", "Soy Sauce", 11 },
                    { 90, true, "https://media.istockphoto.com/id/1401340171/photo/hot-chili-sauce-bottle.jpg?b=1&s=612x612&w=0&k=20&c=CK05vS8unQm7GcERdRGWpecZ0-rjtvkh6wP2x-aEPlc=", "Hot Sauce", 11 },
                    { 91, true, "https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=yWXnUB0TbGVWD5NE-dbu33KzQ_ujPXWQtU7809AUwxE=", "Spaghetti", 12 },
                    { 92, true, "https://media.istockphoto.com/id/485130848/photo/heap-of-raw-quinoa-seeds.jpg?b=1&s=612x612&w=0&k=20&c=fdgth3fOQa3JukWibxj2Bo2bK0zRCQ_oPW-Vuc-TW3k=", "Quinoa", 12 },
                    { 93, true, "https://media.istockphoto.com/id/183427268/photo/beans-lentils-peas-and-grains-brown-rice.jpg?b=1&s=612x612&w=0&k=20&c=9eATU2zJs7tiD1yQocMBDPJ2vgMJql4QkBcxMAP3M5g=", "Brown Rice", 12 },
                    { 94, true, "https://media.istockphoto.com/id/480558745/photo/couscous.jpg?b=1&s=612x612&w=0&k=20&c=EHGfY7blVbqFyk5TK_rVI4VSlzpBZe03gGgh-VebGec=", "Couscous", 12 },
                    { 95, true, "https://media.istockphoto.com/id/157587362/photo/detailed-close-up-of-sliced-grain-bread-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=etEHmHt4SBkovHw9Dl3J347gKA1DW5SKpb4fxyACWko=", "Whole Wheat Bread", 12 },
                    { 96, true, "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?b=1&s=612x612&w=0&k=20&c=TBBd7De6JAG56-Wz8vrwIFqxnZ0KctXFZCFsmsBK8Xk=", "Organic Apples", 15 },
                    { 97, true, "https://i5.walmartimages.com/seo/Great-Value-Natural-Whole-Almonds-30-oz_a6c16569-d88f-4f33-ad52-44322f7b7bde.70f7b151129e805537a7493fea2b3654.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Natural Almonds", 15 },
                    { 98, true, "https://i5.walmartimages.com/seo/Marketside-Organic-Baby-Spinach-16-oz-Clam-Shell-Fresh_03b1e82b-ae79-43b8-a361-325ae87396f1.692883c91785230e2a0595e99fe0172b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Organic Spinach", 15 },
                    { 99, true, "https://i5.walmartimages.com/seo/FAGE-BestSelf-All-Natural-Reduced-Fat-Lactose-Free-Greek-Strained-Yogurt-32oz_81b1f02d-d7d2-44a7-9109-f4e5889a95e4.5ae493c25d6462b7f20d628a7a70281e.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Natural Yogurt", 15 },
                    { 100, true, "https://i5.walmartimages.com/seo/White-Royal-Quinoa-10-Lb_80ac806d-fb9d-44c7-a5c3-0f4da46ac4fe.9b97a1dec37cf9751f4daa2e88efa8ee.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Organic Quinoa", 15 },
                    { 101, true, "https://media.istockphoto.com/id/483226976/photo/heap-of-japanese-sushi-rice.jpg?b=1&s=612x612&w=0&k=20&c=7DwRstGOQCQcqUkLu0W7mAn0mZbTedev3HPZUUPuiNM=", "Sushi Rice", 16 },
                    { 102, true, "https://media.istockphoto.com/id/898251592/photo/curry-powder-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=wNFusa7iRCbuBVBRGEynCqwyZhHD_z4e7qfUGl2wn54=", "Curry Powder", 16 },
                    { 103, true, "https://media.istockphoto.com/id/472173464/photo/piadina-round-italian-tortilla.jpg?b=1&s=612x612&w=0&k=20&c=tWoNfS3ohNu1k1JQOsVnnF1GeEHIxeHMhJJGV8m6tg0=", "Tortillas", 16 },
                    { 104, true, "https://media.istockphoto.com/id/1356970482/photo/sesame-oil-with-white-sesame-seed.jpg?b=1&s=612x612&w=0&k=20&c=Ofahpdu83bsXZSWbZsQ2dtjzhB15T7QjLRLaTt2M8nM=", "Sesame Oil", 16 },
                    { 105, true, "https://media.istockphoto.com/id/480558745/photo/couscous.jpg?b=1&s=612x612&w=0&k=20&c=EHGfY7blVbqFyk5TK_rVI4VSlzpBZe03gGgh-VebGec=", "Couscous", 16 },
                    { 106, true, "https://images.pexels.com/photos/14027298/pexels-photo-14027298.jpeg?auto=compress&cs=tinysrgb&w=800", "Vitamin C Supplements", 17 },
                    { 107, true, "https://media.istockphoto.com/id/617900032/photo/granola-muesli-bars.jpg?b=1&s=612x612&w=0&k=20&c=JnmV85dflbs1zxTiGE2IrfqRWXXpSxQF1qoQAkts7EQ=", "Protein Bars", 17 },
                    { 108, true, "https://media.istockphoto.com/id/1165030372/photo/fish-oil-supplement-capsules-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=i5lgj7bUMYLClFQxd9PBhNd-NdgdjuFHTq4RofEKs2o=", "Fish Oil Capsules", 17 },
                    { 109, true, "https://i5.walmartimages.com/seo/Bigelow-Cozy-Chamomile-Caffeine-Free-Herbal-Tea-Bags-20-Count_4878d77e-3954-4f72-b86d-ba60d8c1a987.e013f5cdf4ac50c480a2e3edadafe562.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Herbal Tea", 17 },
                    { 110, true, "https://i5.walmartimages.com/seo/SkinnyPop-Gluten-Free-Original-Popcorn-0-65-oz-Snack-Size-Bags-10-Count_435d5a58-52a5-4918-93f6-54da593b1a9a.00feaa34a202b4b8935b143a7b5ce0c9.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Gluten-Free Snacks", 17 },
                    { 111, true, "https://media.istockphoto.com/id/638173396/photo/baby-milk-bottle.jpg?b=1&s=612x612&w=0&k=20&c=gseAHrlqzja0wEXQ-SvKjiu1FCpHXqR7oXWSa0M2ioA=", "Baby Formula", 18 },
                    { 112, true, "https://media.istockphoto.com/id/533725934/photo/stacks-diapers-for-children-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=m1lKvsylP-Gm_-Extzto4C_Aj5qwg9j6LXOViOLDlFo=", "Diapers", 18 },
                    { 113, true, "https://media.istockphoto.com/id/152145349/photo/baby-wipes.jpg?b=1&s=612x612&w=0&k=20&c=hGawDuJnXc2RhQ4gp-TskuR_03P1dp78EWB8SHTDdqc=", "Baby Wipes", 18 },
                    { 114, true, "https://i5.walmartimages.com/seo/Gerber-Animal-Crackers-Toddler-Snacks-Cinnamon-Graham-Crackers-6-oz-Bag_2a89b3d4-aecc-486d-a039-809cf0306c2a.d5b1a10f8dd56f13def24821bff95b56.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Toddler Snacks", 18 },
                    { 115, true, "https://i5.walmartimages.com/seo/Hello-Bello-Sweet-Cream-Infant-Shampoo-Body-Wash-Tear-Free-All-Skin-Types-10-fl-oz_bb36e405-44fc-4b13-b9ad-2bc2ef211775.51d7304d215f021b94e93df8f936f744.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Baby Shampoo", 18 },
                    { 116, true, "https://media.istockphoto.com/id/995557138/photo/toilet-paper-isolated.jpg?b=1&s=612x612&w=0&k=20&c=ouQ8wfA5Rfd8ALDCA8RXN-BuJhkWIB-SYO4P94I8udY=", "Toilet Paper", 19 },
                    { 117, true, "https://media.istockphoto.com/id/512574098/photo/laundry-detergent-bottle.jpg?b=1&s=612x612&w=0&k=20&c=nyO5_R1hUVktFI9NgBVp2viLSi2d9VKXXx2JNzMt0JQ=", "Laundry Detergent", 19 },
                    { 118, true, "https://media.istockphoto.com/id/969720440/photo/spray-bottle-isolated.jpg?b=1&s=612x612&w=0&k=20&c=UBMLh7VGaIAA20nTLSbVdfSkEu0yUMuWy4WRNzp-yBE=", "Cleaning Spray", 19 },
                    { 119, true, "https://media.istockphoto.com/id/152974340/photo/paper-towel-roll.jpg?b=1&s=612x612&w=0&k=20&c=E7XBF1xlEX_MDvXP7J3n9KXrO1cD9sYvptMOAgpNp5Y=", "Paper Towels", 19 },
                    { 120, true, "https://media.istockphoto.com/id/172857643/photo/a-bottle-of-green-dishwashing-detergent.jpg?b=1&s=612x612&w=0&k=20&c=kpHR1dgPr4VET0qCRgD3Wjx4nB_o9PLX3lR-AlAAqXQ=", "Dish Soap", 19 },
                    { 121, true, "https://i5.walmartimages.com/seo/PEDIGREE-Complete-Nutrition-Grilled-Steak-and-Vegetable-Dry-Dog-Food-for-Small-Adult-Dog-14-lb-Bag_eb06b6bb-4ffb-4a92-93d9-713333981b80.3e8d1837e51694ea59b9c49baeab2289.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Dog Food", 20 },
                    { 122, true, "https://i5.walmartimages.com/seo/Arm-Hammer-SLIDE-Easy-Clean-Up-Multi-Cat-Clumping-Cat-Litter-38lb_12472a8c-0613-4e85-a1da-ad27bb5b37d7.9bdb8685968b32a075cab2b8b14d5938.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Cat Litter", 20 },
                    { 123, true, "https://media.istockphoto.com/id/154956025/photo/dog-equipment.jpg?b=1&s=612x612&w=0&k=20&c=VTw0dkn_XQwB9YgiXm0mGXT6N4tflX6z1D1KOTKbikk=", "Pet Toys", 20 },
                    { 124, true, "https://i5.walmartimages.com/seo/Tetra-TetraFin-Goldfish-Flakes-7-06-Ounces-Balanced-Diet-Fish-Food_e0cf7a89-4f10-44f6-89be-d70102e11487.5720308f34d7e840e5deca2362c85607.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Fish Food", 20 },
                    { 125, true, "https://i5.walmartimages.com/seo/Global-Harvest-Foods-Sunflower-Grains-Wild-Bird-Feed-Dry-5-lb-Bag_4bad5198-aae2-43a7-b934-2ae8d51deee2.48bdcd1afa4f602343f0db5a5315db0c.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", "Bird Seed", 20 },
                    { 126, true, "https://media.istockphoto.com/id/1369748329/photo/truffle-oil-and-black-edible-winter-truffle-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=TcChKD9GgLEYdwtIx2P41Gi--Xis9CcYI2v-53p49Oc=", "Truffle Oil", 21 },
                    { 127, true, "https://media.istockphoto.com/id/1292595189/photo/stigmas-of-saffron-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=ZBtqWX5SWdi1M4eQTGwOiWv41R7uCcF_LT4IUV33LFg=", "Saffron", 21 },
                    { 128, true, "https://media.istockphoto.com/id/1287290400/photo/variety-of-cheeses-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=O17CtDK00pVgUZbnDix4EWy7xLlqxPff4ySE85NQ5gA=", "Artisan Cheese", 21 },
                    { 129, true, "https://media.istockphoto.com/id/171360702/photo/overhead-view-of-tray-with-cupcakes.jpg?b=1&s=612x612&w=0&k=20&c=PrjckllxDlkxuSaMZzZFyonbVm7LNfWxsjzqfwb3yj0=", "Gourmet Chocolate", 21 },
                    { 130, true, "https://i5.walmartimages.com/seo/Lavazza-Super-Crema-Whole-Bean-Coffee-Blend-Medium-Espresso-Roast-35-2-Ounce-Bag_c3ecf626-ddfe-4a34-8d6b-b0e1cdc63abd.5581a1624cbeecea830afbcebaf4e675.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Specialty Coffee Beans", 21 },
                    { 131, true, "https://media.istockphoto.com/id/1030766462/photo/truffle-salt-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=I7SYb2Wv5_WbAG77MiPN636etuUjqa_udpRjilGcnr8=", "Truffle Salt", 21 },
                    { 132, true, "https://media.istockphoto.com/id/450736789/photo/traditional-unsliced-bread-loaf.jpg?b=1&s=612x612&w=0&k=20&c=7LKIUPojM-zQXmPc_vUsYusQ_b8uSAxR-LDoGZkKfaQ=", "Sourdough Bread", 21 },
                    { 133, true, "https://media.istockphoto.com/id/182176911/photo/caviar.jpg?b=1&s=612x612&w=0&k=20&c=gPS7JpC70KRo_UhdwP-e7lG4dumWv4uAZOsUnUhrDPQ=", "Caviar", 21 },
                    { 134, true, "https://i5.walmartimages.com/seo/Cobram-Estate-Mild-100-California-Extra-Virgin-Olive-Oil-12-7-fl-oz-Glass-Bottle_40127cf9-2957-4308-b76e-28445db37a4e.a748a20341530e60dc30ba82a7418dac.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Gourmet Olive Oil", 21 },
                    { 135, true, "https://media.istockphoto.com/id/179713491/photo/glass-bottle-with-handle-full-of-black-liquid.jpg?b=1&s=612x612&w=0&k=20&c=7U-w_3vGyGi6UyjTmcfBW0ZiyJVbOoTqhNl5WvV_Ef0=", "Balsamic Vinegar", 21 },
                    { 136, true, "https://i5.walmartimages.com/seo/Oak-Leaf-Vineyards-Cabernet-Sauvignon-Red-Wine-750-ml-Glass-ABV-13-00-5-5oz-servings-California_4ddf36db-ea43-44f0-ac4f-b2c021396811.4006152fd91b1c0660aa13576b32c30f.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", "Red Wine", 23 },
                    { 137, true, "https://media.istockphoto.com/id/1164593695/photo/ipa-pint.jpg?b=1&s=612x612&w=0&k=20&c=0DD4FsKdsK-Fg7bQmE_6ZiGxR5QoI-ryJ-fw2BWoDFs=", "Craft Beer", 23 },
                    { 138, true, "https://media.istockphoto.com/id/1310472003/photo/bottle-of-transparent-glass-with-gin-tequila-rum-or-vodka-isolated-on-pure-white-background.jpg?b=1&s=612x612&w=0&k=20&c=E3bldG7QG-zBGCzrJi6AuHcwca6oEP2qqP9M-F5hPOo=", "Vodka", 23 },
                    { 139, true, "https://media.istockphoto.com/id/922676952/photo/whiskey-bottle-on-white.jpg?b=1&s=612x612&w=0&k=20&c=WnYCM66fRPMyhJhpqX2d3j7VJKgWIoCgGt8WaoXz4MI=", "Whiskey", 23 },
                    { 140, true, "https://media.istockphoto.com/id/159018520/photo/generic-bottle-of-gold-tequila-on-a-white-surface.jpg?b=1&s=612x612&w=0&k=20&c=p5wmsdKHAAM5iyD0oeKrdfuZ936X9BchuI4FXcTEsMI=", "Tequila", 23 }
                });

            migrationBuilder.InsertData(
                table: "Stores",
                columns: new[] { "Id", "Active", "City", "Name", "State", "Street", "UserId", "Zipcode" },
                values: new object[] { 1, true, "Goodlettsville", "Dollar General", "TN", "100 Mission Ridge", 1, 37072 });

            migrationBuilder.InsertData(
                table: "Types",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Deli" },
                    { 2, "Produce" },
                    { 3, "Dairy" },
                    { 4, "Meat" },
                    { 5, "Bakery" },
                    { 6, "Frozen Foods" },
                    { 7, "Canned Goods" },
                    { 8, "Snacks" },
                    { 9, "Beverages" },
                    { 10, "Seafood" },
                    { 11, "Condiments" },
                    { 12, "Grains & Pasta" },
                    { 13, "Sweets & Desserts" },
                    { 14, "Spices & Seasonings" },
                    { 15, "Organic & Natural" },
                    { 16, "Ethnic Foods" },
                    { 17, "Health & Wellness" },
                    { 18, "Baby & Toddler" },
                    { 19, "Household Essentials" },
                    { 20, "Pet Supplies" },
                    { 21, "Specialty Foods" },
                    { 22, "Alcohol" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[] { "c3aaeb97-d2ba-4a53-a521-4eea61e59b35", "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f" });

            migrationBuilder.InsertData(
                table: "Inventories",
                columns: new[] { "Id", "Available", "DistributorId", "Price", "ProductId", "Stock" },
                values: new object[,]
                {
                    { 1, true, 1, 1.99m, 1, 9999 },
                    { 2, true, 1, 1.99m, 2, 9999 },
                    { 3, true, 1, 1.99m, 3, 9999 },
                    { 4, true, 1, 1.99m, 4, 9999 },
                    { 5, true, 1, 1.99m, 5, 9999 },
                    { 6, true, 1, 1.99m, 6, 9999 },
                    { 7, true, 1, 1.99m, 7, 9999 },
                    { 8, true, 1, 1.99m, 8, 9999 },
                    { 9, true, 1, 1.99m, 9, 9999 },
                    { 10, true, 1, 1.99m, 10, 9999 },
                    { 11, true, 1, 1.99m, 11, 9999 },
                    { 12, true, 1, 1.99m, 12, 9999 },
                    { 13, true, 1, 1.99m, 13, 9999 },
                    { 14, true, 1, 1.99m, 14, 9999 },
                    { 15, true, 1, 1.99m, 15, 9999 },
                    { 16, true, 1, 1.99m, 16, 9999 },
                    { 17, true, 1, 1.99m, 17, 9999 },
                    { 18, true, 1, 1.99m, 18, 9999 },
                    { 19, true, 1, 1.99m, 19, 9999 },
                    { 20, true, 1, 1.99m, 20, 9999 },
                    { 21, true, 2, 1.99m, 21, 9999 },
                    { 23, true, 2, 1.75m, 23, 9999 },
                    { 24, true, 2, 3.45m, 24, 9999 },
                    { 25, true, 2, 2.10m, 25, 9999 },
                    { 26, true, 2, 4.25m, 26, 9999 },
                    { 27, true, 2, 1.95m, 27, 9999 },
                    { 28, true, 2, 3.80m, 28, 9999 },
                    { 29, true, 2, 2.60m, 29, 9999 },
                    { 30, true, 2, 1.45m, 30, 9999 },
                    { 31, true, 2, 3.15m, 31, 9999 },
                    { 32, true, 2, 2.80m, 32, 9999 },
                    { 33, true, 2, 1.60m, 33, 9999 },
                    { 34, true, 2, 3.50m, 34, 9999 },
                    { 35, true, 2, 2.20m, 35, 9999 },
                    { 36, true, 2, 1.30m, 36, 9999 },
                    { 37, true, 2, 3.75m, 37, 9999 },
                    { 38, true, 2, 2.45m, 38, 9999 },
                    { 39, true, 2, 1.85m, 39, 9999 },
                    { 40, true, 2, 3.25m, 40, 9999 },
                    { 41, true, 3, 2.50m, 41, 9999 },
                    { 42, true, 3, 3.20m, 42, 9999 },
                    { 43, true, 3, 2.80m, 43, 9999 },
                    { 44, true, 3, 4.10m, 44, 9999 },
                    { 45, true, 3, 3.50m, 45, 9999 },
                    { 46, true, 3, 2.90m, 46, 9999 },
                    { 47, true, 3, 4.30m, 47, 9999 },
                    { 48, true, 3, 3.80m, 48, 9999 },
                    { 49, true, 3, 2.60m, 49, 9999 },
                    { 50, true, 3, 4.50m, 50, 9999 },
                    { 51, true, 3, 3.15m, 51, 9999 },
                    { 52, true, 3, 2.75m, 52, 9999 },
                    { 53, true, 3, 4.20m, 53, 9999 },
                    { 54, true, 3, 3.60m, 54, 9999 },
                    { 55, true, 3, 2.85m, 55, 9999 },
                    { 56, true, 3, 4.00m, 56, 9999 },
                    { 57, true, 3, 3.25m, 57, 9999 },
                    { 58, true, 3, 2.70m, 58, 9999 },
                    { 59, true, 3, 4.40m, 59, 9999 },
                    { 60, true, 3, 3.30m, 60, 9999 },
                    { 61, true, 4, 2.95m, 61, 9999 },
                    { 62, true, 4, 3.10m, 62, 9999 },
                    { 63, true, 4, 2.85m, 63, 9999 },
                    { 64, true, 4, 3.40m, 64, 9999 },
                    { 65, true, 4, 2.75m, 65, 9999 },
                    { 66, true, 4, 3.20m, 66, 9999 },
                    { 67, true, 4, 2.95m, 67, 9999 },
                    { 68, true, 4, 3.30m, 68, 9999 },
                    { 69, true, 4, 2.80m, 69, 9999 },
                    { 70, true, 4, 3.50m, 70, 9999 },
                    { 71, true, 4, 2.90m, 71, 9999 },
                    { 72, true, 4, 3.25m, 72, 9999 },
                    { 73, true, 4, 2.70m, 73, 9999 },
                    { 74, true, 4, 3.45m, 74, 9999 },
                    { 75, true, 4, 2.75m, 75, 9999 },
                    { 76, true, 4, 3.60m, 76, 9999 },
                    { 77, true, 4, 2.85m, 77, 9999 },
                    { 78, true, 4, 3.70m, 78, 9999 },
                    { 79, true, 4, 2.95m, 79, 9999 },
                    { 80, true, 4, 3.80m, 80, 9999 },
                    { 81, true, 5, 3.00m, 81, 9999 },
                    { 82, true, 5, 3.15m, 82, 9999 },
                    { 83, true, 5, 2.90m, 83, 9999 },
                    { 84, true, 5, 3.40m, 84, 9999 },
                    { 85, true, 5, 2.80m, 85, 9999 },
                    { 86, true, 5, 3.25m, 86, 9999 },
                    { 87, true, 5, 2.95m, 87, 9999 },
                    { 88, true, 5, 3.50m, 88, 9999 },
                    { 89, true, 5, 2.70m, 89, 9999 },
                    { 90, true, 5, 3.60m, 90, 9999 },
                    { 91, true, 5, 2.85m, 91, 9999 },
                    { 92, true, 5, 3.70m, 92, 9999 },
                    { 93, true, 5, 2.75m, 93, 9999 },
                    { 94, true, 5, 3.80m, 94, 9999 },
                    { 95, true, 5, 2.65m, 95, 9999 },
                    { 96, true, 5, 3.90m, 96, 9999 },
                    { 97, true, 5, 2.75m, 97, 9999 },
                    { 98, true, 5, 4.00m, 98, 9999 },
                    { 99, true, 5, 2.95m, 99, 9999 },
                    { 100, true, 5, 4.10m, 100, 9999 },
                    { 101, true, 6, 3.00m, 101, 9999 },
                    { 102, true, 6, 3.10m, 102, 9999 },
                    { 103, true, 6, 2.90m, 103, 9999 },
                    { 104, true, 6, 3.40m, 104, 9999 },
                    { 105, true, 6, 2.80m, 105, 9999 },
                    { 106, true, 6, 3.25m, 106, 9999 },
                    { 107, true, 6, 2.95m, 107, 9999 },
                    { 108, true, 6, 3.50m, 108, 9999 },
                    { 109, true, 6, 2.70m, 109, 9999 },
                    { 110, true, 6, 3.60m, 110, 9999 },
                    { 111, true, 6, 2.85m, 111, 9999 },
                    { 112, true, 6, 3.70m, 112, 9999 },
                    { 113, true, 6, 2.75m, 113, 9999 },
                    { 114, true, 6, 3.80m, 114, 9999 },
                    { 115, true, 6, 2.65m, 115, 9999 },
                    { 116, true, 6, 3.90m, 116, 9999 },
                    { 117, true, 6, 2.75m, 117, 9999 },
                    { 118, true, 6, 4.00m, 118, 9999 },
                    { 119, true, 6, 2.95m, 119, 9999 },
                    { 120, true, 6, 4.10m, 120, 9999 },
                    { 121, true, 7, 3.00m, 121, 9999 },
                    { 122, true, 7, 3.15m, 122, 9999 },
                    { 123, true, 7, 2.90m, 123, 9999 },
                    { 124, true, 7, 3.40m, 124, 9999 },
                    { 125, true, 7, 2.80m, 125, 9999 },
                    { 126, true, 7, 3.25m, 126, 9999 },
                    { 127, true, 7, 2.95m, 127, 9999 },
                    { 128, true, 7, 3.50m, 128, 9999 },
                    { 129, true, 7, 2.70m, 129, 9999 },
                    { 130, true, 7, 3.60m, 130, 9999 },
                    { 131, true, 7, 2.85m, 131, 9999 },
                    { 132, true, 7, 3.70m, 132, 9999 },
                    { 133, true, 7, 2.75m, 133, 9999 },
                    { 134, true, 7, 3.80m, 134, 9999 },
                    { 135, true, 7, 2.65m, 135, 9999 },
                    { 136, true, 7, 3.90m, 136, 9999 },
                    { 137, true, 7, 2.75m, 137, 9999 },
                    { 138, true, 7, 4.00m, 138, 9999 },
                    { 139, true, 7, 2.95m, 139, 9999 },
                    { 140, true, 7, 4.10m, 140, 9999 },
                    { 141, true, 8, 3.00m, 1, 9999 },
                    { 143, true, 8, 2.90m, 2, 9999 },
                    { 144, true, 8, 3.40m, 3, 9999 },
                    { 145, true, 8, 2.80m, 4, 9999 },
                    { 146, true, 8, 3.25m, 5, 9999 },
                    { 147, true, 8, 2.95m, 6, 9999 },
                    { 148, true, 8, 3.50m, 7, 9999 },
                    { 149, true, 8, 2.70m, 8, 9999 },
                    { 150, true, 8, 3.60m, 9, 9999 },
                    { 151, true, 8, 2.85m, 10, 9999 },
                    { 152, true, 8, 3.70m, 11, 9999 },
                    { 153, true, 8, 2.75m, 12, 9999 },
                    { 154, true, 8, 3.80m, 13, 9999 },
                    { 155, true, 8, 2.65m, 14, 9999 },
                    { 156, true, 8, 3.90m, 15, 9999 },
                    { 157, true, 8, 2.75m, 16, 9999 },
                    { 158, true, 8, 4.00m, 17, 9999 },
                    { 159, true, 8, 2.95m, 18, 9999 },
                    { 160, true, 8, 4.10m, 19, 9999 },
                    { 161, true, 9, 3.00m, 20, 9999 },
                    { 163, true, 9, 3.40m, 23, 9999 },
                    { 164, true, 9, 2.80m, 24, 9999 },
                    { 165, true, 9, 3.25m, 25, 9999 },
                    { 166, true, 9, 2.95m, 26, 9999 },
                    { 167, true, 9, 3.50m, 27, 9999 },
                    { 168, true, 9, 2.70m, 28, 9999 },
                    { 169, true, 9, 3.60m, 29, 9999 },
                    { 170, true, 9, 2.85m, 30, 9999 },
                    { 171, true, 9, 3.70m, 31, 9999 },
                    { 172, true, 9, 2.75m, 32, 9999 },
                    { 173, true, 9, 3.80m, 33, 9999 },
                    { 174, true, 9, 2.65m, 34, 9999 },
                    { 175, true, 9, 3.90m, 35, 9999 },
                    { 176, true, 9, 2.75m, 36, 9999 },
                    { 177, true, 9, 4.00m, 37, 9999 },
                    { 178, true, 9, 2.95m, 38, 9999 },
                    { 179, true, 9, 4.10m, 39, 9999 },
                    { 180, true, 9, 3.00m, 40, 9999 },
                    { 181, true, 10, 3.15m, 41, 9999 },
                    { 182, true, 10, 2.90m, 42, 9999 },
                    { 183, true, 10, 3.40m, 43, 9999 },
                    { 184, true, 10, 2.80m, 44, 9999 },
                    { 185, true, 10, 3.25m, 45, 9999 },
                    { 186, true, 10, 2.95m, 46, 9999 },
                    { 187, true, 10, 3.50m, 47, 9999 },
                    { 188, true, 10, 2.70m, 48, 9999 },
                    { 189, true, 10, 3.60m, 49, 9999 },
                    { 190, true, 10, 2.85m, 50, 9999 },
                    { 191, true, 10, 3.70m, 51, 9999 },
                    { 192, true, 10, 2.75m, 52, 9999 },
                    { 193, true, 10, 3.80m, 53, 9999 },
                    { 194, true, 10, 2.65m, 54, 9999 },
                    { 195, true, 10, 3.90m, 55, 9999 },
                    { 196, true, 10, 2.75m, 56, 9999 },
                    { 197, true, 10, 4.00m, 57, 9999 },
                    { 198, true, 10, 2.95m, 58, 9999 },
                    { 199, true, 10, 4.10m, 59, 9999 },
                    { 200, true, 10, 3.00m, 60, 9999 },
                    { 201, true, 11, 3.15m, 61, 9999 },
                    { 202, true, 11, 2.90m, 62, 9999 },
                    { 203, true, 11, 3.40m, 63, 9999 },
                    { 204, true, 11, 2.80m, 64, 9999 },
                    { 205, true, 11, 3.25m, 65, 9999 },
                    { 206, true, 11, 2.95m, 66, 9999 },
                    { 207, true, 11, 3.50m, 67, 9999 },
                    { 208, true, 11, 2.70m, 68, 9999 },
                    { 209, true, 11, 3.60m, 69, 9999 },
                    { 210, true, 11, 2.85m, 70, 9999 },
                    { 211, true, 11, 3.70m, 71, 9999 },
                    { 212, true, 11, 2.75m, 72, 9999 },
                    { 213, true, 11, 3.80m, 73, 9999 },
                    { 214, true, 11, 2.65m, 74, 9999 },
                    { 215, true, 11, 3.90m, 75, 9999 },
                    { 216, true, 11, 2.75m, 76, 9999 },
                    { 217, true, 11, 4.00m, 77, 9999 },
                    { 218, true, 11, 2.95m, 78, 9999 },
                    { 219, true, 11, 4.10m, 79, 9999 },
                    { 220, true, 12, 3.00m, 80, 9999 },
                    { 221, true, 13, 5.50m, 81, 9999 },
                    { 222, true, 14, 10.25m, 82, 9999 },
                    { 223, true, 14, 2.75m, 83, 9999 },
                    { 224, true, 14, 8.99m, 84, 9999 },
                    { 225, true, 14, 6.45m, 85, 9999 },
                    { 226, true, 14, 12.75m, 86, 9999 },
                    { 227, true, 14, 4.50m, 87, 9999 },
                    { 228, true, 14, 9.95m, 88, 9999 },
                    { 229, true, 14, 3.25m, 89, 9999 },
                    { 230, true, 14, 7.80m, 90, 9999 },
                    { 231, true, 14, 11.60m, 91, 9999 },
                    { 232, true, 14, 6.90m, 92, 9999 },
                    { 233, true, 14, 8.25m, 93, 9999 },
                    { 234, true, 14, 4.75m, 94, 9999 },
                    { 235, true, 14, 10.00m, 95, 9999 },
                    { 236, true, 14, 3.90m, 96, 9999 },
                    { 237, true, 14, 7.20m, 97, 9999 },
                    { 238, true, 14, 9.50m, 98, 9999 },
                    { 239, true, 14, 5.20m, 99, 9999 },
                    { 240, true, 15, 8.75m, 100, 9999 },
                    { 241, true, 15, 6.20m, 101, 9999 },
                    { 242, true, 15, 9.99m, 102, 9999 },
                    { 243, true, 15, 4.75m, 103, 9999 },
                    { 244, true, 15, 7.50m, 104, 9999 },
                    { 245, true, 15, 5.80m, 105, 9999 },
                    { 246, true, 15, 11.25m, 106, 9999 },
                    { 247, true, 15, 3.90m, 107, 9999 },
                    { 248, true, 15, 8.45m, 108, 9999 },
                    { 249, true, 15, 5.25m, 109, 9999 },
                    { 250, true, 15, 7.80m, 110, 9999 },
                    { 251, true, 15, 10.50m, 111, 9999 },
                    { 252, true, 15, 6.90m, 112, 9999 },
                    { 253, true, 15, 8.75m, 113, 9999 },
                    { 254, true, 15, 4.50m, 114, 9999 },
                    { 255, true, 15, 9.25m, 115, 9999 },
                    { 256, true, 15, 7.20m, 116, 9999 },
                    { 257, true, 15, 5.90m, 117, 9999 },
                    { 258, true, 15, 8.99m, 118, 9999 },
                    { 259, true, 15, 6.25m, 119, 9999 },
                    { 260, true, 16, 10.75m, 120, 9999 },
                    { 261, true, 16, 6.20m, 121, 9999 },
                    { 262, true, 16, 9.99m, 122, 9999 },
                    { 263, true, 16, 4.75m, 123, 9999 },
                    { 264, true, 16, 7.50m, 124, 9999 },
                    { 265, true, 16, 5.80m, 125, 9999 },
                    { 266, true, 16, 11.25m, 126, 9999 },
                    { 267, true, 16, 3.90m, 127, 9999 },
                    { 268, true, 16, 8.45m, 128, 9999 },
                    { 269, true, 16, 5.25m, 129, 9999 },
                    { 270, true, 16, 7.80m, 130, 9999 },
                    { 271, true, 16, 10.50m, 131, 9999 },
                    { 272, true, 16, 6.90m, 132, 9999 },
                    { 273, true, 16, 8.75m, 133, 9999 },
                    { 274, true, 16, 4.50m, 134, 9999 },
                    { 275, true, 16, 9.25m, 135, 9999 },
                    { 276, true, 16, 7.20m, 136, 9999 },
                    { 277, true, 16, 5.90m, 137, 9999 },
                    { 278, true, 16, 8.99m, 138, 9999 },
                    { 279, true, 16, 6.25m, 139, 9999 },
                    { 280, true, 17, 10.75m, 140, 9999 },
                    { 281, true, 17, 6.20m, 1, 9999 },
                    { 282, true, 17, 9.99m, 2, 9999 },
                    { 283, true, 17, 4.75m, 3, 9999 },
                    { 284, true, 17, 7.50m, 4, 9999 },
                    { 285, true, 17, 5.80m, 5, 9999 },
                    { 286, true, 17, 11.25m, 6, 9999 },
                    { 287, true, 17, 3.90m, 7, 9999 },
                    { 288, true, 17, 8.45m, 8, 9999 },
                    { 289, true, 17, 5.25m, 9, 9999 },
                    { 290, true, 17, 7.80m, 10, 9999 },
                    { 291, true, 17, 10.50m, 11, 9999 },
                    { 292, true, 17, 6.90m, 12, 9999 },
                    { 293, true, 17, 8.75m, 13, 9999 },
                    { 294, true, 17, 4.50m, 14, 9999 },
                    { 295, true, 17, 9.25m, 15, 9999 },
                    { 296, true, 17, 7.20m, 16, 9999 },
                    { 297, true, 17, 5.90m, 17, 9999 },
                    { 298, true, 17, 8.99m, 18, 9999 },
                    { 299, true, 17, 6.25m, 19, 9999 },
                    { 300, true, 17, 10.75m, 20, 9999 },
                    { 301, true, 18, 6.20m, 1, 9999 },
                    { 302, true, 18, 9.99m, 2, 9999 },
                    { 303, true, 18, 4.75m, 3, 9999 },
                    { 304, true, 18, 7.50m, 4, 9999 },
                    { 305, true, 18, 5.80m, 5, 9999 },
                    { 306, true, 18, 11.25m, 6, 9999 },
                    { 307, true, 18, 3.90m, 7, 9999 },
                    { 308, true, 18, 8.45m, 8, 9999 },
                    { 309, true, 18, 5.25m, 9, 9999 },
                    { 310, true, 18, 7.80m, 10, 9999 },
                    { 311, true, 18, 10.50m, 11, 9999 },
                    { 312, true, 18, 6.90m, 12, 9999 },
                    { 313, true, 18, 8.75m, 13, 9999 },
                    { 314, true, 18, 4.50m, 14, 9999 },
                    { 315, true, 18, 9.25m, 15, 9999 },
                    { 316, true, 18, 7.20m, 16, 9999 },
                    { 317, true, 18, 5.90m, 17, 9999 },
                    { 318, true, 18, 8.99m, 18, 9999 },
                    { 319, true, 18, 6.25m, 19, 9999 },
                    { 320, true, 19, 10.75m, 20, 9999 },
                    { 321, true, 19, 6.20m, 21, 9999 },
                    { 323, true, 19, 4.75m, 23, 9999 },
                    { 324, true, 19, 7.50m, 24, 9999 },
                    { 325, true, 19, 5.80m, 25, 9999 },
                    { 326, true, 19, 11.25m, 26, 9999 },
                    { 327, true, 19, 3.90m, 27, 9999 },
                    { 328, true, 19, 8.45m, 28, 9999 },
                    { 329, true, 19, 5.25m, 29, 9999 },
                    { 330, true, 19, 7.80m, 30, 9999 },
                    { 331, true, 19, 10.50m, 31, 9999 },
                    { 332, true, 19, 6.90m, 32, 9999 },
                    { 333, true, 19, 8.75m, 33, 9999 },
                    { 334, true, 19, 4.50m, 34, 9999 },
                    { 335, true, 19, 9.25m, 35, 9999 },
                    { 336, true, 19, 7.20m, 36, 9999 },
                    { 337, true, 19, 5.90m, 37, 9999 },
                    { 338, true, 19, 8.99m, 38, 9999 },
                    { 339, true, 19, 6.25m, 39, 9999 },
                    { 340, true, 19, 10.75m, 40, 9999 },
                    { 341, true, 20, 6.20m, 41, 9999 },
                    { 342, true, 20, 9.99m, 42, 9999 },
                    { 343, true, 20, 4.75m, 43, 9999 },
                    { 344, true, 20, 7.50m, 44, 9999 },
                    { 345, true, 20, 5.80m, 45, 9999 },
                    { 346, true, 20, 11.25m, 46, 9999 },
                    { 347, true, 20, 3.90m, 47, 9999 },
                    { 348, true, 20, 8.45m, 48, 9999 },
                    { 349, true, 20, 5.25m, 49, 9999 },
                    { 350, true, 20, 7.80m, 50, 9999 },
                    { 351, true, 20, 10.50m, 51, 9999 },
                    { 352, true, 20, 6.90m, 52, 9999 },
                    { 353, true, 20, 8.75m, 53, 9999 },
                    { 354, true, 20, 4.50m, 54, 9999 },
                    { 355, true, 20, 9.25m, 55, 9999 },
                    { 356, true, 20, 7.20m, 56, 9999 },
                    { 357, true, 20, 5.90m, 57, 9999 },
                    { 358, true, 20, 8.99m, 58, 9999 },
                    { 359, true, 20, 6.25m, 59, 9999 },
                    { 360, true, 20, 10.75m, 60, 9999 }
                });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "Cancelled", "Date", "Fulfilled", "StoreId" },
                values: new object[] { 1, false, new DateTime(2024, 5, 22, 23, 27, 28, 943, DateTimeKind.Local).AddTicks(790), true, 1 });

            migrationBuilder.InsertData(
                table: "UserProfiles",
                columns: new[] { "Id", "Address", "FirstName", "IdentityUserId", "LastName" },
                values: new object[] { 1, "101 Main Street", "Admina", "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f", "Strator" });

            migrationBuilder.InsertData(
                table: "InventoryOrders",
                columns: new[] { "Id", "InventoryId", "OrderId", "Quantity" },
                values: new object[] { 1, 1, 1, 1 });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Inventories_DistributorId",
                table: "Inventories",
                column: "DistributorId");

            migrationBuilder.CreateIndex(
                name: "IX_Inventories_ProductId",
                table: "Inventories",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_InventoryOrders_InventoryId",
                table: "InventoryOrders",
                column: "InventoryId");

            migrationBuilder.CreateIndex(
                name: "IX_InventoryOrders_OrderId",
                table: "InventoryOrders",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_StoreId",
                table: "Orders",
                column: "StoreId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfiles_IdentityUserId",
                table: "UserProfiles",
                column: "IdentityUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "InventoryOrders");

            migrationBuilder.DropTable(
                name: "Types");

            migrationBuilder.DropTable(
                name: "UserProfiles");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Inventories");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Distributors");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Stores");
        }
    }
}
