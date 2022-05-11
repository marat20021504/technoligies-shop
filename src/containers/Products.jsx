import styled from "styled-components"
import { Product } from "../components/Product"

const Products = ({elements, addBag}) => {

    return (
        <ProductsGrid>
            {
                elements.map((item, index) => {
                    return <Product addBag= {addBag}  data = {item} key={index} />
                })
            }
        </ProductsGrid>
    )
}

export default Products

const ProductsGrid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223px, 1fr));
    grid-auto-flow: dense;
    
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        border-right: 0;
    }
`

