function fullSum(...args) {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') throw new Error("Wrong Argument Type");
  };

  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
  arr[i] = arguments[i];
  }

  let result = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  return result;
}

window.fullSum = fullSum;

export default fullSum;
