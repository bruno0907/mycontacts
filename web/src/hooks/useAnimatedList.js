import {
  createRef, useCallback, useRef, useState, useEffect,
} from 'react';

export function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemovalItemsId, setPendingRemovalItemsId] = useState([]);

  const animatedRefs = useRef(new Map());
  const animationEndListeners = useRef(new Map());

  const handleRemoveItem = useCallback((itemId) => {
    setPendingRemovalItemsId((prevState) => [...prevState, itemId]);
  }, []);

  const handleAnimationEnd = useCallback((itemId) => {
    const removeListener = animationEndListeners.current.get(itemId);
    removeListener();

    animationEndListeners.current.delete(itemId);
    animatedRefs.current.delete(itemId);

    setItems((prevState) => prevState.filter((item) => item.id !== itemId));
    setPendingRemovalItemsId((prevState) => prevState.filter((id) => id !== itemId));
  }, []);

  const getAnimatedRef = useCallback((itemId) => {
    let animatedRef = animatedRefs.current.get(itemId);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }

    return animatedRef;
  }, []);

  const renderList = useCallback((renderItem) => (
    items.map((item) => {
      const isLeaving = pendingRemovalItemsId.includes(item.id);
      const animatedRef = getAnimatedRef(item.id);

      return renderItem(item, {
        isLeaving,
        animatedRef,
      });
    })
  ), [items, pendingRemovalItemsId, getAnimatedRef]);

  useEffect(() => {
    pendingRemovalItemsId.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId);
      const alreadyHasListeners = animationEndListeners.current.has(itemId);

      const animatedElement = animatedRef?.current;

      if (animatedElement && !alreadyHasListeners) {
        const onAnimationEnd = () => handleAnimationEnd(itemId);
        const removeListener = () => {
          animatedElement.removeEventListener('animationend', onAnimationEnd);
        };

        animatedElement.addEventListener('animationend', onAnimationEnd);
        animationEndListeners.current.set(itemId, removeListener);
      }
    });
  }, [pendingRemovalItemsId, handleAnimationEnd]);

  useEffect(() => {
    const removeListeners = animationEndListeners.current;
    return () => {
      removeListeners.forEach((removeListener) => removeListener);
    };
  }, []);

  return {
    items,
    setItems,
    handleRemoveItem,
    renderList,
  };
}
