import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Bags = ({elements}) => {
	console.log(elements);
  return (
    <BagContainer>

      	<b className="title">Bag</b>
        {
          elements?.map((item , index)=> <BagItem key={index} >
			<Link to={`/products/${item.id}`}>
            	<img src={item?.image} alt="" />
			</Link>
          </BagItem>)
        }

    </BagContainer>
  )
}

export default Bags;

export const BagContainer = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
	grid-auto-rows: 80px;
	gap: 16px;
	position: relative;
	padding-top: 50px;
	padding-left: 20px;
	border-left: 5px solid rgb(29,45,91);
	
	@media (max-width: 600px) {
		display: none;
		border-left:0;
		padding: 0;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		grid-auto-rows: 80px;
  	}

  	.title {
	  	position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%);
		font-weight: 500;
		font-size: 30px;
		color: #1A1F16;
  	}


`

const BagItem = styled.div`
	background: #FFFFFF;
	border-radius: 12px;
	padding: 15px;

	display: flex;
	align-items: center;
	justify-content: center;

  	

  	img {
		max-width: 100%;
		height: 100%;
		object-fit: cover;
		
		@media (max-width: 600px) {
			width: 100%;
		}
    }
`