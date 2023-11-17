import styles from './styles.module.css';

export const Bar = ({ value, maxValue, label }) => (
  <div className={styles.main}>
    <div className={styles.label} /* styles "HP" on bar*/>{label}</div>
    <div className={styles.max} /*styling for health bar */>
      <div
        className={styles.value}
        style={{ width: `${(value / maxValue) * 100}%` }} // determine the width of the health bar.
      >
        <p /* shows user number values*/>
          {value}/{maxValue}
        </p>
      </div>
    </div>
  </div>
);
