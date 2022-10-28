const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  // console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

//

const sum = (...numbers) => {
  return numbers.reduce((acc, cur) => acc + cur);
}

//

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};
// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

// complete a assinatura da função abaixo
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
// <nome> tem <anos de idade> e gosta de <gostos da pessoa>

// Retornos esperados:
// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

//

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
    // bornIn: nascido em
];

const filterPeople = (people) => {
  return people.filter((element) => {
    const { bornIn } = element;
    const { nationality } = element;
    if (bornIn > 1900 && bornIn < 2001 && nationality === 'Australian') {
      return element;
    };
  });
};
//

const myList = [5, 2, 3];

const swap = (array) => {
  let [a,b,c] = array;
  return array = [a,b,c] = [c,b,a];
}

//

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];


const toObject = (array) => {
  const [a, b, c] = array;
  return {
    nome : a,
    marca : b,  
    ano : c,
  }
};

//

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
     // measurementUnit: unidade de medida
];

// escreva shipLength abaixo
const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;


//

const greet = (name, phrase = 'Hi') => `${phrase} ${name}`;

//


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const {spring, summer, autumn, winter} = yearSeasons;

const year = [...spring, ...summer, ...autumn, ...winter];

//