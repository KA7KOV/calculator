import React from 'react'
interface ButtonsProps {
    handleNumberClick: (num: string) => void
    handleResultClick: () => void,
    handleSignClick: (sign: string) => void,
    handleClearClick: () => void
}

export const Buttons: React.FC<ButtonsProps> = ({
  handleNumberClick,
  handleResultClick,
  handleSignClick,
  handleClearClick
}) => {

  return (<div className="buttons">
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
  </div>)
}