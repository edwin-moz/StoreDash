import { getDistributors } from "../managers/distributors"
import { useEffect, useState } from "react"
// import { FaRegStar, FaStar } from "react-icons/fa";
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
        <div>
            <div>
                <div className="flex items-center gap-5 p-10">
                    <h1 className="font-bold text-3xl tracking-wide">Distributors</h1>

                </div>
            </div>
            <ul className="flex flex-wrap gap-5 px-10 pb-10">
                {distributors.map((distributor) => (
                    <li className="border p-5 rounded-md drop-shadow-sm w-[20rem]">
                        <div>
                            <div>
                                <p>
                                    <Link className="font-semibold hover:underline text-blue-700" to={`${distributor.id}`}>
                                        {distributor.name}
                                    </Link>
                                </p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-500">
                                    {distributor.city}, {distributor.state}
                                </p>
                            </div>
                        </div>
                        {/* <div>
                            <p>
                                <FaRegStar />
                            </p>
                            <p className="text-yellow-300">
                                <FaStar />
                            </p>
                        </div> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}