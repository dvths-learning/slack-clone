import React from 'react';
import './Message.css';

function Message({ message, timeStamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt={user} />
      <div className="message__info">
        <h4>
          {user}, {new Date(timeStamp?.toDate()).toUTCString()}
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
