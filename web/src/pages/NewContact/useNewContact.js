import { useRef } from 'react';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export function useNewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(contact) {
    try {
      await ContactsService.createContact(contact);

      contactFormRef.current.resetFields();

      toast({
        variant: 'success',
        message: 'Contato cadastrado com sucesso!',
        duration: 3000,
      });
    } catch (error) {
      toast({
        variant: 'danger',
        message: 'Ocorreu um erro ao cadastrar o seu contato!',
        duration: 3000,
      });
    }
  }
  return {
    contactFormRef,
    handleSubmit,
  };
}
