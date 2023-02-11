import styled from "@emotion/styled"
import {ReactComponent as HomeIcon}  from "../assets/home.svg"
import {ReactComponent as BagIcon}  from "../assets/bag.svg"
import { Link, NavLink } from "react-router-dom"
import {ReactComponent as LoginIcon} from "../assets/Vector.svg"
import { useState } from "react"

const Sidebar = ({elements}) => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <Wrapper>

            <NavLink className="nav" to={"/"}>
                <HomeIcon />
            </NavLink>

            <NavLink className="nav" to={"/bag-item"}>
                <BagIcon />
            </NavLink>

            <NavLink className="nav" to={"/login"}>
                <LoginIcon />
            </NavLink>
            
            <NavLink to={"/products/create"}>
                <img className="Create" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Dcc3d5Lb1latb57H6sLv9iRIyIzrHNXDfw&usqp=CAU" alt="create-icon" />
            </NavLink>

            <img onClick={handleClick} className="Menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzkpdyDDK6lohsSqwxKaKpwZwv2WABcjfkw&usqp=CAU" alt="menu-icon" />

            <div className={click ? "nav-menu active-menu" : "nav-menu"}>
                {
                    elements?.map((item , index)=> <BagItems key={index} >
                        <Link to={`/products/${item.id}`}>
                            <img className="bags-image" src={item.image} alt="" />
                        </Link>
                    </BagItems>)
                }
            </div>
            
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    height: 100%;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    @media (max-width: 600px) {
        height: 72px;
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
    }

    .nav-menu {
        display: none;
    }

    .active-menu {
        display: none;
    }

    @media (max-width: 600px) {
        .nav-menu {
            position: absolute;
            left: -100%;
            transition: all .5s ease;
        }

        .active-menu {
            width: 280px;
            height: 100%;
            background: rgb(29,45,91);
            padding: 20px;
            left: 0;
            top: 0;
            transition: .10s ease-in-out;

            overflow-y: auto;
            &::-webkit-scrollbar {
                display: none;
            }
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 10px;
            grid-auto-rows: 100px;
        }
    }

    .Create {
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: 40px;
        left: 37px;

        @media (max-width: 600px) {
            position: relative;
            bottom: 7px;
            left: -7px;
        }
    }


    a {
        width: 40px;
        height: 40px;
        padding: 8px;
        border-radius: 10px;

        &.active {
            background: #1A1F16;

            svg path {
                fill: white;
            }
        }

        &:nth-of-type(3) {
            margin-left: 5px;

            @media (max-width: 600px) {
                position: relative;
                bottom: -5px;
            } 
        }
    }

    .Menu {
        cursor: pointer;
        position: relative;
        top: 0.5px;
        left: 1px;
        display: none;

        @media (max-width: 600px) {
            display: inline-block;
        }
    }
`

const BagItems = styled.div`
    background: #FFFFFF;
    border-radius: 12px;
    padding: 5px;

    .bags-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`