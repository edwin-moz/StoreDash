import React, { useEffect, useState } from "react"
import { addProduct, deleteProduct, editProduct, getProducts } from "../../managers/products"
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
export const Products = ({ types }) => {
    // state
    const [product, setProduct] = useState({})
    const [productToEdit, setProductToEdit] = useState({})
    const [products, setProducts] = useState([])
    // handle function to get products
    const handleGetProducts = () => {
        getProducts().then(setProducts)
    }
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
    const handleAddProduct = () => {
        addProduct(product).then(() => {
            setProduct({})
            handleGetProducts()
        })
    }
    // handle function to edit product
    const handleProductToEdit = (product) => {
        setProductToEdit(product)
    }
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
            setProductToEdit({})
            handleGetProducts()
        })
    }
    // handle function to delete product
    const handleDeleteProduct = (productId) => {
        deleteProduct(productId).then(() => {
            handleGetProducts()
        })
    }
    useEffect(() => {
        handleGetProducts()
    }, [])
    return (
        <div className="gap-5 grid grid-cols-[2fr,1fr] mx-10 my-10">
            {/* <div className="bg-green-500">
                <p>edit a product</p>
            </div> */}
            {/* <div className="bg-blue-500">
                <p>delete a product</p>
            </div> */}
            <div className="grid grid-rows-1">
                {/* <p>list</p> */}
                <div className="grid grid-cols-7 row-span-2 text-center">
                    <p className="border rounded-ss-lg">Image</p>
                    <p className="border">Name</p>
                    <p className="border">Avail.</p>
                    <p className="border">Url</p>
                    <p className="border">Type</p>
                    <p className="border"></p>
                    <p className="border rounded-tr-lg"></p>
                </div>
                <ul className="border-b border-x gap-1 grid grid-cols-7 h-[30rem] items-center overflow-y-scroll py-1 rounded-b-lg text-center">
                    {products.map((product, index) => (
                        <React.Fragment key={index}>
                            <img className="border-2 border-emerald-600 h-20 object-cover rounded-full w-20" src={product.imageUrl} alt="" />
                            <p className="text-start truncate">{product.name}</p>
                            <p className="">{product.available ? "Available" : "Not Available"}</p>
                            <p className="truncate">{product.imageUrl}</p>
                            <p className="">{types.find((type) => type.id === product.typeId)?.name}</p>
                            <div>
                                <button className="hover:border hover:border-emerald-600 hover:bg-emerald-600/20 px-2 py-2 rounded-full text-xl" onClick={() => handleProductToEdit(product)}>
                                    <FaRegEdit />
                                </button>
                            </div>
                            <div>
                                <button className="text-xl" onClick={() => handleDeleteProduct(product.id)}>
                                    <AiOutlineDelete />
                                </button>
                            </div>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
            <div className="gap-5 grid">
                <div className="border flex flex-col p-5 rounded-lg">
                    <div className="flex flex-wrap justify-between">
                        <p>Add</p>
                        <button className="bg-gray-500 mb-5 px-3 rounded-full text-white" onClick={() => setProduct({})}>Clear</button>
                    </div>
                    <div className="flex flex-col justify-center flex-grow gap-y-3">
                        <div className="flex flex-wrap gap-3">
                            <label>Image Url</label>
                            <input className="border flex flex-grow rounded text-center" name="imageUrl" onChange={handleAddProductForm} placeholder="Image url" type="text" value={product.imageUrl || ""} />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <label>Name</label>
                            <input className="border flex flex-grow rounded text-center" name="name" onChange={handleAddProductForm} placeholder="Name" type="text" value={product.name || ""} />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <label>Type</label>
                            <select className="border rounded text-center" name="typeId" onChange={handleAddProductForm} value={product.typeId || 0}>
                                <option value={0}>Select a type</option>
                                {types.map((type, index) => (
                                    <option key={index} value={type.id}>{type.name}</option>
                                ))}
                            </select>
                        </div>
                        <button className="bg-emerald-600 h-[3rem] rounded-full shadow-md text-2xl text-white" onClick={handleAddProduct}>Add</button>
                    </div>
                </div>
                <div className="border flex flex-col p-5 rounded-lg">
                    <div className="flex flex-wrap justify-between">
                        <p>Edit</p>
                        <button className="bg-gray-500 mb-5 px-3 rounded-full text-white" onClick={() => setProductToEdit({})}>Clear</button>
                    </div>
                    <div className="flex flex-col justify-center flex-grow gap-y-3">
                        <div className="flex flex-wrap gap-3">
                            <label>Availability</label>
                            <input checked={productToEdit.available} name="available" onChange={handleEditProductForm} type="checkbox" />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <label>Image Url</label>
                            <input className="border flex flex-grow rounded-md text-center" defaultValue={productToEdit.imageUrl} name="imageUrl" onChange={handleEditProductForm} placeholder="product image" type="text" value={productToEdit.imageUrl || ""} />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <label>Name</label>
                            <input className="border flex flex-grow rounded-md text-center" defaultValue={productToEdit.name} name="name" onChange={handleEditProductForm} placeholder="product name" type="text" value={productToEdit.name || ""} />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <label>Type</label>
                            <select className="border rounded-md text-center" defaultValue={productToEdit.typeId} name="typeId" onChange={handleEditProductForm} value={productToEdit.typeId || 0}>
                                {productToEdit.typeId ? (
                                    <option value={productToEdit.typeId}>{types.find((type) => type.id === productToEdit.typeId)?.name}</option>
                                ) : (
                                    <option defaultValue={0}>Select a Type</option>
                                )}
                                {types.map((type, index) => (
                                    <option key={index} value={type.id}>{type.name}</option>
                                ))}
                            </select>
                        </div>
                        <button className="bg-emerald-600 h-[3rem] rounded-full shadow-md text-2xl text-white" onClick={handleEditProduct}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}