import React, { Component, useState } from 'react';
import "./Stopwatch.css"

function Stopwatch() {
  const [counter, setCounter] = useState(0)
  const [intervalId, setIntervalId] = useState()

  function handleStart() {
    if (!intervalId) {
      const id = setInterval(() => {
        setCounter(count => count + 1)
      }, 1000)
      setIntervalId(id)
    }
  }

  function handlePause() {
    clearInterval(intervalId)
    setIntervalId(undefined)
  }

  function handleReset() {
    handlePause()
    setCounter(0)
  }

  return (
    <div className="stopwatch">
      <h1>{counter}</h1>
      <div className="controls">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}

export default Stopwatch;
