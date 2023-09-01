import React, { useState } from 'react'
import GetStarted from './GetStarted';
import Display from './Display';
import Minus from './Minus';

function Main() {

  const [counter, setCounter] = useState(5);  
  
  const incrementCounter = (incrementValue) => {
    setCounter(counter + incrementValue)
  }
  
  const decreaseCounter = (decreaseValue) => {
    setCounter(counter - decreaseValue)
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
      <div className="flex gap-4 mt-4">
        <Minus onClickFunctionMinus={decreaseCounter} decrease={1} />
        <Minus onClickFunctionMinus={decreaseCounter} decrease={5} />
        <Minus onClickFunctionMinus={decreaseCounter} decrease={10} />
        <Minus onClickFunctionMinus={decreaseCounter} decrease={100} />
      </div>
    </div>
  )
}

export default Main