import React, { useState } from 'react'
import './App.css';
import GetStarted from './components/GetStarted';
import Display from './components/Display';

function App() {
  const [counter, setCounter] = useState(5);  
  
  const incrementCounter = (incrementValue) => {
    setCounter(counter + incrementValue)
  }

  return (
    <div className="App bg-stone-500 h-screen flex items-center flex-col">
      <div className="flex gap-4">
        <GetStarted onClickFunction={incrementCounter} increment={1} /> 
        <GetStarted onClickFunction={incrementCounter} increment={5} /> 
        <GetStarted onClickFunction={incrementCounter} increment={10} /> 
        <GetStarted onClickFunction={incrementCounter} increment={100} /> 
      </div>
      <Display message={counter} />
    </div>
  );
}

export default App;
