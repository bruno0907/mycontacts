import { useState } from 'react';
import ContactsService from '../../../../../../services/ContactsService';
import toast from '../../../../../../utils/toast';

export function useContactItem(contactId, onDeleteContact) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsLoading(true);

      await ContactsService.deleteContact(contactId);
      onDeleteContact(contactId);

      setIsOpen(false);

      toast({
        message: 'Contato removido com sucesso!',
        variant: 'success',
      });
    } catch (error) {
      toast({
        message: 'Ocorreu um erro ao excluir o contato!',
        variant: 'danger',
      });
    } finally {
      setIsLoading(false);
    }
  }
  return {
    isOpen,
    setIsOpen,
    isLoading,
    handleOpenModal,
    handleConfirmDeleteContact,
  };
}
