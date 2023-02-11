import styled from "styled-components"
import Bags from "../components/Bags"
import Sidebar from "../components/Sidebar"
import minus from "../assets/minus.svg"
import plus from "../assets/plus.svg"
import { useState } from "react"

const BagItem = () => {
    const bagElements = JSON.parse(localStorage.getItem("bags"))
    const [quantity,  setQuantity] = useState(1)

    return (
        <Wrapper>

            <Sidebar elements={JSON.parse(localStorage.getItem("bags"))} />

            <Containers>

                <h1>Check your Bag Items</h1>
                {
                    bagElements?.map((bagElements) => {
                        return (
                            <div className="Bag-Item">
                                <div className="Image">
                                    <img src={bagElements.image} alt={bagElements.title} />
                                </div>
            
                                <div className="product-info">
                                    <h2>{bagElements.title}</h2>
                                    <b>{bagElements.model}</b>
                                    <p>{bagElements.description}</p>
                                
                                    <div className="Price-quantity">
                                        <h3>{bagElements.price}$ x {quantity} = {bagElements.price * quantity} $</h3>
            
                                        <div className="quantity">
                                            <img onClick={() => setQuantity(quantity - 1)} style={{display: quantity <= 1 ? "none" : "inline-block"}} src={minus} alt="minus-icon" />
                                            <p>{quantity}</p>
                                            <img onClick={() => setQuantity(quantity + 1)} src={plus} alt="plus-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }

            </Containers>

            <Bags elements={JSON.parse(localStorage.getItem("bags"))}/>

        </Wrapper>
    )
}
export default BagItem;

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
const Containers = styled.div`
    padding: 20px;
    overflow-y: auto;

    @media (max-width: 600px) {
       padding: 0;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 600px) {
       h1 {
           font-size: 25px;
           text-align: center;
       }
    }
    
    
    .Bag-Item {
        display: flex;
        gap: 30px;
        width: 100%;
        height: auto;
        padding: 20px;
        background-color: white;
        box-shadow: 0px 4px 16px rgb(26 31 22 / 15%);
        border-radius: 21px;
        margin-top: 24px;

        @media (max-width: 600px) {
            flex-direction: column;
            height: auto;
        }

        .Image {
            width: 35%;
            height: 100%;

            @media (max-width: 600px) {
                width: 100%;
            }


            img {
                width: 100%;
                height: 100%;
                object-fit: contain;    
            }
        }

        .product-info {
            width: 65%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;

            @media (max-width: 600px) {
                width: 100%;
            }

            h2 {
                margin-top: 20px;
                font-weight: 400;
                font-size: 31.25px;
                line-height: 38px;
                color: #1A1F16;
            }

            b {
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                color: #60695C;
            }

            p {
                font-weight: 400;
                font-size: 18px;
                line-height: 24px;
                letter-spacing: -0.02em;
                color: #1A1F16;
            }
        }

        .Price-quantity {
            display: flex;
            align-items: center;
            justify-content: space-between;

            h3 {
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                color: #1A1F16;
            }

            .quantity {
                display: flex;
                align-items: center;
                gap: 5px;
                img {
                    cursor: pointer;
                }
            }
        }
    }
`
