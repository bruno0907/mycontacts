import { ErrorStatus } from './components/ErrorStatus';
import { InputSearch } from './components/InputSearch';
import { NotFoundStatus } from './components/NotFoundStatus';
import { EmptyStatus } from './components/EmptyStatus';
import { ContactsList } from './components/ContactsList';
import { Header } from './components/Header';

import { Loader } from '../../components/Loader';

import { useHome } from './useHome';

import { Container } from './styles';

export function Home() {
  const {
    isPending,
    isLoading,
    hasError,
    filteredContacts,
    contacts,
    searchFilter,
    orderBy,
    onDeleteContact,
    handleTryAgain,
    handleSearchFilter,
    handleToggleOrderBy,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isContactsListEmpty = !isLoading && !hasError && !hasContacts;
  const isContactSearchNotFound = !filteredContacts && !isLoading && !hasError
    && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && <InputSearch value={searchFilter} onChange={handleSearchFilter} />}

      <Header
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
        hasError={hasError}
        isPending={isPending}
      />

      <hr />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {isContactsListEmpty && <EmptyStatus />}

      {isContactSearchNotFound && <NotFoundStatus search={searchFilter} />}

      <ContactsList
        orderBy={orderBy}
        onToggleOrder={handleToggleOrderBy}
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />

    </Container>
  );
}
