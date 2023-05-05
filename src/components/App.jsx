import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { FilterContacts } from './FilterContacts/FilterContacts';

import css from '../components/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { addContact, removeContact } from 'redux/contactsSlice';

export function App() {
  const filter = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removeContact());
  };

  // const deleteContact = contactId => {
  //   setContacts(prev => prev.filter(contact => contact.id !== contactId));
  // };

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is alredy in contacts`)
      : dispatch(addContact(contact));

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
  };

  const changeFilter = e => {
    dispatch(getFilter(e.currentTarget.value));
    // setFilter(e.target.value);
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
      <Form onSubmit={formSubmitHandler} />
      <h2 className={css.title__contacts}>Contacts</h2>
      <FilterContacts value={filter} onChange={changeFilter} />
      <ContactsList
        // contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
