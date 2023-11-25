import React, { useState } from 'react';
import './App.css';

function App() {
  const [userMessage, setUserMessage] = useState('');
  const [displayText, setDisplayText] = useState('Hello World');

  const displayMessage = () => {
    setDisplayText(userMessage || 'Hello World');
  };

  return (
    <div>
      <label htmlFor="messageInput">Message to Display</label>
      <input
        id="messageInput"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={displayMessage}>Display Message</button>
      <h2>{displayText}</h2>
    </div>
  );
}

export default App;
