import React, { useState } from 'react';
import './ChatInput.css';
import db from '../../firebase';
import { useStateValue } from '../../context/StateProvider';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function ChatInput({ channelName, channelId }) {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input) return false;
    if (channelId) {
      const messageRef = collection(db, 'rooms', channelId, 'messages');
      const payload = {
        message: input,
        timeStamp: serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      };
      await addDoc(messageRef, payload);
    }
    setInput('');
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
