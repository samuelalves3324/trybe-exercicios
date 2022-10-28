const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array) {
  return array.reduce((acc, cur) => {
    cur.forEach(element => acc.push(element));;
    return acc;
  }, [])
};

//

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function reduceNames(array) {
  return array.reduce((acc, cur) => {
    acc += cur.author.name + ', ';
    return acc;
  }, '');
};

//

function averageAge(array) {
  return array.map((element) => element.releaseYear - element.author.birthYear).reduce((acc, cur) => acc + cur) / array.length;
}

//

function longestNamedBook(array) {
  return array.reduce((acc, cur) => acc.name.length > cur.name.length ? acc : cur);
}

//

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  let counter = 0;
  return array.reduce((acc, cur) => {
    for (let i = 0; i < cur.length; i += 1) {
      if (cur[i] === 'a' || cur[i] === 'A') {
        counter += 1;
      }
    }
  return counter;
  }, counter)
};

//

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(students, grades) {
  return students.map((element, index) => {
    const media = grades[index].reduce((acc, cur) => acc + cur) / grades[index].length;
    return {
      name : element,
      average : media,
    };
  })
}


