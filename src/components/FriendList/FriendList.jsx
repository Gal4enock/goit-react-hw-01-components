import React from 'react';

const FriendList = ({ friends }) => (
  <>
    {friends.map(({ avatar, name, isOnline, id }) => {
    console.log(isOnline);
     return( <li key={id} className="item">
       {/* {isOnline ? <span className="status"></span> : <span className="status-non"></span>} */}
       <span className={isOnline ? "status" : "status-non"}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>)
    })
  }
</>
)
export default FriendList;