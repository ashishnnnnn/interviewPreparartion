import React, { useState, useEffect } from 'react';
import './style.css'; // Add some styling for the board and snake

const SnakeGame = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 }); // Initial position
  const [direction, setDirection] = useState('RIGHT'); // Initial direction

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      const directions = {
        ArrowUp: 'UP',
        ArrowDown: 'DOWN',
        ArrowLeft: 'LEFT',
        ArrowRight: 'RIGHT',
      };
      if (directions[e.key]) setDirection(directions[e.key]);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Movement logic
  useEffect(() => {
    const moveSnake = () => {
      setPosition((prev) => {
        const newPosition = { ...prev };
        switch (direction) {
          case 'UP':
            newPosition.top -= 10;
            break;
          case 'DOWN':
            newPosition.top += 10;
            break;
          case 'LEFT':
            newPosition.left -= 10;
            break;
          case 'RIGHT':
            newPosition.left += 10;
            break;
          default:
            break;
        }

        // Wrap around logic for an open board
        if (newPosition.top < 0) newPosition.top = 480; // Board height wrap
        if (newPosition.top > 480) newPosition.top = 0;
        if (newPosition.left < 0) newPosition.left = 480; // Board width wrap
        if (newPosition.left > 480) newPosition.left = 0;

        return newPosition;
      });
    };

    const interval = setInterval(moveSnake, 200); // Adjust speed here
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="board">
      <div
        className="snake"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      />
    </div>
  );
};

export default SnakeGame;
