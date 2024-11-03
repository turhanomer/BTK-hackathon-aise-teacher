import { useState, useEffect } from 'react';
import './InputArea.css';

function InputArea({ onSend }) {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]); 

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (inputValue.trim()) {
      setMessages((prevMessages) => [inputValue, ...prevMessages]); 
      setInputValue(''); 
    }
  };

  return (
    <div className="input-area">
      <div className="messages-container">
        {messages.slice(0, 10).map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="input-form">
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Cevapla..."
          className="input-textbox"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault(); 
              handleSubmit(e); 
            }
          }}
        />
        <button type="submit" className="send-button">Yaz</button>
      </form>
    </div>
  );
}

export default InputArea;
