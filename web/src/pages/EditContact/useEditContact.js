import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export function useEditContact() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  const contactFormRef = useRef(null);

  async function handleSubmit(contact) {
    try {
      const updatedContact = await ContactsService.updateContact(id, contact);

      setContactName(updatedContact.name ?? '');

      toast({
        variant: 'success',
        message: 'Contato atualizado com sucesso!',
        duration: 3000,
      });
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;

      toast({
        variant: 'danger',
        message: 'Ocorreu um erro ao atualizar o seu contato!',
        duration: 3000,
      });
    }
  }

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchContact() {
      try {
        const contact = await ContactsService.findContactById(
          id,
          abortController.signal,
        );
        contactFormRef.current.setFieldsValues(contact);
        setIsLoading(false);
        setContactName(contact.name);
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;

        navigate('/', { replace: true });
        toast({
          variant: 'danger',
          message: 'Ocorreu um erro ao carregar o contato!',
          duration: 3000,
        });
      }
    }
    fetchContact();

    return () => {
      abortController.abort();
    };
  }, [id, navigate]);

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
