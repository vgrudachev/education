function isEqual(a, b) {
  if (a === null || b === null) return false;

  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);
  let aValues = Object.values(a);
  let bValues = Object.values(b);
  let arrLength = aKeys.length;
  let rightNum = 0;

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (let i = 0; i <= arrLength - 1; i++) {
    if (aKeys[i] === bKeys[i] && aValues[i] === bValues[i])
    rightNum++;
  };
  
  return rightNum === arrLength;
};

window.isEqual = isEqual;

export default isEqual;