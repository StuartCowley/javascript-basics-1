function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  return a !== b;
}

function truthiness(a) {
  return !!a;
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  return a % 2 !== 0;
}

function isEven(a) {
  return a % 2 === 0;
}

function isSquare(a) {
  return Math.sqrt(a) % 1 === 0;
}

function startsWith(char, string) {
  return string[0] === char;
}

function containsVowels(string) {
  // 01
  // const stringLower = string.toLowerCase();
  // for (let i = 0; i <= string.length; i += 1) {
  //   if (
  //     stringLower[i] === 'a' ||
  //     stringLower[i] === 'e' ||
  //     stringLower[i] === 'i' ||
  //     stringLower[i] === 'o' ||
  //     stringLower[i] === 'u'
  //   ) {
  //     return true;
  //   }
  // }
  // return false;
  // 02
  return ['a', 'e', 'i', 'o', 'u'].some(vowel =>
    string.toLowerCase().includes(vowel)
  );
}

function isLowerCase(string) {
  const stringLower = string.toLowerCase();
  for (let i = 0; i <= string.length; i += 1) {
    if (string[i] !== stringLower[i]) return false;
  }
  return true;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
