const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65 ? true : false;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.filter(person => person.name === name)[0];
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  return people.reduce((sum, acc) => sum + acc.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
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
