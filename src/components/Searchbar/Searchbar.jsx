import React from "react";
 import  {  ToastContainer ,  toast  }  from  'react-toastify' ;
import 'react-toastify/dist/ReactToastify.css';
import {
    Header,
    Form,
    SearchFormButton,
    SearchFormInput
  
} from 'components/Searchbar/SearchbarStyled';
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchbarForm({onSubmit}) {
    const [searchName, setSearchName] = useState('');


    const handleInputChange = (e) => {
           setSearchName(e.currentTarget.value.toLowerCase().trim());
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if (searchName.trim() === '') {
            toast.error('Please enter a word to search for images!')
            return;
        }
    onSubmit(searchName);
          resetForm();
    }
    const resetForm = () => {
        setSearchName('')
            
    };


    return (
          <Header >
  <Form onSubmit={handleSubmit}>
    <SearchFormButton type="submit" >
    <FaSearch fontSize={18}/>
    </SearchFormButton>

    < SearchFormInput
     autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={searchName}
      onChange={handleInputChange}
      name='searchName'
          />
      <ToastContainer autoClose={3000} theme={'colored'}
        />
  </Form>
</Header>
    )
}