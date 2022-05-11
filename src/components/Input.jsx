import styled from "styled-components";

export const Input = styled.input`
    display: block;
    margin: auto;
    width: 596px;
    margin-bottom: 15px;
    resize: none;
    outline: none;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
    border-radius: 13px;
    padding: 10px 24px;
    font-size: 16px;
    color: #585858;

    @media (max-width: 600px) {
        width: 100%;
    }
`