import React, { useState } from 'react';
import '../styles/Chatbox.css';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: 'user', text: input }];
    newMessages.push({ from: 'bot', text: `You said: ${input}` }); // Dummy response
    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className={`chatbox ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleChat}>💬</button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.from}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask us anything!"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
