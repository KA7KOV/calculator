export function calculate(s: string):number {
  s = s.trim()
  if (!s.includes('+') && !s.includes(')') && !s.includes('(') && !s.includes('-') && !s.includes('*') && !s.includes('/') && !s.includes('%') && !s.includes('√')) {
    return Number(s)
  }

  const stack: Array<number> = []
  let cur = 0
  let sign = '+'
  let isSqrt = false

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]

    if (ch === '√') {
      isSqrt = true
    } else if (ch >= '0' && ch <= '9') {
      let num = ''
      while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num += s[i]
        i++
      }
      cur = Number(num)
      i--

      if (isSqrt) {
        cur = Math.sqrt(cur)
        isSqrt = false
      }
    } else if (ch === '(') {
      let j = i, openBrackets = 1
      while (openBrackets > 0) {
        j++
        if (s[j] === '(') openBrackets++
        if (s[j] === ')') openBrackets--
      }
      cur = calculate(s.slice(i + 1, j))
      i = j
    } else if (ch === '%') {
      cur = cur / 100
    }

    if (ch === '+' || ch === '-' || ch === '*' || ch === '/' || i === s.length - 1) {
      if (sign === '+') {
        stack.push(cur)
      } else if (sign === '-') {
        stack.push(-cur)
      } else if (sign === '*') {
        let prev = stack.pop()
        if (prev === undefined) prev = 1
        stack.push(prev * cur)
      } else if (sign === '/') {
        let prev = stack.pop()
        if (prev === undefined) prev = cur
        else if (cur === 0) cur = 1
        stack.push(prev / cur)
      }

      sign = ch
      cur = 0
    }
  }

  return stack.reduce((acc, num) => acc + num, 0)
}
