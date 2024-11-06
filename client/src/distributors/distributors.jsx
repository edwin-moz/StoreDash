import { getDistributors } from "../managers/distributors"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import H1 from "../components/h1"
import Card from "../components/card"
import Divider from "../components/divider"
import Container from "../components/container"
import Input from "../components/input"

export const Distributors = () => {
    // state
    const [distributors, setDistributors] = useState([])
    const [searchText, setSearchText] = useState("")
    // derived state
    const filteredDistributors = distributors.filter((distributor) => {
        return distributor.name.toLowerCase().includes(searchText.toLowerCase())
    })
    // handle function to get get distributors
    const handleGetDistributors = async () => {
        const data = await getDistributors()

        setDistributors(data)
    }
    const handleSearchTextChange = (event) => setSearchText(event.target.value)
    // useEffect
    useEffect(() => {
        handleGetDistributors()
    }, [])
    return (
        <Container>
            <H1>Distributors</H1>

            <Divider />

            <div className="pb-10">
                <Input inputStyle="inline" inputType="search" onChange={handleSearchTextChange} placeholder="Search distributors" value={searchText}></Input>
            </div>

            <ul className="flex flex-wrap gap-5 pb-10">
                {filteredDistributors.map((distributor, index) => (
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
