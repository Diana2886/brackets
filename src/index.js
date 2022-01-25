module.exports = function check(str, bracketsConfig) {
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
}
