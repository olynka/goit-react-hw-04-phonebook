import styled from "styled-components";


export const UL = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
margin-right: auto;
margin-left: auto;
padding: 20px; 
border-radius: 4px;
border: 1px solid #337AB7;


`
export const Button = styled.button`
min-width: 70px;
padding: 4px;
cursor: pointer;
border-radius: 8px;
border: 2px solid #5b5b5b;
background-color: #337AB7;
&:hover{
  background-color: #dfdfdf;
}

`
export const List = styled.li`

display: flex;
justify-content: space-between;
align-items: center;
width: 380px;
margin-bottom: 16px;
&:last-child{
  margin-bottom: 0;
}

`
export const P = styled.p`
font-weight: bold;
color: #337AB7;

`
