import { useState, useEffect, useRef } from 'react'; 
import './Avatar.css';

function Avatar({ responseType, category }) {
  const [aiResponse, setAiResponse] = useState(''); 
  const [displayedResponse, setDisplayedResponse] = useState('');
  const messagesEndRef = useRef(null); 

  const handleButtonClick = () => {
    const message = "Merhaba ben AISE Hoca, nasılsın? Günün nasıl geçiyor? İngilizce öğrenmeye hazır mıyız?";
    setAiResponse(message); 
    setDisplayedResponse(''); 
    typeMessage(message); 
  };

  const typeMessage = (message) => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < message.length) {
        setDisplayedResponse((prev) => prev + message[index]); 
        index++;
      } else {
        clearInterval(typingInterval); 
      }
    }, 50); 
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [displayedResponse]); 

  return (
    <>
    <div className='avatar-container'>
      {category && <h2 className="category-title">{category}</h2>}
      <img src="/images/AISEHOCA.png" alt="Aise" className="avatar-image" />
      {}
      <div className="ai-message-box" ref={messagesEndRef}>
        <p className="avatar-response">{displayedResponse}</p> 
      </div>
    </div>
    </>
  );
}

export default Avatar;
