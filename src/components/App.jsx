import React, { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import { Contacts } from 'components/Contacts/Contacts';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

import { StyledContainer } from 'components/AppStyle';

import { formatPhoneNumber, formatName } from '../helpers/script';
const storageContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? storageContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactID => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactID)
    );
  };
  const formSubmitHandler = data => {
    const dataName = data.name;

    if (
      contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() === dataName.toLocaleLowerCase()
      )
    ) {
      return alert(`${dataName} is already in contacts`);
    }
    setContacts(prevContacts => [
      ...prevContacts,
      {
        id: nanoid(),
        name: dataName.split(' ').map(formatName).join(' '),
        number: formatPhoneNumber(data.number),
      },
    ]);
  };

  const chageFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const selectedByFilter = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <StyledContainer>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChageFilter={chageFilter} />
        <Contacts contacts={selectedByFilter} onDeleteContact={deleteContact} />
      </Section>
    </StyledContainer>
  );
};
