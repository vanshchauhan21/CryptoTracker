
import React from 'react';

const Timer = ({ timeLeft }) => {
  return (
    <div className="timer">
      Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;