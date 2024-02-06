import { getDistributors } from "../managers/distributors"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// component
export const Distributors = () => {
    // state
    const [distributors, setDistributors] = useState([])
    // handle function to get get distributors
    const handleGetDistributors = () => {
        getDistributors().then(setDistributors)
    }
    // useEffect
    useEffect(() => { handleGetDistributors() }, [])
    return (
        <div className="flex flex-col min-h-[87vh] p-10">
            <div className="">
                <h1
                    className="font-bold text-3xl text-gray-950 tracking-wide">Distributors</h1>
            </div>
            <div className="border-t mb-10 mt-10"></div>
            <ul className="flex flex-wrap gap-5 pb-10">
                {distributors.map((distributor, index) => (
                    <li className="bg-white border p-5 rounded-lg shadow-md min-w-[20rem]" key={index}>
                        <Link className="font-semibold hover:underline text-blue-600" to={`${distributor.id}`}>{distributor.name}</Link>
                        <p className="font-medium text-gray-500">{distributor.city}, {distributor.state}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}