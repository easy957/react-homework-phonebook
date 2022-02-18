import { useState } from 'react';

import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import * as phonebookOperations from 'redux/phonebook/phonebook-operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  function handleChange({ target: { name, value } }) {
    name === 'name' ? setName(value) : setPhone(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(phonebookOperations.addContact({ name, phone }));
    setName('');
    setPhone('');
  }

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <div className={s.labelBox}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>
      <div className={s.labelBox}>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
