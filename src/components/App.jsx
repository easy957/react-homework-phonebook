import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';
import { useSelector } from 'react-redux';
import { getLoading } from 'redux/phonebook/phonebook-selectors';

export function App() {
  const isLoading = useSelector(getLoading);

  return (
    <Container>
      <h1>PhoneBook</h1>
      <ContactForm />

      <h2>Contacts {isLoading && <span>loading...</span>}</h2>

      <Filter />
      <ContactsList />
    </Container>
  );
}
