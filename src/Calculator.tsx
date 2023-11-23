import { useState } from 'react';
import './App.css';
import { Inputs } from './components/Inputs';
import { Operations } from './components/OperationsBtn';
import { Result } from './components/ResultOutput';

function Calculator() {
  const [input1, setFirstInputValue] = useState<number>(0)
  const [input2, setSecondInputValue] = useState<number>(0)
  const [result, setResult] = useState<number>(0)

  function add(): void {
    setResult(input1 + input2)
  }

  function subtract(): void {
    setResult(input1 - input2)
  }

  function divide(): void {
    setResult(input1 / input2)
  }

  function multiply(): void {
    setResult(input1 * input2)
  }

  function exponentiation(): void {
    setResult(Math.pow(input1, input2))
  }

  return (
    <div>
      <Inputs value1={input1} setInputValue1={setFirstInputValue} value2={input2} setInputValue2={setSecondInputValue}/>
      <Operations add={add} subtract={subtract} divide={divide} multiply={multiply} exponent={exponentiation}/>
      <Result result={result}/>
    </div>
  );
}

export default Calculator;
