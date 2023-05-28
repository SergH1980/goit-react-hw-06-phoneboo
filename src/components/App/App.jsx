import React from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from '../GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';

import { AppStyle } from './App.styled';

import ContactForm from '../ContactForm/Form';
import ContactList from '../ContactList/ContactList';
import Section from '../Section/Section';
import ContactFilter from '../ContactFilter/ContactFilter';

export default function App() {
  // const [contacts, setContacts] = useState(
  //   []
  //   // () => {
  //   // // check if LS has contacts
  //   // const savedContacts = localStorage.getItem(`contacts`);
  //   // const parsedContacts = JSON.parse(savedContacts);

  //   // if (!savedContacts) {
  //   //   return [];
  //   // } else {
  //   //   return parsedContacts;
  //   // }
  //   // }
  // );
  // const [filter, setFilter] = useState(``);

  // adding contacts to LS
  // useEffect(() => {
  //   localStorage.setItem(`contacts`, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <AppStyle>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <ContactFilter />
        <ContactList contacts={`getVisibleContacts()`} />
      </Section>
      <ToastContainer />
      <GlobalStyle />
    </AppStyle>
  );
}
