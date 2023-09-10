import { memo } from 'react';
import PropTypes from 'prop-types';

import { ArrowDown, ArrowUp } from '../../../../assets/icons';

import { ContactItem } from './components/ContactItem';
import { Button } from '../../../../components/Button';

import { Container } from './styles';

function ContactsListComponent({
  onToggleOrder, orderBy, contacts, onDeleteContact,
}) {
  return (
    <Container>
      {contacts.length > 0 && (
        <Button variant="link" onClick={onToggleOrder}>
          <img src={orderBy !== 'asc' ? ArrowUp : ArrowDown} alt="Order contatos" />
          Nome
        </Button>

      )}
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </Container>
  );
}

ContactsListComponent.propTypes = {
  onToggleOrder: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export const ContactsList = memo(ContactsListComponent);
