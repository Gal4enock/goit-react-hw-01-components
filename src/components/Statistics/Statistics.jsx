import './Statistics.css';
import React from 'react';

const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
    <h2 className="title">Upload stats</h2>

    <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
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
