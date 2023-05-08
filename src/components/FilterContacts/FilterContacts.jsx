import css from '../../components/FilterContacts/FilterContacts.module.css';

export const FilterContacts = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name <br />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a name to search for"
        className={css.input}
      />
    </label>
  );
};
