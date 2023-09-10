import PropTypes from 'prop-types';
import { Container } from './styles';

export function Form({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
};
