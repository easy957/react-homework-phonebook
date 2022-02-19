// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import * as phonebookOperations from 'redux/phonebook/phonebook-operations';
// import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';
import Contact from './Contact';
import { useGetContactsQuery } from 'redux/phonebook/phonebook-slice';

export default function ContactsList() {
  const { data: contacts } = useGetContactsQuery();

  return (
    <ul>
      {contacts?.length > 0 &&
        contacts.map(({ id, name, phone }) => {
          return <Contact key={id} id={id} name={name} number={phone} />;
        })}
    </ul>
  );
}
