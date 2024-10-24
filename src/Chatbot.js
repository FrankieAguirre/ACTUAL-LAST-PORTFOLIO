// src/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const handleToggle = () => setIsOpen(!isOpen);

  const options = [
    { label: "Learn about me", section: "#about" },
    { label: "View my projects", section: "#projects" },
    { label: "Check out my skills", section: "#skills" },
    { label: "Contact me", section: "#contact" },
  ];

  const handleOptionClick = (section) => {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setStep(0);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button className="chatbot-toggle" onClick={handleToggle}>
        {isOpen ? 'Close' : 'Need Help?'}
      </button>

      {isOpen && (
        <div className="chatbot">
          {step === 0 && (
            <div className="chatbot-message">
              <p>Hi there! Do you need help finding anything on my website?</p>
              <button onClick={() => setStep(1)}>Yes, please!</button>
              <button onClick={handleToggle}>No, thanks!</button>
            </div>
          )}
          {step === 1 && (
            <div className="chatbot-options">
              <p>What would you like to see?</p>
              {options.map((option, index) => (
                <button key={index} onClick={() => handleOptionClick(option.section)}>
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
