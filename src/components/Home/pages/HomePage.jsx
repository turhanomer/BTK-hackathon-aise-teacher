import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Avatar from "../Avatar/Avatar";
import InputArea from "../InputArea/InputArea";
import './HomePage.css';

function HomePage() {
  const [responses, setResponses] = useState([]); 
  const [responseType, setResponseType] = useState('neutral'); 
  const [category, setCategory] = useState(''); 

  const handleSend = (message) => {
    if (message.trim() !== '') {
      setResponses((prevResponses) => [...prevResponses, message]); 
      setResponseType('happy'); 
    }
  };

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };

  return (
    <div className="home-page">
      <Sidebar onCategoryClick={handleCategoryClick} />
      <div className="content">
        <Avatar response={responses[responses.length - 1]} responseType={responseType} category={category} />
        <InputArea onSend={handleSend} />
      </div>
    </div>
  );
}

export default HomePage;
