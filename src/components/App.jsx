import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { FilterContacts } from './FilterContacts/FilterContacts';

import css from '../components/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { removeContact } from 'redux/contactsSlice';

export function App() {
  const filter = useSelector(state => state.contacts.filters);
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removeContact());
  };

  const changeFilter = e => {
    dispatch(getFilter(e.currentTarget.value));
  };

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
