import { useEffect } from 'react';

export function useToastMessage(message, onRemoveMessage) {
  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  return {
    handleRemoveToast,
  };
}
