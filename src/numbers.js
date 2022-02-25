function add(a, b) {
  // return a added to b that's passed in
  return a + b;
}

function subtract(a, b) {
  // return b subtract from a that's passed in
  return a - b;
}

function multiply(a, b) {
  // return a multiplied by b that's passed in
  return a * b;
}

function divide(a, b) {
  // return a divided by b that's passed in
  return a / b;
}

function power(a, b) {
  // return a to the power of b that's passed in
  return a ** b;
}

function round(a) {
  // return a to the power of b that's passed in
  return Math.round(a);
}

function roundUp(a) {
  // return rounded up a that's passed in
  return Math.ceil(a);
}

function roundDown(a) {
  // return rounded down a that's passed in
  return Math.floor(a);
}

function absolute(a) {
  // return absolute value for a that's passed in
  return Math.abs(a);
}

function quotient(a, b) {
  // return quotient value for a divided by b that's passed in
  return Math.trunc(a / b);
}

function remainder(a, b) {
  // return remainder value of a divided by b that's passed in
  return a % b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
