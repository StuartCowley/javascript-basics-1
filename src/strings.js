function sayHello(string) {
  // Return string passing in 'string' argument into template literal
  return `Hello, ${string}!`;
}

function uppercase(string) {
  // Return uppercase string using toUpperCase String method
  return string.toUpperCase();
}

function lowercase(string) {
  // Return lowercase string using toLowerCase String method
  return string.toLowerCase();
}

function countCharacters(string) {
  // Return lowercase string using toLowerCase String method
  return string.length;
}

function firstCharacter(string) {
  // return the character at index 0 of the string that's passed in
  return string[0];
}

function firstCharacters(string, n) {
  // return characters from index 0 to index n that's passed in
  return string.slice(0, n);
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
