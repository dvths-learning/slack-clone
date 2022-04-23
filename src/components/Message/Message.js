import React from 'react';
import './Message.css';

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="messasge">
      <img src={userImage} alt={user} />
      <div className="message__info">
        <h4>{user} timestamp...</h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;