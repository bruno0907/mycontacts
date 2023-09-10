import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Trash, Edit } from '../../../../../../assets/icons';
import { Modal } from '../../../../../../components/Modal';
import {
  ContactActions,
  ContactDetails,
  Container,
} from './styles';

import { useContactItem } from './useContactItem';

export function ContactItem({ contact, onDeleteContact }) {
  const {
    isLoading,
    isOpen,
    setIsOpen,
    handleOpenModal,
    handleConfirmDeleteContact,
  } = useContactItem(contact.id, onDeleteContact);

  return (
    <>
      <Container>
        <ContactDetails>
          <div>
            <strong>{contact.name}</strong>
            {contact.category.name && <small>{contact.category.name}</small>}

          </div>
          <span>{contact.email}</span>
          <span>{contact.phone ?? null}</span>
        </ContactDetails>
        <ContactActions>
          <Link to={`/edit/${contact.id}`}>
            <img src={Edit} alt="Editar contato" />
          </Link>
          <button type="button" onClick={handleOpenModal}>
            <img src={Trash} alt="Excluir contato" />
          </button>
        </ContactActions>
      </Container>

      <Modal
        danger
        title={`Tem certeza que deseja remover o contato "${contact.name}"?`}
        body="Cuidado! Esta ação não poderá ser desfeita."
        isOpen={isOpen}
        onOpen={setIsOpen}
        confirmLabel="Remover!"
        onConfirm={handleConfirmDeleteContact}
        isLoading={isLoading}
      >
        <div>
          <p>Cuidado, esta ação poderá ser desfeita!</p>
        </div>
      </Modal>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({ name: PropTypes.string }),
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
