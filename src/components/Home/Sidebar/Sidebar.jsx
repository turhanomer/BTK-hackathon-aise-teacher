import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [oldMessages, setOldMessages] = useState([]); // Store old messages
    const [showOldMessages, setShowOldMessages] = useState(false); // Control old messages visibility
    const menuRef = useRef(null); // Reference for click outside handling

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false); // Close menu if clicked outside
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleShowOldMessages = () => {
        const storedMessages = JSON.parse(localStorage.getItem('messages')) || []; // Get messages from local storage
        setOldMessages(storedMessages);
        setShowOldMessages(prev => !prev); // Toggle visibility of old messages
    };

    return (
        <>
            <button className="toggle-button" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
            <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <li className="vocabulary-button">Vocabulary</li>
                <li className="grammar-button">Grammar</li>
                <li className="listening-button">Listening</li>
                <li className="writing-button">Writing</li>
                
                {/* Ayarlar and Profil buttons */}
                <li>
                    <div className="small-buttons-container">
                        <button className="small-button">Ayarlar</button>
                        <button className="small-button">Profil</button>
                    </div>
                </li>
            </ul>
            {/* Show old messages button */}
            <button className="show-old-messages-button" onClick={handleShowOldMessages}>
                {showOldMessages ? 'Mesajları Gizle' : 'Eski Mesajları Gör'}
            </button>
            {/* Old messages display section */}
            {showOldMessages && (
                <div className="old-messages">
                    <h4>Eski Mesajlar:</h4>
                    <ul>
                        {oldMessages.length > 0 ? (
                            oldMessages.map((msg, index) => (
                                <li key={index}>{msg}</li>
                            ))
                        ) : (
                            <li style={{float:"left"}}>Hiç eski mesaj yok.</li>
                        )}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Sidebar;
