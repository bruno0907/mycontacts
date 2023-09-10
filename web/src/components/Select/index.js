import PropTypes from 'prop-types';
import { Container } from './styles';

export function Select({ children, ...rest }) {
  return (
    <Container {...rest}>{children}</Container>
  );
}

Select.propTypes = {
  children: PropTypes.node,
};
