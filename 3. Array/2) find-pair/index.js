function findPair(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
  return null;
};

window.findPair = findPair;

export default findPair;
