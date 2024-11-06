import { useState } from "react"
import { addProduct } from "../../managers/products"
import AdminFormHeading from "../../components/admin-form-heading"
import Input from "../../components/input"
export const NewProduct = ({ displayAddProductForm, setDisplayAddProductForm, handleGetProducts, types }) => {
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
                setDisplayAddProductForm(false)
                handleGetProducts()
            })
        }
    }
    // handle cancel display add product form
    const handleCancelDisplayProductForm = () => {
        setProduct({ typeId: 'defaultOption' })
        setDisplayAddProductForm(false)
    }
    // component return
    return (
        <div className={`${displayAddProductForm ? "block" : "hidden"} md:bg-white md:border md:flex md:flex-col p-5 md:rounded-lg md:shadow`}>
            <div className="flex flex-wrap justify-between mb-3">
                <AdminFormHeading formTitle="Add a product" onClick={() => setProduct({})} />
            </div>
            <form className="flex flex-col justify-center gap-y-3">
                <div className="relative">
                    <Input inputName="name" inputStyle="inline" inputType="text" onChange={handleAddProductForm} required value={product.name || ""}>
                        * Name
                    </Input>
                </div>
                <div className="relative">
                    <Input inputName="imageUrl" inputStyle="inline" inputType="text" onChange={handleAddProductForm} required value={product.imageUrl || ""}>
                        * Image URL
                    </Input>
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
                <button className="button-secondary md:hidden text-2xl" onClick={handleCancelDisplayProductForm}>Cancel</button>
                <button className="button-primary text-2xl" onClick={handleAddProduct}>Add</button>
            </form>
        </div>
    )
}
