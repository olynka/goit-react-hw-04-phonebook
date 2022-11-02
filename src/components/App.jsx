import { Component } from 'react';
  import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import ContactForm from './Form/Form';
import Filter from './filter/filter';
import { Block, Totle } from './AppStyled';
import Notification from './Notification/Notification';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]


export class App extends Component  {
state = {
  contacts: defaultContacts,
    filter: '',
  }


  componentDidUpdate(prevProps, preyState) {

    if (this.state.contacts !== preyState.contacts) {
      console.log('обновилося');
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem( 'contacts'));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

   duplicateContact = (name) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    return contacts.find(item => item.name.toLowerCase() === normalizedName);
  }

 deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  addContact = ({ name, number }) => {  
  
    
    if (this.duplicateContact(name)) {
      return alert(`"${name}" is already in your Phonebook`);
    };

      const contact = {
      id: nanoid(4),
      name: name,
      number: number
    }

    this.setState(({contacts}) => ({
      contacts: [...contacts, contact]
    }));  
  }
  
  
 changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }
    
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
  
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  

  render() {
const { filter, contacts } = this.state;
    const addContact = this.addContact; 
    const deleteContact = this.deleteContact;
    const changeFilter = this.changeFilter;  
    const visibleContacts = this.getVisibleContacts();
   

  return (
    <>
      <Block>
        <Totle>Phonebook</Totle>
        <ContactForm onSubmit={addContact} />
        {contacts.length === 0?<Notification />:<><Filter value={filter} onChange={changeFilter} />
      <ContactList items={visibleContacts} onDeleteContact={deleteContact} /></>}
      
        {/* <Filter value={filter} onChange={changeFilter} />
      <ContactList items={visibleContacts} onDeleteContact={deleteContact} /> */}

     
</Block>
     </>
  )
}};













// export class App extends Component  { 
//   state = {
//      contacts: defaultContacts,
//     filter: ''
//   };
//   render() {
//  const { contacts } = this;
//     return (
//       <section>
//         <div>
//           <LoginForm/>
//           <ContactList list={contacts} />
//         </div>
//       </section>
      
//     );
//   }
// }

