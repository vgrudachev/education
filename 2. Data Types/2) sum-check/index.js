function sumCheck(a, b) {
  if (!isNaN(+a) && !isNaN(+b) && typeof a == 'number' && typeof b == 'number') {
  return a + b;
  }
  try {
    if ( (isNaN(+a) || isNaN(+b)) && typeof a != 'object' && typeof b != 'object') {
      return NaN;
    }
    throw new Error("Wrong arguments type!");
  } catch(e) {
    if (e.name == 'Error') {
      alert(e.message);
    }
    throw e;
  }
}

window.sumCheck = sumCheck;

export default sumCheck;
