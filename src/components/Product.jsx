import styled from "styled-components"
import { Link } from "react-router-dom"
import BagIcon from "../assets/Button.svg"

export const Product = ({data, addBag}) => {
    const bagElements = JSON.parse(localStorage.getItem("bags"))?.map(({id}) => id)
    console.log(data.id);
    return (
        <Wrapper category={data.category}> 

            <Link to={`/products/${data.id}`}>
                <div className="Product-image">
                    <img src={data.image} alt={data.title} />
                </div>            
            </Link>

            <div className="Product-info">
                
                <p className="info-title">{data.title}</p>
                <p className="info-model">{data.model}</p>

                <div className="action">
                    <p className="info-price">Price: {data.price} $</p>
                    <img 
                        src={BagIcon} 
                        onClick = {() => addBag(data)}  
                        alt=''
                        style={{display: bagElements?.includes(data.id) ? "none" : "inline-block"}}
                    />
                </div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    grid-column: ${({category}) => 
        category === "electronics" ? "span 2" : "span 1" && category === "jewelery" ? "span 2" : "span 1" 
    };

    @media (max-width: 600px) {
        grid-column: ${({category}) => 
            category === "electronics" ? "span 1" : "span 0" && category === "jewelery" ? "span 1" : "span 0" 
        };
    }

    padding: 16px;

    .Product-image {
        height: 232px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 22px;
        padding: 10px;
        
        img {
            height: 100%;
            
            @media (max-width: 600px) {
               object-fit: contain;
                width: ${({category}) => 
                    category === "electronics" ? "100%" : "span 1" && category === "jewelery" ? "100%" : "span 1"  
                };
           }

        }
    }

    .Product-info {
        padding: 8px;

        .info-title {
            width: 100%;
            height: 100px;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: #1A1F16;
        }

        .info-model {
            margin-top: 8px;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: -0.02em;
            color: #60695C;
        }

        .action {
            padding: 13px 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .info-price {
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                color: #1A1F16;
            }

            img {
                cursor: pointer;
            }
        }
    }
`