module.exports = function check(str, bracketsConfig) {
<<<<<<< HEAD
  let bracketPairs = bracketsConfig.map(item => item.join(''));
  for (let i = 0; i < bracketPairs.length;) {
    if (str.includes(bracketPairs[i])) {
      str = str.replace(bracketPairs[i], '');
      i = 0;
    } else i++;
  }
  return str.length === 0;
=======
  let stack = [];
  const openBrackets = [];
  for (let brackets of bracketsConfig) {
    openBrackets.push(brackets[0]);
  }
  const bracketPairs = Object.fromEntries(bracketsConfig.map(i => i.reverse()));
  for (let i = 0; i < str.length; i++) {
    let item = str[i];
    let stackLastItem = stack[stack.length - 1];
    if (openBrackets.includes(item)) {
      if (stackLastItem === item && bracketPairs[item] === item) {
        stack.pop();
        continue;
      } 
      stack.push(item);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (bracketPairs[item] === stackLastItem) {
        stack.pop();
      } else {
        return false;
      }
    }
    console.log(stack);
  }
  return stack.length === 0;
>>>>>>> 648bf8f2103c475e3097b76bb0751b5b018e68d8
}
