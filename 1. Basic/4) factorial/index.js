function factorial(n) {
  for (let i = n - 1; i >= 1; i--) {
    n = n * i;
  }
  return n;
}


window.factorial = factorial;

export default factorial;
