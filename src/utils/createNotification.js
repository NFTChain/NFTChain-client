import { NotificationManager } from 'react-notifications';

export const createNotification = (type, message, length) => {
  return () => {
    switch (type) {
      case 'info':
        NotificationManager.info(message, 'Info message', length);
        break;
      case 'success':
        NotificationManager.success(message, 'Success message', length);
        break;
      case 'warning':
        NotificationManager.warning(message, 'Warning message', length);
        break;
      case 'error':
        NotificationManager.error(message, 'Error message', length);
        break;
    }
  };
};
