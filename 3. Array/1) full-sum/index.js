function fullSum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      result += arguments[i];
    } else {
      throw new Error("Wrong Argument Type")
    };
  }
  return result;
}

window.fullSum = fullSum;

export default fullSum;
