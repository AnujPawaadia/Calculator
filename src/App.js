import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "<") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        // eslint-disable-next-line
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((preValue) => preValue + value);
    }
    
  };

  return (
    <div className="container">
      <div className="calc">
        <h1 id="input">{input}</h1>
        <div>
          <button id="clear" onClick={() => handleButtonClick("C")}>
            C
          </button>
          <button id="backspace" onClick={() => handleButtonClick("<")}>
            &lt;
          </button>
          <button id="percentage" onClick={() => handleButtonClick("%")}>
            %
          </button>
          <button id="divide" onClick={() => handleButtonClick("/")}>
            /
          </button>
        </div>
        <div>
          <button id="7" onClick={() => handleButtonClick("7")}>
            7
          </button>
          <button id="8" onClick={() => handleButtonClick("8")}>
            8
          </button>
          <button id="9" onClick={() => handleButtonClick("9")}>
            9
          </button>
          <button id="multiply" onClick={() => handleButtonClick("*")}>
            *
          </button>
        </div>
        <div>
          <button id="4" onClick={() => handleButtonClick("4")}>
            4
          </button>
          <button id="5" onClick={() => handleButtonClick("5")}>
            5
          </button>
          <button id="6" onClick={() => handleButtonClick("6")}>
            6
          </button>
          <button id="minus" onClick={() => handleButtonClick("-")}>
            -
          </button>
        </div>
        <div>
          <button id="1" onClick={() => handleButtonClick("1")}>
            1
          </button>
          <button id="2" onClick={() => handleButtonClick("2")}>
            2
          </button>
          <button id="3" onClick={() => handleButtonClick("3")}>
            3
          </button>
          <button id="add" onClick={() => handleButtonClick("+")}>
            +
          </button>
        </div>
        <div>
          <button id="0" onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button id="00" onClick={() => handleButtonClick("00")}>
            00
          </button>
          <button id="point" onClick={() => handleButtonClick(".")}>
            .
          </button>
          <button id="equals" onClick={() => handleButtonClick("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
