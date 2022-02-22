const createPerson = (name, age) => {
  // Create an object based on the name and age arguments
  return { name, age };
};

const getName = object => {
  // Return the name property based on the object passed in
  return object.name;
};

const getProperty = (property, object) => {
  // Return object[property] based on the property String that's passed in
  return object[property];
};

const hasProperty = (property, object) => {
  // Return true or false based on the hasOwnProperty method to check if property exists
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  // Return true or false is person.age is > than 65 using a ternary operator
  return person.age > 65;
};

const getAges = people => {
  // Return new array with the person.age value using the map array method
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  // Return object with person.name that matches name String that's passed in using array filter method
  // 01
  // return people.filter(person => person.name === name)[0];
  // 02
  return people.filter(person => person.name === name).pop();
};

const findHondas = cars => {
  // Return array of objects where car.manufacturer matches 'Honda' using array filter method
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  // Return the average of the passed in people objects property using the array reduce method
  return people.reduce((sum, acc) => sum + acc.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  // Return object with name, age properties and an introduce method
  return {
    name,
    age,
    introduce: function(yourName) {
      return `Hi ${yourName}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
