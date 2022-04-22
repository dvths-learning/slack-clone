import React from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlineIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlineIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># general</strong>
            <StarBorderOutlineIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlineIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
