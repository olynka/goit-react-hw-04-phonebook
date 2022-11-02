import styled from "styled-components";

export const Form = styled.form`
display:flex;
flex-direction: column;
align-items: center;
width: 400px;
margin-right: auto;
margin-left: auto;
padding: 20px; 
border-radius: 4px;
border: 1px solid  #337AB7;
margin-bottom:20px;

`
export const Label = styled.label`
margin-bottom:10px;
color:#337AB7;

`
export const Input =styled.input`
    width: 200px; 
padding: 8px;
background-color: #f5f5f5;
border: 1px solid  #337AB7;
border-radius: 8px;
margin-left:20px;

`
export const Button = styled.button`
border-radius:5px;
background-color: #337AB7;
cursor: pointer;
width :100px;



&:hover{
  background-color: #dfdfdf;
}

`

