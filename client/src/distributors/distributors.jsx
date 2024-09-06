import { getDistributors } from "../managers/distributors"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import H1 from "../components/h1"
import Card from "../components/card"
import Divider from "../components/divider"
import Container from "../components/container"

export const Distributors = () => {
    // state
    const [distributors, setDistributors] = useState([])
    // handle function to get get distributors
    const handleGetDistributors = async () => {
        const data = await getDistributors()

        setDistributors(data)
    }
    // useEffect
    useEffect(() => {
        handleGetDistributors()
    }, [])
    return (
        <Container>
            <H1>Distributors</H1>

            <Divider />

            <ul className="flex flex-wrap gap-5 pb-10">
                {distributors.map((distributor, index) => (
                    <Card key={index}>
                        <Link
                            className="font-semibold hover:underline text-blue-600"
                            to={`${distributor.id}`}
                        >
                            {distributor.name}
                        </Link>

                        <p className="font-medium text-gray-500">
                            {distributor.city}, {distributor.state}
                        </p>
                    </Card>
                ))}
            </ul>
        </Container>
    )
}
