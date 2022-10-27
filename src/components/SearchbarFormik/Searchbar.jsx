 import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {
    Header,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput
  
} from 'components/Searchbar/SearchbarStyled';

let shema = yup.object().shape({
    query: yup.string().required(),
})

 const  initialValues={
    query:''
 }

export const LoginForm = () => {
  const hendleSubmit =(values,{resetForm})=>{
        console.log(values);
     this.prop.onSbmit()
      resetForm()
}
    return (
        < Header>
          <Formik initialValues={initialValues}  validationSchema={shema} onSubmit={hendleSubmit}>
             <SearchForm>
               <SearchFormButton type="submit" >
                  <SearchFormButtonLabel >Search</SearchFormButtonLabel>
                    </SearchFormButton>
                 <SearchFormInput
                 type="text"
                 name="query"
                 autoComplete="off"
                 autoFocus
                  placeholder="Search images and photos"
                    />
                <ErrorMessage component="div" name="query" />
                   
                  </SearchForm>
              </Formik>
          </ Header>
    )
 }
