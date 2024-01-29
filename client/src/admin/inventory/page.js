import { getDistributor, getDistributors } from "../../managers/distributors"
import { useEffect, useState } from "react"
import { getProducts } from "../../managers/products"
import { editInventory } from "../../managers/inventories"
export const Inventory = () => {
    // distributors
    // state
    const [distributors, setDistributors] = useState([])
    // handle function to get distributors
    const handleGetDistributors = () => {
        getDistributors().then(setDistributors)
    }
    // distributor
    // state
    const [distributor, setDistributor] = useState({})
    // handle function to get distributor with inventory
    const handleGetDistributor = (event) => {
        getDistributor(event.target.value).then(setDistributor)
    }
    // product
    // state
    const [products, setProducts] = useState([])
    // handle function to get products
    const handleGetProducts = () => {
        getProducts().then(setProducts)
    }
    // inventory
    // handle function to edit price
    const handleEditPrice = (event, productId) => {
        const copy = { ...distributor }
        copy.inventories = copy.inventories.map((inventory) => {
            if (inventory.productId === productId) {
                inventory.price = event.target.value * 1
                return inventory
            }
            return inventory
        })
        if (copy.inventories.some((inventory) => inventory.productId === productId) === false) {

        }
        setDistributor(copy)
    }
    // handle function to edit inventory
    const handleEditInventory = (productId) => {
        const inventory = distributor.inventories.find((inventory) => inventory.productId === productId)
        editInventory(inventory).then(() => {
            getDistributor(inventory.distributorId).then(setDistributor)
        })
    }
    // use effect
    useEffect(() => {
        handleGetDistributors()
        handleGetProducts()
    }, [])
    return (
        <div className="h-[80%]">
            <select className="border" onChange={handleGetDistributor}>
                <option>choose a distributor</option>
                {distributors.map((distributor, index) => (
                    <option key={index} value={distributor.id}>
                        {distributor.name}
                    </option>
                ))}
            </select>
            {distributor.id && (
                <ul className="gap-5 grid grid-cols-6 h-full overflow-scroll">
                    {products.map((product, index) => (
                        <li className="flex flex-col gap-3 items-center" key={index}>
                            <img className="border border-emerald-600 h-20 object-cover rounded-full w-20" src={product.imageUrl} alt="" />
                            <p className="truncate">{product.name}</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <p>$</p>
                                <input className="border rounded-lg w-[35%]" onChange={(event) => handleEditPrice(event, product.id)} type="number" value={distributor.inventories.find((inventory) => inventory.productId === product.id)?.price} />
                            </div>
                            {/* <input checked={distributor.inventories.some((inventory) => inventory.id === product.id)} onChange={''} type="checkbox" /> */}
                            {distributor.inventories.some((inventory) => inventory.id === product.id) ? (
                                <button className="bg-gray-300" onClick={() => handleEditInventory(product.id)}>Save Changes</button>
                            ) : (
                                <button className="bg-gray-300" onClick={() => handleEditInventory(product.id)}>Add</button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}