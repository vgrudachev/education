function sumCheck(a, b) {
  try {
    if (typeof +a === 'number' && typeof +b === 'number' && !isNaN(a) && !isNaN(b)) {
      return +a + +b;
    }
    throw new Error("Wrong arguments type!");
  } catch(e) {
    alert(e.message);
  }
}

sumCheck(2, 'b')

window.sumCheck = sumCheck;

export default sumCheck;
