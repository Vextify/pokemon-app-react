import { Bar } from 'components';
import styles from './styles.module.css';

export const PlayerSummary = ({
  //display health bar container
  main,
  name,
  level,
  health,
  maxHealth,
}) => (
  <div className={styles.main}>
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <div className={styles.level}>Lvl {level}</div>
    </div>

    <div className={styles.health} /* display health bar*/>
      <Bar label="HP" value={Math.round(health)} maxValue={maxHealth} />
    </div>
  </div>
);
