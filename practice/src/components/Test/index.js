import React, { useState } from "react";
import "./styles.css";

const Bottle = ({ id, colors, isSelected, onClick }) => (
  <div
    className={`bottle ${isSelected ? "selected" : ""}`}
    onClick={() => onClick(id)}
    id={`bottle-${id}`}
  >
    <div className="liquid">
      {colors.map((color, index) => (
        <div
          key={index}
          className="liquid-layer"
          style={{
            backgroundColor: color,
            height: `${100 / 4}%` // Assuming each bottle has a maximum of 4 layers
          }}
        />
      ))}
    </div>
  </div>
);

const PouringGame = () => {
  const [bottles, setBottles] = useState([
    ["red", "red", "red", "red"],
    ["blue", "blue", "blue", "blue"],
    ["green", "green", "green", "green"],
    ["yellow", "yellow", "yellow", "yellow"],
    []
  ]);
  const [selected, setSelected] = useState(null);
  const [pouring, setPouring] = useState(false);
  const [streamStyle, setStreamStyle] = useState({});

  const handleBottleClick = (id) => {
    if (pouring) return; // Ignore clicks during pouring
    if (selected === null) {
      // Select the source bottle
      setSelected(id);
    } else if (selected === id) {
      // Deselect if the same bottle is clicked
      setSelected(null);
    } else {
      // Perform pour
      pour(selected, id);
      setSelected(null);
    }
  };

  const pour = (fromIndex, toIndex) => {
    const fromBottle = [...bottles[fromIndex]];
    const toBottle = [...bottles[toIndex]];

    // Validate pouring rules
    if (
      fromBottle.length === 0 ||
      toBottle.length === 4 ||
      (toBottle.length > 0 && toBottle[toBottle.length - 1] !== fromBottle[fromBottle.length - 1])
    ) {
      alert("Invalid move!");
      return;
    }

    const fromBottleEl = document.getElementById(`bottle-${fromIndex}`);
    const toBottleEl = document.getElementById(`bottle-${toIndex}`);
    const fromRect = fromBottleEl.getBoundingClientRect();
    const toRect = toBottleEl.getBoundingClientRect();

    setPouring(true);

    // Move bottle and show stream
    setTimeout(() => {
      setStreamStyle({
        display: "block",
        left: `${fromRect.left + fromRect.width / 2}px`,
        top: `${fromRect.top}px`,
        width: `${Math.abs(toRect.left - fromRect.left)}px`,
        height: `10px`,
        transform: `translate(${toRect.left - fromRect.left}px, ${toRect.top - fromRect.top}px)`
      });

      setTimeout(() => {
        // Update bottles state
        setBottles((prev) => {
          const newBottles = [...prev];
          const colorToPour = fromBottle.pop();
          newBottles[fromIndex] = fromBottle;
          newBottles[toIndex] = [...toBottle, colorToPour];
          return newBottles;
        });

        setStreamStyle({});
        setPouring(false);
      }, 1000); // Duration of pouring
    }, 1000); // Duration of bottle movement
  };

  return (
    <div className="game-container">
      {bottles.map((colors, index) => (
        <Bottle
          key={index}
          id={index}
          colors={colors}
          isSelected={selected === index}
          onClick={handleBottleClick}
        />
      ))}
      <div className="stream" style={streamStyle} />
    </div>
  );
};

export default PouringGame;
