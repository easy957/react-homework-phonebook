import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as phonebookOperations from 'redux/phonebook/phonebook-operations';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';
import Contact from './Contact';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(phonebookOperations.fetchContacts()), [dispatch]);

  const onDelete = id => {
    dispatch(phonebookOperations.deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={phone}
            onDelete={() => onDelete(id)}
          />
        );
      })}
    </ul>
  );
}
