import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Chatbox.css';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
      }, {
        headers: {
          Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json',
        }
      });

      const botReply = response.data.choices[0].message.content;
      setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { from: 'bot', text: "Oops! Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`chatbox ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn animated-bubble" onClick={toggleChat}>💬</button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.from}`}>{msg.text}</div>
            ))}
            {loading && <div className="message bot">Typing...</div>}
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
