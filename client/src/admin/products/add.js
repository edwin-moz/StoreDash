import { useState } from "react"
import { addProduct } from "../../managers/products"
export const NewProduct = ({ handleGetProducts, types }) => {
    // state
    const [product, setProduct] = useState({ typeId: 'defaultOption' })
    // handle function for add product form
    const handleAddProductForm = (event) => {
        const copy = { ...product }
        const { name, value } = event.target
        if (name === "imageUrl") {
            copy.imageUrl = value
            setProduct(copy)
        } else if (name === "name") {
            copy.name = value
            setProduct(copy)
        } else if (name === "typeId") {
            copy.typeId = value * 1
            setProduct(copy)
        }
    }
    // handle function to add product
    const handleAddProduct = (event) => {
        event.preventDefault()
        if (product.typeId < 1 || typeof product.typeId === 'string') {
            window.alert("please select from one of the options")
        } else {
            addProduct(product).then(() => {
                setProduct({ typeId: 'defaultOption' })
                handleGetProducts()
            })
        }
    }
    // component return
    return (
        <div className="bg-white border flex flex-col p-5 rounded-lg shadow">
            <div className="flex flex-wrap justify-between mb-3">
                <p className="font-semibold text-xl">Add product</p>
                <button className="border border-emerald-600 h-[2rem] hover:bg-emerald-700/20 px-5 rounded-full text-emerald-800 transition" onClick={() => setProduct({})}>Clear fields</button>
            </div>
            <form className="flex flex-col justify-center gap-y-3">
                <div className="relative">
                    <input className="input-layout peer" name="name" onChange={handleAddProductForm} required type="text" value={product.name || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Name</label>
                </div>
                <div className="relative">
                    <input className="input-layout peer w-full" name="imageUrl" onChange={handleAddProductForm} required type="text" value={product.imageUrl || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Image Url</label>
                </div>
                <div className="relative">
                    <select className="input-layout peer w-full" name="typeId" onChange={handleAddProductForm} required type="text" value={product.typeId || ""}>
                        <option value={0}>Choose a type</option>
                        {types.map((type, index) => (
                            <option key={index} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                    <label className="label-layout peer-focus:text-gray-950">* Type</label>
                </div>
                <button className="active:scale-95 active:translate-y-1 bg-emerald-700 h-[3rem] rounded-full shadow-md text-2xl text-white transition" onClick={handleAddProduct}>Add</button>
            </form>
        </div>
    )
}