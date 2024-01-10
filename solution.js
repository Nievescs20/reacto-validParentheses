function validParentheses(str) {
  if (str.length <= 1) return false;
  const bracketPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const openBrackets = "({[";
  let bracketArray = [];

  for (let bracket of str) {
    if (openBrackets.includes(bracket)) {
      bracketArray.push(bracket);
    } else {
      const bracketToWatch = bracketArray.pop();
      if (bracket !== bracketPairs[bracketToWatch]) return false;
    }
  }
  return bracketArray.length === 0;
}

// Time: O(n*m)  Space: O(n)

function validParentheses_v2(str) {
  const open = {
    "(": true,
    "[": true,
    "{": true,
  };

  const close = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const result = [];

  for (let bracket of str) {
    if (bracket in open) {
      result.push(bracket);
    } else {
      if (close[bracket] !== result.pop()) {
        return false;
      }
    }
  }
  return result.length === 0;
}

// Time: O(n)  Space: O(n)

console.log(validParentheses("()")); //true
console.log(validParentheses("()[]{}")); //true
console.log(validParentheses("(]")); //false
