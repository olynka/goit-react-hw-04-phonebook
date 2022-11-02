import React from "react";
import { Formik,Form,Field} from 'formik';

const InitialValues = {
  login: '',
 number:'',

}
 
export const LoginForm =()=>{
  const hendleSubmit =(values,{resetForm})=>{
    console.log(values);
     resetForm()
    }
    return (
     <Formik initialValues={InitialValues}
   onSubmit={hendleSubmit}>
     <Form>
          <label htmlFor="login">
            Name
     <Field
    type="text"
    name="login"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  />
         
        </label>
        <label htmlFor="number">
           Contacts
         <Field
  type="number"
  name="number"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
        </label>
        <button type="submit">ok</button>
        </Form>
       </Formik>
    );
  }
