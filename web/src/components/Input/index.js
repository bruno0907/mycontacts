import PropTypes from 'prop-types';
import { Container } from './styles';

export function Input({
  type = 'text', iconLeft, iconRight, error = null, ...rest
}) {
  return (
    <Container error={error}>
      { iconLeft && iconLeft }
      <input type={type} {...rest} />
      { iconRight && iconRight }
    </Container>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  error: PropTypes.string,
};
