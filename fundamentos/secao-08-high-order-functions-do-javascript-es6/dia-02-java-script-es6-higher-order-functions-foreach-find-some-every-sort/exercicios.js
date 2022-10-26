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

function authorBornIn1947(books) {
  return books.find(element => element.author.birthYear === 1947).author.name;
}

//

function smallerName(books) {
  let nameBook = books[0].name;
  books.forEach((element) => {
    if (element.name.length < nameBook.length) {
      nameBook = element.name;
    }
  })
  return nameBook;
}

//

function getNamedBook(books) {
  return books.find(element => element.name.length === 26);
}

//

function booksOrderedByReleaseYearDesc(books) {
  books.sort((a, b) => b.releaseYear - a.releaseYear);
  return books;
}

//

function everyoneWasBornOnSecXX(books) {
  return books.every((element) => element.author.birthYear > 1901);
}

//

function someBookWasReleaseOnThe80s(books) {
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990)
}

//

function authorUnique(books) {
  const newBooks = books.some((element) => {
    const newBooks2 = books.some((element2) => (element2.author.name !== element.author.name) && (element2.author.birthYear === element.author.birthYear));
  return newBooks2;
  });
  return !newBooks;
} 
