import React from "react";
import { nanoid } from "nanoid";
import {Label,Button,Input,Form} from "./FormStyled"

export default class ContactForm extends React.Component {
  
  state = {
    name: '',
    number: ''
    };
      nameInputId = nanoid(4);
    numberInputId = nanoid(4);
    
    handleInputChange = (e) => {
   const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
}
    
    handleSubmit = e => {
    e.preventDefault();
        this.props.onSubmit(this.state);
         this.resetForm();
  }

      resetForm = () => {
    this.setState({name: '', number: ''})
  }
    
 
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleInputChange}
            required />
        </Label>
        <Label htmlFor={this.numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleInputChange}
            required />
        </Label>
        <Button type="submit">Add contact</Button >
      </Form>
    );
  }
}