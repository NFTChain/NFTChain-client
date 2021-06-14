import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('message', (payload) => {
      setChat([...chat, payload]);
    });
  });

  const sendMessage = (e) => {
    e.preventDefault();

    socket.emit('message', { message });

    console.log(message);
    setMessage('');
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className='chat'>
      <div className='chat__box'>
        <div className='chat__text'>
          {chat.map((payload, i) => (
            <p className='chat__message' key={i}>
              {payload.message}
            </p>
          ))}
        </div>
        <div className='chat__form-container'>
          <form className='chat__form' onSubmit={sendMessage}>
            <input
              type='text'
              className='chat__input'
              placeholder='Type a message'
              value={message}
              onChange={handleInputChange}
            />
            <button type='submit' className='chat__button button--blue'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
