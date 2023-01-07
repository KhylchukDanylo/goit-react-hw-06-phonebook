import GlobalStyles from './GlobalStyles';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {
  Phonebook,
  MainTitle,
  ContactTitle,
  TotalContactText,
} from './App.styled';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts);

  return (
    <Phonebook>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>

      <TotalContactText>Total contacts: {contacts.length}</TotalContactText>
      <Filter />
      <ContactList />

      <GlobalStyles />
    </Phonebook>
  );
}
