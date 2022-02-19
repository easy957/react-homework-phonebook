import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/phonebook/phonebook-slice';

export function App() {
  const { isLoading } = useGetContactsQuery();
  const [, { isLoading: isAddingContact }] = useAddContactMutation({
    fixedCacheKey: 'shared-add-mutation',
  });

  return (
    <Container>
      <h1>PhoneBook</h1>
      <ContactForm />

      <h2>
        Contacts {(isLoading || isAddingContact) && <span>loading...</span>}
      </h2>

      <Filter />
      <ContactsList />
    </Container>
  );
}
