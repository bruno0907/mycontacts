import {
  useCallback, useDeferredValue, useEffect, useMemo, useState, useTransition,
} from 'react';
import ContactsService from '../../services/ContactsService';

export function useHome() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  const deferredSearchFilter = useDeferredValue(searchFilter);

  const [isPending, startTransition] = useTransition();

  const handleToggleOrderBy = useCallback(() => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }, []);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(deferredSearchFilter.toLowerCase())
  )), [contacts, deferredSearchFilter]);

  function handleSearchFilter(event) {
    const { value } = event.target;

    startTransition(() => {
      setSearchFilter(value);
    });
  }

  const fetchContacts = useCallback(async (signal) => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy, signal);

      setContacts(contactsList);
      setHasError(false);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;

      setHasError(true);
      setContacts([]);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  function handleTryAgain() {
    const abortController = new AbortController();
    fetchContacts(abortController.signal);
  }

  const onDeleteContact = useCallback((contactId) => {
    setContacts((prevState) => prevState.filter((contact) => contact.id !== contactId));
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    fetchContacts(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [fetchContacts]);

  return {
    isLoading,
    hasError,
    onDeleteContact,
    handleTryAgain,
    contacts,
    filteredContacts,
    searchFilter,
    orderBy,
    handleSearchFilter,
    handleToggleOrderBy,
    isPending,
  };
}
