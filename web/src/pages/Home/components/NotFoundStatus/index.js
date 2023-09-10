import PropTypes from 'prop-types';

import MagnifierQuestion from '../../../../assets/images/magnifier-question.svg';
import { Container } from './styles';

export function NotFoundStatus({ search }) {
  return (
    <Container>
      <img src={MagnifierQuestion} alt="MagnifierQuestion" />
      <span>Nenhum resultado foi encontrado para <strong>{`"${search}"`}</strong></span>
    </Container>
  );
}

NotFoundStatus.propTypes = {
  search: PropTypes.string.isRequired,
};
