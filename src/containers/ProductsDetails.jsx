import styled from "styled-components"
import Bags from "../components/Bags"
import Sidebar from "../components/Sidebar"

import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import API from '../utils/API'

const ProductsDetails = () => {

    const { id } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()
  

    useEffect(() => {
        API.get(`/photos/${id}`)
            .then(res => setData(res.data))
    },[id])

    return (
        <Wrapper>

            <Sidebar elements={JSON.parse(localStorage.getItem("bags"))} />

            <Details>

                <div className="detail">

                    <header>
						<img onClick={() => navigate(-1)} src="https://iconarchive.com/download/i86010/graphicloads/100-flat-2/arrow-back.ico" alt="back-icon" />
                    </header>

                    <div className="main">

                        <div className="images" >
                            <img src={data.url } alt="" />
                            <img src={data.url } alt="" />
                            <img src={data.url } alt="" />
                        </div>
                        
                        <img className='bigImage' src={data.url } alt={data.title} />          
                        
                        <div className="content">

                            <b>{data.title}</b>
                            <p className='model'>{data.model}</p>

                            <p className='price'>{data.price}</p>
                            <p className='description'>{data.description}</p>

                        </div>

                    </div>

                </div>

            </Details>

            <Bags elements={JSON.parse(localStorage.getItem("bags"))}/>

         </Wrapper>
     )
    
}

 export default ProductsDetails 

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 72px 1fr 300px;
	gap: 20px;
	padding: 20px;
	height: 100vh;

	@media (max-width: 600px) {
        grid-template-columns: 1fr;
		height: 100vh;
    }
`
const Details = styled.div`
    padding: 20px;

    header {
        img {
			width: 30px;
			height: 30px;
            cursor: pointer;
        }
    }

	@media (max-width: 600px) {
		padding: 0;
		overflow-y: auto;

		&::-webkit-scrollbar {
			display: none;
		}
    }
	
    .detail {
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 100%;

		@media (max-width: 600px) {
			margin-top: 0;
		}
		
		.main {
			display: flex;
			align-items: center;
			gap: 16px;
			
			@media (max-width: 600px) {
				flex-direction: column;
			}
			.images {
				display: flex;
				flex-direction: column;
				gap: 16px;

				@media (max-width: 600px) {
					flex-direction: row;
				}

				img {
					height: 62px;
					width: 60px;
					object-fit: contain;
					padding: 8px;
					background-color: white;
					border-radius: 13px;
					cursor: pointer;
				}
			}

			.bigImage {
				width: 242px;
				height: 302px;
				object-fit: contain;
				padding: 8px;
				background-color: white;
				border-radius: 13px;
				margin-right: 32px;

				@media (max-width: 600px) {
					width: 100%;
					margin-right: 0;
				}
      		}

			.content {
				b {
				font-weight: 700;
				font-size: 44px;
				line-height: 50px;
				display: block;
				margin-bottom: 8px;
				color: #1A1F16;
			}

			.model {
				font-weight: 500;
				font-size: 24.25px;
				line-height: 38px;
				margin-bottom: 8px;

				color: rgba(26, 31, 22, 0.5);
			}

			.price {
				font-weight: 500;
				font-size: 24.25px;
				line-height: 38px;
				color: #1A1F16;
				margin-bottom: 8px;
			}

			.description {
				margin-left: 15px;
				font-weight: 400;
				font-size: 14px;
				line-height: 18px;

				color: #1A1F16;
			}
      	}

      	.starsContainer {
			display: flex;
			align-items: center;
			gap: 25px;

			p {
			font-weight: 400;
			font-size: 16px;
			line-height: 18px;
			letter-spacing: -0.02em;
			color: #12805D;
			}
      	}
    }}
`