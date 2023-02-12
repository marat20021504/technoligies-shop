import  styled  from "styled-components"
import { useEffect, useState } from "react"
import Sidebar from '../components/Sidebar'
import Products from '../containers/Products'
import Bags from '../components/Bags'
import API from "../utils/API.jsx"
import LoadingSpinner from "../components/Loading"

export const Home = () => {
    const [products, setProducts] = useState([])
    const [bag, setBag] = useState(JSON.parse(localStorage.getItem("bags")) || [])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setInterval(() => {
            setLoading(false)
        }, 5000)
        API.get("/products")
            .then(res => {
                setProducts(res.data)
            })
    },[])

    const addBag = (data) => {
        setBag([...bag, data])
        localStorage.setItem("bags", JSON.stringify([...bag, data]))
    }

    return (
        <Wrapper>

            <Sidebar elements={bag} />
            
            {
                loading ? <LoadingSpinner /> :
                <Products loading={loading} elements = {products} addBag ={addBag} />
            }

            <Bags elements={bag} />

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 72px 1fr 300px;
    gap: 20px;
    padding: 20px;
    height: 100vh;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`