import { useEffect, useRef } from 'react';

const events: ['mousedown', 'touchstart'] = ['mousedown', 'touchstart'];

const useClickAway = <T extends HTMLElement>(
  callback: (e?: MouseEvent | TouchEvent) => void,
) => {
  const ref = useRef<T | null>(null);
  const saveCallback = useRef(callback);

  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const element = ref.current;

    if (!element || !(element instanceof HTMLElement)) {
      return;
    }

    const eventHandler = (e: MouseEvent | TouchEvent) => {
      const { target } = e;

      if (!target || !(target instanceof HTMLElement)) {
        return;
      }

      if (element.contains(target)) {
        return;
      }

      saveCallback.current(e);
    };

    events.forEach((event) => {
      document.addEventListener(event, eventHandler);
    });

    return () => {
      events.forEach((eventName) => {
        document.removeEventListener(eventName, eventHandler);
      });
    };
  }, []);

  return ref;
};

export default useClickAway;
