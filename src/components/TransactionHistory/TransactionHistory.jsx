import styles from './TransactionHistory.module.css';
import React from 'react';

const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.transactionHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        { items.map((item, i) => {
         return (<tr key={item.id} className={styles.row}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>)
          })}
      </tbody>
    </table>
  )
}
export default TransactionHistory;