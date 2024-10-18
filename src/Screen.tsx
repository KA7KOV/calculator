import React from 'react'
interface ScreenProps {
    expression: string,
    result: string,
    handleNumberClick: (num: string) => void
    handleResultClick: () => void,
    handleSignClick: (sign: string) => void,
    handleClearClick: () => void,
    inputRef: React.RefObject<HTMLInputElement>
}

export const Screen: React.FC<ScreenProps> = ({
  expression,
  result,
  handleNumberClick,
  handleResultClick,
  handleSignClick,
  handleClearClick,
  inputRef
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueCode = e.target.value[e.target.value.length - 1]
    if ((Number(valueCode) >= 0 && Number(valueCode) <= 9)){
      handleNumberClick(valueCode)
    } else if (valueCode === '+' || valueCode === '-' ||
      valueCode === '/' || valueCode === '%' ||
      valueCode === '*' || valueCode === ',' ||
      valueCode === '(' || valueCode === ')') {
        handleSignClick(valueCode)
    }
  }

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => { 
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      handleResultClick()
    }
    else if (e.code === 'Escape') {
      handleClearClick()
    }
  }

  return (<div className="screen">
    <div id="expression">{expression}</div>
    <input
      id="result"
      value={result}
      autoFocus
      ref={inputRef} 
      onChange={(e) => handleChange(e)}
      onKeyDown={(e) => handleKey(e)} />
  </div>)
}

