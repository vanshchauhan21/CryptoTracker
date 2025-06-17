import React, {useState } from 'react';
import './Chatbot.css';
const Chatbot=()=>{
    const [isOpen,setIsOpen ]=useState(false);

    const toggleChat= () =>setIsOpen(prev =>!prev);

    return(
        <>
        <div className="chatbot-button" onClick={toggleChat}>
        💬
      </div>

      {isOpen && (
        <div className="chatbot-modal">
            {/* this can be added. i removed this because i wasn't liking the header ui.
            <div className="chatbot-header">
                <span>AI Assistant</span>
                <button onClick={toggleChat}>❌</button>
            </div> */}
            <iframe
            title="chatbot assistant"
            src="https://www.chatbase.co/chatbot-iframe/ZgWLkikKJbyOz5IKni2Ge"
            width="100%"
            height="100%"
            
          ></iframe>
        </div>
      )}
        </>
    );
};

export default Chatbot;