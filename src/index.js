module.exports = function check(str, bracketsConfig) {
  let bracketPairs = bracketsConfig.map(item => item.join(''));
  for (let i = 0; i < bracketPairs.length;) {
    if (str.includes(bracketPairs[i])) {
      str = str.replace(bracketPairs[i], '');
      i = 0;
    } else i++;
  }
  return str.length === 0;
