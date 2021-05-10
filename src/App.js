import "./App.css";
import React, { useState } from "react";

const itemArray = new Array(9).fill(" ");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reset = () => {
    setWinMessage("");
    setIsCross(false);
    itemArray.fill(" ", 0, 9);
  };

  const winningStatus = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== " "
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== " " &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== " " &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== " " &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== " " &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== " " &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== " " &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== " " &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
  };

  const changePlayer = (index) => {
    if (!winMessage) {
      if (itemArray[index] === " ") {
        itemArray[index] = isCross ? "X" : "O";
        setIsCross(!isCross);
      }
      winningStatus();
    }
    if (
      itemArray[0] !== " " &&
      itemArray[1] !== " " &&
      itemArray[2] !== " " &&
      itemArray[3] !== " " &&
      itemArray[4] !== " " &&
      itemArray[5] !== " " &&
      itemArray[6] !== " " &&
      itemArray[7] !== " " &&
      itemArray[8] !== " " &&
      !winMessage
    ) {
      setWinMessage(`Match Draw`);
    }
  };

  return (
    <div>
      {winMessage ? (
        <div>
          <h1>{winMessage}</h1>
          <button onClick={() => reset()}>Play Again</button>
        </div>
      ) : (
        <h1>{!isCross ? "Circle" : "Cross"} turns</h1>
      )}
      <div className="main">
        {itemArray.map((item, index) => (
          <div
            key={index}
            className="box"
            style={({ fontWeight: "bolder" }, { fontSize: "1.5rem" })}
            onClick={() => changePlayer(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <p style={{ color: "darkolivegreen" }}>~Made By Rishabh Gupta</p>
    </div>
  );
};

export default App;
