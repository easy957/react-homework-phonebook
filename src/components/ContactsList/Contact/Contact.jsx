import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/phonebook/phonebook-slice';
import s from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li className={s.item}>
      <p>
        {name}: {number}
      </p>
      <button
        disabled={isLoading}
        className={s.button}
        onClick={() => deleteContact(id)}
        type="button"
      >
        {isLoading ? 'Deleting' : 'Delete'}
      </button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
