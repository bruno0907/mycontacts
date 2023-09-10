import { memo } from 'react';
import PropTypes from 'prop-types';

import xCircleIcon from '../../../assets/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/icons/check-circle.svg';

import { Container } from './styles';
import { useToastMessage } from './useToastMessage';

function ToastMessage({
  message, onRemoveMessage, isLeaving, animatedRef,
}) {
  const { handleRemoveToast } = useToastMessage(message, onRemoveMessage);

  return (
    <Container
      variant={message.variant}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedRef}
    >
      {message.variant === 'danger' && <img src={xCircleIcon} alt="Danger Icon" />}
      {message.variant === 'success' && <img src={checkCircleIcon} alt="Success Icon" />}
      <strong>{message.message}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['default', 'danger', 'success']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func,
  isLeaving: PropTypes.bool,
  animatedRef: PropTypes.shape(),
};

export default memo(ToastMessage);
