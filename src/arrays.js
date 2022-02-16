const getNthElement = (index, array) => {
  return array.length > index ? array[index] : array[index - array.length];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return [...array, element];
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => String(number));
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
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
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const copyArray = array.slice();
  copyArray.splice(index, 1);
  return copyArray;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(filterWord =>
    ['a', 'e', 'i', 'o', 'u'].includes(filterWord[0].toLowerCase())
  );
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((sum, cur) => sum + cur);
};

const sortByLastLetter = strings => {
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
