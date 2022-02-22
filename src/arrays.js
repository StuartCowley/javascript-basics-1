const getNthElement = (index, array) => {
  // return the element at a given position if the index > array.length, else return the element at the start
  return array.length > index ? array[index] : array[index - array.length];
};

const arrayToCSVString = array => {
  // return a string based on a "," delimeter
  return array.join(',');
};

const csvStringToArray = string => {
  // return an array by splitting a string based on a "," delimeter
  return string.split(',');
};

const addToArray = (element, array) => {
  // append element to an array
  array.push(element);
};

const addToArray2 = (element, array) => {
  // return array unpacking array and appending element
  return [...array, element];
};

const removeNthElement = (index, array) => {
  // remove an element at the index param position
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // return an array converting the elements to string
  return numbers.map(number => String(number));
};

const uppercaseWordsInArray = strings => {
  // return an array with the strings converted to upper case
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  // return an array with the string elements reversed
  const reverseArray = [];
  strings.forEach(string =>
    reverseArray.push(
      string
        .split('')
        .reverse()
        .join('')
    )
  );
  return reverseArray;
};

const onlyEven = numbers => {
  // return an array with only even numbers filterd from the numbers param
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // return array with the nth element removed, without mutating original
  const copyArray = array.slice();
  copyArray.splice(index, 1);
  return copyArray;
};

const elementsStartingWithAVowel = strings => {
  // return array only with elements that start with a vowel
  return strings.filter(filterWord =>
    ['a', 'e', 'i', 'o', 'u'].includes(filterWord[0].toLowerCase())
  );
};

const removeSpaces = string => {
  // return string with spaces removed from original string param
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  // return sum of the number elements in the array
  return numbers.reduce((sum, cur) => sum + cur);
};

const sortByLastLetter = strings => {
  // sort the string elements in the array by the last letter of the element
  return strings.sort((a, b) => {
    if (a.slice(-1) < b.slice(-1)) {
      return -1;
    }
    if (a.slice(-1) > b.slice(-1)) {
      return 1;
    }
  });
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
