import { NotificationManager } from 'react-notifications';

export const createNotification = (type, message, length) => {
  return () => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message', message, length);
        break;
      case 'success':
        NotificationManager.success('Success message', message, length);
        break;
      case 'warning':
        NotificationManager.warning('Warning message', message, length);
        break;
      case 'error':
        NotificationManager.error('Error message', message, length);
        break;
    }
  };
};
