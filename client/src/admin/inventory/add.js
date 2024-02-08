import { useEffect, useState } from "react"
import { addInventory } from "../../managers/inventories"
import { getProducts } from "../../managers/products"

export const AddInventory = ({ displayAddInventory, setDisplayAddInventory, handleGetDistributor, inventory, setInventory }) => {
    // state
    const [products, setProducts] = useState([])
    // handle function to get products
    const handleGetProducts = () => {
        getProducts().then(setProducts)
    }
    // handle function for add inventory form
    const handleAddInventoryForm = (event) => {
        const copy = { ...inventory }
        const { name, value } = event.target
        if (name === "productId") {
            copy.productId = value * 1
        } else if (name === "price") {
            copy.price = value * 1
        }
        setInventory(copy)
    }
    // handle function to add inventory
    const handleAddInventory = () => {
        if (inventory.productId < 0 || typeof inventory.productId === "string") {
            window.alert("Please select a product")
        } else if (inventory.price === 0) {
            window.alert("Please add a price")
        } else {
            addInventory(inventory).then(() => {
                handleGetDistributor(inventory.distributorId)
                setInventory({ distributorId: inventory.distributorId, productId: "defaulValue" })
            })
        }
    }
    // handle function to cancel add inventory
    const handleCancelDisplayAddInventory = () => {
        setDisplayAddInventory(false)
    }
    // use effect
    useEffect(() => {
        handleGetProducts()
    }, [])
    return (
        <div className={`md:flex justify-center ${displayAddInventory ? "flex" : "hidden"}`}>
            <div className="md:bg-white flex flex-col items-center gap-y-5 md:p-5 md:rounded-md md:shadow">
                <p className="font-semibold text-xl">Add to inventory</p>
                <img className="h-20 self-center rounded-full object-cover overflow-hidden w-20" src={products.find((product) => product.id === inventory.productId)?.imageUrl || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6ampr39/fHx8fOzs7j4+P8/Pyvr6/d3d3FxcX29va6urqYmJjs7OzU1NSlpaW1tbWtra3n5+e/v78TS0zBAAACkUlEQVR4nO3b63KCMBCGYUwUUVEO6v3fagWVY4LYZMbZnff51xaZ5jON7CZNEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQb5tvI8qzX4/nH84XG5Upfj2ir2V2E5fZ/XpIX9saMnhkYLIkiyRJjdgMoiEDMmiQgfwM8rSu77ew2wnPoLTmwdZBs0J2BuXrYckcQm4nOoP+WcmWAbcTnUHZPy9eA24nOoN7n0HI54ToDM5k8PjluwyqgNuJzqDoaugPg8gWZ4noDAYLwuIg75fLeeHHsjNIzrZJwWwW+0DNsmEWPjiEZ5AcD8ZUu8VZ8HyQMifvBdIz+PS33i8adu+7Qn4Gn1Tdupl7rlCfQb9seosK7RkcBy1o30iVZ5CPOtDW3WhQnsF13IV3v0p3BqfJRoSpXVepzmA/24+yqeMyzRm4tqOs44lSUwa3yfgOri25av5CPRnklR33VlPnrqSZV09qMsiqSWV082xOz1uPajJ49pTM/f115k6guWa6JGjJ4N1lt8fXN2rv/vysjFaSQdFXBc/KKF04ptFPliclGVR9Bu27XCyeVOkmy5OODAZN9rYyyip/AIPJ8qIig+PoXbf7YdPdncFoSdCQQT4ZceV+MhiFMBy0hgyu0yGvOLI17KwpyGBaHK5jtt0N5GcwLw7XZdB31sRn8O+ziqYro8Vn4CwOV+k6a9Iz+PwRsKC7h+gMfMXhKu/OmuwM/MXhKq8yWnYG/uJw5Uxoy2jRGZTBZ/jboxuSM1guDtdNhKazJjiDbNMe0AxzKUVnkO+jEJxBxNtJzWCTxlNLzSB8KehJ/H+mJGYAjaDjzj9SnHZRuXZiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECXP1XDHv7U4SNFAAAAAElFTkSuQmCC"} alt="" />
                <div className="relative self-stretch">
                    <select className="input-layout peer w-full" name="productId" onChange={handleAddInventoryForm} required type="text" value={inventory.productId || "defaultValue"}>
                        <option value={0}>Choose a product</option>
                        {products.map((product, index) => (
                            <option key={index} value={product.id}>{product.name}</option>
                        ))}
                    </select>
                    <label className="label-layout peer-focus:text-gray-950">* Product</label>
                </div>
                <div className="relative">
                    <input className="input-layout peer w-full" name="price" onChange={handleAddInventoryForm} required type="number" value={inventory.price || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Price</label>
                </div>
                <button className="button-secondary md:hidden text-2xl w-full" onClick={handleCancelDisplayAddInventory}>Cancel</button>
                <button className="button-primary text-2xl w-full" onClick={handleAddInventory}>Add</button>
            </div>
        </div>
    )
}