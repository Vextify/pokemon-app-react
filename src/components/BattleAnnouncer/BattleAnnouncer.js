import { useTypedMessage } from 'hooks';
import styles from './styles.module.css';

export const BattleAnnouncer = ({ message }) => {
  const typedMessage = useTypedMessage(message); // use typing text format to display text

  return (
    <div className={styles.main}>
      <div className={styles.message}>{typedMessage}</div>
    </div>
  );
};
