import React from "react";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const resultRef = useRef(null);
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const addition = (num) => {
    num.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };
  const subtract = (num) => {
    num.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const multiply = (num) => {
    num.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  const divide = (num) => {
    num.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  const resetInput = (num) => {
    num.preventDefault();
    inputRef.current.value = 0;
  };
  const resetResult = (num) => {
    num.preventDefault();
    setResult((result) => result * 0);
  };

  return (
    <div className="App">
      <div>
        <h1>Calculator App</h1>
      </div>
      <form>
        <p ref={resultRef}>Total: {result}</p>
        <input
          ref={inputRef}
          pattern="[0-9]"
          type="number"
          placeholder="Type a number"
        />
        <button onClick={addition}>add</button>
        <button onClick={subtract}>subtract</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput} class="reset">
          reset input
        </button>
        <button onClick={resetResult} class="reset">
          reset result
        </button>
      </form>
    </div>
  );
}

export default App;
