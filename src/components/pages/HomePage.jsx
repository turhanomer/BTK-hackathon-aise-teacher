// src/components/pages/HomePage.jsx
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Avatar from "../Avatar/Avatar";
import InputArea from "../InputArea/InputArea";

import './HomePage.css';

function HomePage() {
  const [response, setResponse] = useState('');
  const [responseType, setResponseType] = useState('neutral');

  const handleSend = (message) => {
    setResponse('Bu yapay zeka cevabı!');
    setResponseType('happy');
  };

  return (
    <div className="home-page">
      <Sidebar />
      <div className="content">
        <Avatar response={response} responseType={responseType} />
        <InputArea onSend={handleSend} />
      </div>
    </div>
  );
}

export default HomePage;
