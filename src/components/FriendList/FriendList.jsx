import React from 'react';
import styles from './FriendList.module.css';


const FriendList = ({ friends }) => (
  <ul class={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => {
     return( <li key={id} className={styles.item}>
       {isOnline ? <span className={styles.status}></span> : <span className={styles.statusNon}></span>}
        <img className={styles.avatar} src={avatar} alt={name} width="58" />
        <p className={styles.name}>{name}</p>
      </li>)
    })
  }
</ul>
)
export default FriendList;