function isEqual(a, b) {
  if ( a == null || b == null ) {
    return false;
  }

  let keysa = Object.keys(a);
  let keysb = Object.keys(b);
  let length = 0;

  let vala = Object.values(a);
  let valb = Object.values(b);

  let rightNum = 0;

  if (keysa.length > keysb.length || keysa.length < keysb.length) {
    return false;
  } else {
    length = keysa.length;
  }

  for (let i = 0; i <= length - 1; i++) {
    if (keysa[i] === keysb[i] && vala[i] === valb[i]) {
      rightNum++;
    }
    continue;
  } 

  if (rightNum == length) {
    return true;
  } else {
    return false;
  }
};

let aa = {
  name: 'john',
  lastname: 'smith',
};

let bb = {
  name: 'john',
  lastname: 'smith',
};



window.isEqual = isEqual;

export default isEqual;