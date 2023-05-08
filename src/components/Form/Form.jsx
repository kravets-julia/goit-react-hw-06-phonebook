import { useDispatch, useSelector } from 'react-redux';
import css from '../../components/Form/Form.module.css';
import { useState } from 'react';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const data = {
    name,
    number,
  };

  function handleValue(e) {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  }

  const reset = () => {
    setName('');
    setNumber('');
  };

  function findName(newName) {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );
  }
  const formSubmitHandler = ({ name, number }) => {
    if (!findName(name)) {
      dispatch(
        addContact({
          id: nanoid(),
          name,
          number,
        })
      );
    } else {
      alert(`${name} is alredy in contacts`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmitHandler(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} name="addContact" className={css.form}>
        <label className={css.label}>
          Name <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleValue}
            className={css.input}
          />
        </label>

        <label className={css.label}>
          Number <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleValue}
            className={css.input}
          />
        </label>
        <button
          type="submit"
          name="addContact"
          onClick={handleSubmit}
          className={css.btn}
          disabled={!name || !number}
        >
          Add contact
        </button>
      </form>
    </>
  );
}
