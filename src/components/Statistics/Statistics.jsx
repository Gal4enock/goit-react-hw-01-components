import styles from './Statistics.module.css';
import React from 'react';

const Statistics = ({ stats }) => {
  return (
    <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>

    <ul className={styles.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={styles.item}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
    </ul>
  </section>
  )
}

Statistics.defaultProps = {
  title: <h2>SomeThing</h2>,
};

export default Statistics;
