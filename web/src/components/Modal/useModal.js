import { useEffect, useCallback } from 'react';

export function useModal(isVisible, overlayRef, onOpen) {
  const handleCloseModal = useCallback(() => {
    if (overlayRef.current.id !== 'overlay') return;

    onOpen(false);
  }, [onOpen, overlayRef]);

  useEffect(() => {
    if (isVisible) {
      overlayRef.current.addEventListener('click', handleCloseModal);
    }

    const overlayRefElement = overlayRef.current;

    return () => {
      if (isVisible) {
        overlayRefElement.removeEventListener('click', handleCloseModal);
      }
    };
  }, [overlayRef, handleCloseModal, isVisible]);

  return {
    overlayRef,
    isVisible,
  };
}
