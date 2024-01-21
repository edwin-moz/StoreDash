import { getDistributors } from "../managers/distributors"
import { useEffect, useState } from "react"
import { FaRegStar, FaStar } from "react-icons/fa";
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
        <ul className="flex flex-wrap">
            {distributors.map((distributor) => (
                <li className="border flex">
                    <div>
                        <div>
                            <p className="hover:underline text-blue-500">
                                <Link to={`${distributor.id}`}>
                                    {distributor.name}
                                </Link>
                            </p>
                        </div>
                        <div>
                            <p>
                                {distributor.city}, {distributor.state}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            <FaRegStar />
                        </p>
                        <p className="text-yellow-300">
                            <FaStar />
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}