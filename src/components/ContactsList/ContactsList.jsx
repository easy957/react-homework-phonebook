import PropTypes from 'prop-types';

import Contact from './Contact';
import { useGetContactsQuery } from 'redux/phonebook/phonebook-slice';

export default function ContactsList({ filter }) {
  const { data: contacts } = useGetContactsQuery();

  const getVisibleContacts = () => {
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts?.length > 0 &&
        visibleContacts.map(({ id, name, phone }) => {
          return <Contact key={id} id={id} name={name} number={phone} />;
        })}
      {visibleContacts?.length === 0 && (
        <li>
          <p>No contacts found... :(</p>
        </li>
      )}
    </ul>
  );
}

ContactsList.propTypes = {
  filter: PropTypes.string,
};
