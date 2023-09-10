import PropTypes from 'prop-types';
import { Container } from './styles';
import { Spinner } from '../Spinner';

export function Button({
  type = 'button',
  children,
  variant = 'primary',
  full,
  isLoading = false,
  disabled = false,
  ...rest
}) {
  return (
    <Container
      type={type}
      variant={variant}
      full={full}
      disabled={disabled || isLoading}
      {...rest}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </Container>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger', 'link']),
  full: PropTypes.bool,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};
