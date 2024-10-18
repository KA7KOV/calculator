import React, { useState } from 'react'
import { calculate } from './calculate'
import './App.css'
import { Screen } from './Screen'
import { Buttons } from './Buttons'

export const App = () => {
  const [result, setResult] = useState('0')
  const [expression, setExpression] = useState('')
  const [calculationDone, setCalculationDone] = useState(false)

  const handleNumberClick = (num: string): void => {
    setResult((prev) => {
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

  const handleSignClick = (sign: string): void => {
    setResult((prev: string) => {
      if (calculationDone) {
        setCalculationDone(false)
      }
      if (sign === '√') {
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

  const handleClearClick = () => {
    setResult('0')
    setExpression('')
    setCalculationDone(false)
  }

  return (
    <div className="calculator">
      <Screen
        expression={expression}
        result={result}
        handleNumberClick={handleNumberClick}
        handleResultClick={handleResultClick}
        handleSignClick={handleSignClick}
        handleClearClick={handleClearClick}
      />
      <Buttons
        handleNumberClick={handleNumberClick}
        handleResultClick={handleResultClick}
        handleSignClick={handleSignClick}
        handleClearClick={handleClearClick}
      />
    </div>
  )
}

export default App