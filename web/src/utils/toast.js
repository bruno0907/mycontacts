import EventManager from '../lib/EventManager';

export const toastEventManager = new EventManager();

export default function toast({ variant, message, duration }) {
  toastEventManager.emit('addtoast', { variant, message, duration });
}
