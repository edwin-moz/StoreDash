import { editProduct } from "../../managers/products"
export const EditProduct = ({ displayEditProductForm, setDisplayEditProductForm, handleGetProducts, productToEdit, setProductToEdit, types }) => {
    // handle function for product edit form
    const handleEditProductForm = (event) => {
        const copy = { ...productToEdit }
        const { name, value } = event.target
        if (name === "available") {
            copy.available = !copy.available
            setProductToEdit(copy)
        } else if (name === "imageUrl") {
            copy.imageUrl = value
            setProductToEdit(copy)
        } else if (name === "name") {
            copy.name = value
            setProductToEdit(copy)
        } else if (name === "typeId") {
            copy.typeId = value * 1
            setProductToEdit(copy)
        }
    }
    // handle function to edit product
    const handleEditProduct = () => {
        editProduct(productToEdit).then(() => {
            setProductToEdit({ typeId: 'defaultOption' })
            handleGetProducts()
        })
    }
    // handle cancel display edit product form
    const handleCancelDisplayEditProductForm = () => {
        setDisplayEditProductForm(false)
    }
    return (
        <div className={`${displayEditProductForm ? "block" : "hidden"} md:bg-white md:border md:flex md:flex-col md:shadow md:rounded-lg p-5`}>
            <div className="flex flex-wrap justify-between mb-3">
                <p className="font-semibold text-xl">Edit a product</p>
                <button className="border border-emerald-600 h-[2rem] hover:bg-emerald-700/20 px-5 rounded-full text-emerald-800 transition" onClick={() => setProductToEdit({})}>Clear fields</button>
            </div>
            <div className="flex flex-col justify-center gap-y-3">
                {/* <div className="bg-gray-500 flex h-12 group items-center relative w-12">
                    <div className="absolute bg-red-500 flex group-active:left-2 h-5 items-center overflow-hidden rounded-full w-5 z-[999]">
                        <input className="absolute group-active:left-1 h-6 -left-[3px] peer w-6" type="checkbox" />
                    </div>
                </div>
                <label>* Available</label> */}
                <div className="relative">
                    <input className="input-layout md:w-auto peer w-full" name="name" onChange={handleEditProductForm} required type="text" value={productToEdit.name || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Name</label>
                </div>
                <div className="relative">
                    <input className="input-layout peer w-full" name="imageUrl" onChange={handleEditProductForm} required type="text" value={productToEdit.imageUrl || ""} />
                    <label className="label-layout peer-focus:text-gray-950">* Image Url</label>
                </div>
                <div className="relative">
                    <select className="input-layout peer w-full" name="typeId" onChange={handleEditProductForm} required type="text" value={productToEdit.typeId || ""}>
                        <option value={0}>Select a Type</option>
                        {types.map((type, index) => (
                            <option key={index} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                    <label className="label-layout peer-focus:text-gray-950">* Type</label>
                </div>
                <button className="button-secondary text-2xl" onClick={handleCancelDisplayEditProductForm}>Cancel</button>
                <button className="button-primary text-2xl" onClick={handleEditProduct}>Edit</button>
            </div>
        </div>
    )
}