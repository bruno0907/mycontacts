import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../../../../components/Button';
import { Spinner } from '../../../../components/Spinner';
import { Container } from './styles';

export function Header({
  hasError, qtyOfContacts, qtyOfFilteredContacts, isPending,
}) {
  // eslint-disable-next-line no-nested-ternary
  const alignment = hasError ? 'flex-end' : (qtyOfContacts > 0 ? 'space-between' : 'center');
  const hasContacts = !hasError && qtyOfContacts > 0;

  return (
    <Container justifyContent={alignment}>
      {hasContacts && (
        <strong>
          <span>
            {qtyOfFilteredContacts}
          </span>
          {' '}
          {qtyOfFilteredContacts === 1 ? 'contato' : 'contatos'}
          {isPending && <Spinner size={16} />}
        </strong>
      )}
      <Button as={Link} to="/new" variant="ghost">Novo contato</Button>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  qtyOfContacts: PropTypes.number.isRequired,
  qtyOfFilteredContacts: PropTypes.number.isRequired,
  isPending: PropTypes.bool,
};
