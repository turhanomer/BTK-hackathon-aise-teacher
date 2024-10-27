// src/components/Sidebar/Sidebar.jsx
import { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? '←' : '→'}
      </button>
      <ul className="menu">
        <li>📚 Vocabulary</li>
        <li>📖 Grammar</li>
        <li>🎧 Listening</li>
        <li>📝 Writing</li>
      </ul>
    </div>
  );
}

export default Sidebar;
