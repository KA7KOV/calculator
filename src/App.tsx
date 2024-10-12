import React, { useState, useRef } from 'react'
import { calculate } from './calculate'
import './App.css'

export const App = () => {
  const [result, setResult] = useState('0')
  const [expression, setExpression] = useState('')
  const [calculationDone, setCalculationDone] = useState(false)
  const ref = useRef(null)

  const handleNumberClick = (num: string): void => {
    console.log(num)
    setResult((prev) => {
      console.log(prev)
      if (calculationDone) {
        setCalculationDone(false)
        setExpression('')
        return num
      } else if (prev === '0') {
        return num
      } else if (prev.endsWith('-') || prev.endsWith('+') || prev.endsWith('*')
        || prev.endsWith('/') || prev.endsWith('√') || prev.endsWith('%')) {
        return `${prev} ${num}`
      }
      return prev + num
    })
  }

  const handleClearClick = () => {
    setResult('0')
    setExpression('')
    setCalculationDone(false)
  }

  const handleSignClick = (sign: string): void => {
    setResult((prev) => {
      if (calculationDone) {
        setCalculationDone(false)
      }
      if (sign === '√'){
        return `${sign}`
      } else if (sign !== '%') {
        return `${prev} ${sign}`
      }
      return `${prev}${sign}`
    })
  }

  const handleResultClick = () => {
    const res = calculate(result)
    setResult(res.toString())
    setExpression(result)
    setCalculationDone(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    const valueCode = e.target.value[e.target.value.length-1]
    if ((Number(valueCode) >= 0 && Number(valueCode) <= 9) || valueCode === '+' ||
    valueCode === '-' || valueCode === '/' || valueCode === '%' || valueCode === '*'
    || valueCode === ',' || valueCode === '(' || valueCode === ')'){
      handleNumberClick(valueCode)
    }
  }

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e)
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      handleResultClick()
    } 
  }

  return (
    <div className="calculator">
      <div className="screen">
        <div id="expression">{expression}</div>
        <input id="result" value={result} autoFocus onChange={(e) => handleChange(e)} ref={ref} onKeyDown={(e) => handleKey(e)}/>
      </div>
      <div className="buttons">
        <button id='clear' onClick={() => handleClearClick()}>C</button>
        <button id='sqrt' onClick={() => handleSignClick('√')}>√</button>
        <button id='percent' onClick={() => handleSignClick('%')}>%</button>
        <button id='divider' onClick={() => handleSignClick('/')}>/</button>
        <button id='seven' onClick={() => handleNumberClick('7')}>7</button>
        <button id='eight' onClick={() => handleNumberClick('8')}>8</button>
        <button id='nine' onClick={() => handleNumberClick('9')}>9</button>
        <button id='multiple' onClick={() => handleSignClick('*')}>×</button>
        <button id='four' onClick={() => handleNumberClick('4')}>4</button>
        <button id='five' onClick={() => handleNumberClick('5')}>5</button>
        <button id='six' onClick={() => handleNumberClick('6')}>6</button>
        <button id='minus' onClick={() => handleSignClick('-')}>-</button>
        <button id='one' onClick={() => handleNumberClick('1')}>1</button>
        <button id='two' onClick={() => handleNumberClick('2')}>2</button>
        <button id='three' onClick={() => handleNumberClick('3')}>3</button>
        <button id='plus' onClick={() => handleSignClick('+')}>+</button>
        <button id='doubleZero' onClick={() => handleNumberClick('00')}>00</button>
        <button id='zero' onClick={() => handleNumberClick('0')}>0</button>
        <button id='comma' onClick={() => handleSignClick(',')}>,</button>
        <button id="equal" onClick={() => handleResultClick()}>=</button>
      </div>
    </div>
  )
}

export default App
