import PropTypes from 'prop-types';
import { Overlay, Content, Footer } from './styles';
import { Button } from '../Button';
import ReactPortal from '../ReactPortal';
import { useAnimatedUnmount } from '../../hooks/useAnimatedUnmount';
import { useModal } from './useModal';

export function Modal({
  isOpen,
  onOpen,
  danger = false,
  title,
  children,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onConfirm,
  isLoading = false,
}) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isOpen);
  const { isVisible, overlayRef } = useModal(shouldRender, animatedElementRef, onOpen);

  if (!isVisible) return null;

  return (
    <ReactPortal containerId="modal-root">
      <Overlay
        id="overlay"
        ref={overlayRef}
        isOpen={isOpen}
        isLeaving={!isOpen}
      >
        <Content danger={danger} isLeaving={!isOpen}>
          <h1>{title}</h1>
          {children}

          <Footer>
            <Button
              variant="secondary"
              onClick={() => onOpen(false)}
              disabled={isLoading}
            >{cancelLabel}
            </Button>
            <Button
              variant={danger ? 'danger' : 'primary'}
              onClick={onConfirm}
              isLoading={isLoading}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Content>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
