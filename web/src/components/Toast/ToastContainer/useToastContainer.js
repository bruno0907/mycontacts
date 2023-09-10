import { useEffect } from 'react';
import { toastEventManager } from '../../../utils/toast';
import { useAnimatedList } from '../../../hooks/useAnimatedList';

export function useToastContainer() {
  const {
    items, setItems, handleRemoveItem, renderList,
  } = useAnimatedList();

  function renderMessages(renderItemCallback) {
    return renderList(renderItemCallback);
  }

  useEffect(() => {
    function handleAddToast({ variant, message, duration }) {
      setItems((prevState) => [...prevState, {
        id: Math.random(),
        variant,
        message,
        duration,
      }]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setItems]);

  return {
    messages: items,
    handleRemoveMessage: handleRemoveItem,
    renderMessages,
  };
}
