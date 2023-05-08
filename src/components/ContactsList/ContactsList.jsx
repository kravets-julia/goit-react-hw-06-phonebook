import { ContactsListitem } from 'components/ContactsListitem/ContactsListitem';
import css from '../../components/ContactsList/ContactsList.module.css';
import { useSelector } from 'react-redux';

export const ContactsList = ({ onDeleteContact }) => {
  const filter = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts);

  const filteredContacts = () => {
    // const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.contactsList__box}>
      <ul>
        {filteredContacts().map(contact => (
          <li key={contact.id} className={css.item}>
            <ContactsListitem name={contact.name} number={contact.number} />

            <button
              // onClick={() => dispatch(removeContact(contact.id))}
              onClick={() => onDeleteContact(contact.id)}
              className={css.btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
