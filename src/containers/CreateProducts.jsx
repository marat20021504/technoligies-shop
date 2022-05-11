import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Input } from "../components/Input"
import API from "../utils/API"


const CreateProducts = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [model, setModel] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)


    const submit = () => {
        let form = new FormData()

        form.append("title", title)
        form.append("model", model)
        form.append("type", type)
        form.append("price", price)
        form.append("description", description)
        form.append("image", file)

        API.post("/product", form)
            .then(res => {
                navigate("/")
            })
    }

    return (
        <Wrapper>

            <Input onChange={({target}) => setTitle(target.value)} type="text" placeholder="Title" />

			<Input onChange={({target}) => setModel(target.value)} type="text" placeholder="Model" />

			<Input onChange={({target}) => setType(target.value)} type="text" placeholder="Type" />

			<Input onChange={({target}) => setPrice(target.value)} type="text" placeholder="Price" />

			<textarea onChange={({target}) => setDescription(target.value)} placeholder="Description" name="" id="" cols="30" rows="10"></textarea>

			<Input onChange={({target}) => setFile(target.files[0])} type="file" placeholder="Image"/>

			<button onClick={submit}>CREATE</button>

        </Wrapper>
    )
}

export default CreateProducts

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 100px;

	@media (max-width: 600px) {
		height: auto;
		padding-top: 0;
		padding: 20px;
	}
    textarea {
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
    }

    textarea {
      	height: 60px;
    }

    button {
		display: block;
		margin: auto;
		padding: 8px;
		border: none;
		background: #1A1F16;
		border-radius: 10px;
		color: white;
		letter-spacing: 1px;
		cursor: pointer;
    }

    

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: 'Select Image';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  .custom-file-input:hover::before {
    cursor: pointer;
    border-color: black;
  }
  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`