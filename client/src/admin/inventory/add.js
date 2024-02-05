import { useEffect, useState } from "react"
import { addInventory } from "../../managers/inventories"
import { getProducts } from "../../managers/products"

export const AddInventory = ({ handleGetDistributor, inventory, setInventory }) => {
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
        addInventory(inventory).then(() => {
            handleGetDistributor(inventory.distributorId)
            setInventory({ distributorId: inventory.distributorId })
        })
    }
    // use effect
    useEffect(() => {
        handleGetProducts()
    }, [])
    return (
        <div className="flex flex-col items-center gap-y-5">
            <p className="font-semibold text-xl">Add inventory</p>
            <img className="h-20 self-center rounded-full object-cover overflow-hidden w-20" src={products.find((product) => product.id === inventory.productId)?.imageUrl} alt="" />
            <div className="h-10 min-w-[200px] relative w-72">
                <select className="bg-white peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" name="productId" onChange={handleAddInventoryForm}>
                    {products.map((product, index) => (
                        <option key={index} value={product.id}>{product.name}</option>
                    ))}
                </select>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Select a Type
                </label>
            </div>
            <div className="w-72">
                <div className="relative w-full min-w-[200px] h-10">
                    <input className="bg-white peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t- focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" name="price" onChange={handleAddInventoryForm} placeholder=" " type="text" value={inventory.price || 0} />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Price
                    </label>
                </div>
            </div>
            <button className="active:scale-95 active:translate-y-1 bg-emerald-700 px-5 py-2 rounded-full shadow text-2xl text-white transition" onClick={handleAddInventory}>Add</button>
        </div>
    )
}