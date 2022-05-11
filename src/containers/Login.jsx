import React from 'react'
import  styled  from 'styled-components';
import { useNavigate } from 'react-router-dom';
import API from '../utils/API';

export default function Admin() {
    const navigate = useNavigate()
    const formSubmit = (e) => {
        e.preventDefault()
        
        API.post("/login", {
            username: e.target[0].value,
            password: e.target[1].value
        })
            .then(res => 
                {
                    localStorage.setItem("token", res.data.token)
                    navigate("/")
                })
    }

  return (
    <Wrapper>
        <form action="Login" onSubmit={formSubmit}>
            <label htmlFor="username">USERNAME</label>
            <input type="text" id='username' />
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id='password' />
            <button>LOG IN</button>
        </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    
    form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: white;
        border-radius: 15px;
        * {
            display: block;
        }

        @media (max-width: 600px) {
            width: 100%;
        }

        label {
            margin: 0 0 8px 8px;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: -0.02em;
            color: rgba(26, 31, 22, 0.5);
        }

        input {
            width: 596px;
            height: 56px;
            font-size: 18px;
            padding: 8px 16px;
            background: #FFFFFF;
            border: none;
            outline: none;
            box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
            border-radius: 13px;
            margin-bottom: 32px;
        }

        button {
            width: 596px;
            background: #1A1F16;
            border-radius: 10px;
            border: none;
            padding: 8px;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;

            color: #FFFFFF;
            cursor: pointer;
        }
    }

    @media (max-width: 600px) {
        form {
            padding: 20px;

            input {
                width: 100%;
            }
            
            button {
                width: 100%;
            }
        }
    }
`