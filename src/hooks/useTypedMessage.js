import { wait } from 'shared';
import { useEffect, useState } from 'react';

export const useTypedMessage = message => {
  // make text seem like its typing out
  const [typedMessage, setTypedMessage] = useState('');

  useEffect(() => {
    setTypedMessage('');

    if (message.length) {
      (async () => {
        let visibleMessage = '';
        for (let i = 0; i < message.length; i++) {
          //iterate through array one letter at a time
          await wait(25);

          visibleMessage = visibleMessage + message[i]; //display previous letters plus current letter one letter at a time

          setTypedMessage(visibleMessage);
        }
      })();
    }
  }, [message]);

  return typedMessage;
};
