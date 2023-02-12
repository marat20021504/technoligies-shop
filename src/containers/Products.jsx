import { useState } from "react"
import styled from "styled-components"
import { Product } from "../components/Product"
import API from "../utils/API"

const Products = ({elements, addBag}) => {
    const [search, setSearch] = useState('')
    const [product, SetProducts] = useState([], API)

    const filterResult = (catItem) => {
        const result = API.filter((curData) => {
            return curData.category === catItem;
        })
        SetProducts(result)
    }
    
    return (
        <Wrapper>

            <div className="Flex">
                <form>
                    <label htmlFor="Search Item">Search Item</label>
                    <input onChange={(e) => setSearch(e.target.value)} placeholder={"Apple Watch, Samsung S21, Macbook Pro, ..."} type="text" />
                </form>

                <select name="Categories" className="Categories" id="">
                    <option onChange={() => SetProducts(API)} value="All Products">All Products</option>
                    <option onChange={(e) => console.log(e.target.value)} value="Men's clothing">Men's clothing</option>
                    <option onChange={() => filterResult('jewelery')} value="Jewelery">Jewelery</option>
                    <option onChange={() => filterResult('electronics')} value="Electronics">Electronics</option>
                    <option onChange={() => filterResult("women's clothing")} value="Women's clothing">Women's clothing</option>
                </select>
            </div>

            <div className="Products_grid">
                {
                    
                    elements.filter((e) => {
                        if (search == '') {
                            return e
                        } else if (e.title.toLowerCase().includes(search.toLowerCase())) {
                           return e
                        }
                    }).map((item, index) => {
                        return <Product addBag= {addBag}  data = {item} key={index} />
                    })
                }
            </div>
        </Wrapper>
    )
}

export default Products

const Wrapper = styled.div`
    height: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    .Flex {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        form {
            display: flex;
            flex-direction: column;
            
            label {
                font-family: Arial, Helvetica, sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: -0.02em;
                color: #60695C;
                margin-left: 0px;
            }
    
            input {
                width: 500px;
                height: 55px;
                background: #FFFFFF;
                box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
                border-radius: 13px;
                border: none;
                outline: none;
                padding: 16px 24px;
                margin-top: 8px;

                @media (max-width: 600px) {
                    width: 150px;
                }
            }
        }
        .Categories {
            width: 200px;
            height: 55px;
            background: #FFFFFF;
            box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
            border-radius: 13px;
            border: none;
            outline: none;
            padding: 16px 24px;
            margin-top: 24px;

             @media (max-width: 600px) {
                    width: 150px;
                }
        }
    }

    .Products_grid {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(223px, 1fr));
        grid-auto-flow: dense;
        
        
        @media (max-width: 600px) {
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
            border-right: 0;
        }
    }
`


