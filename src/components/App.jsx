import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { FilterContacts } from './FilterContacts/FilterContacts';

import css from '../components/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { addContact, removeContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

export function App() {
  const filter = useSelector(state => state.contacts.filters);
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removeContact());
  };

  // const deleteContact = contactId => {
  //   setContacts(prev => prev.filter(contact => contact.id !== contactId));
  // };

  // const formSubmitHandler = data => {
  //   // const contact = {
  //   //   id: nanoid(),
  //   //   name: data.name,
  //   //   number: data.number,
  //   // };
  //   console.log(data.name);
  //   contacts.find(
  //     contact => contact.name.toLowerCase() === data.name.toLowerCase()
  //   )
  //     ? alert(`${data.name} is alredy in contacts`)
  //     : dispatch(
  //         addContact({
  //           id: nanoid(),
  //           name: data.name,
  //           number: data.number,
  //         })
  //       );

  // prev => {
  //   return [
  //     ...prev,
  //     {
  //       id: nanoid(),
  //       name: data.name,
  //       number: data.number,
  //     },
  //   ];
  // };
  // };

  const changeFilter = e => {
    dispatch(getFilter(e.currentTarget.value));
  };
  // const filteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.title__contacts}>Contacts</h2>
      <FilterContacts value={filter} onChange={changeFilter} />
      <ContactsList
        // contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
