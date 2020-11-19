import React from 'react';

const FriendList = ({ friends }) => (
  <>
    {friends.map(({ avatar, name, isonline, id }) => {
    console.log(isonline);
     return( <li key={id} className="item">
       <span className={isonline ? "status" : "status-non"}></span> 
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>)
    })
  }
</>
)
export default FriendList;