import React from 'react';
import {
  StyledList,
  StyledListItem,
  StyledListItemText,
  StyledDeletButton,
} from 'components/Contacts/ContactsStyle';
export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => {
        return (
          <StyledListItem key={id}>
            <StyledListItemText>
              {name}: {number}
            </StyledListItemText>
            <StyledDeletButton
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </StyledDeletButton>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};
