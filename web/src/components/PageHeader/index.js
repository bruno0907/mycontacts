import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../Button';

import { ArrowLeft } from '../../assets/icons';

import { Container } from './styles';

export function PageHeader({ title }) {
  return (
    <Container>
      <Button as={Link} to="/" variant="link">
        <img src={ArrowLeft} alt="Voltar a página inicial" />
        Voltar
      </Button>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
