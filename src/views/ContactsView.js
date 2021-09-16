
import Filter from '../components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';

export default function ContactsView() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts </h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
