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

function formatedBookNames(books) {
  return books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
}

//

function nameAndAge(books) {
  const newBooks = books.map((element) => {
    const ageBook = element.releaseYear - element.author.birthYear;
    return {
      age : ageBook,
      author : element.author.name,
    }
  });
  return newBooks.sort((a, b) => a.age - b.age);
}

//

function fantasyOrScienceFiction(books) {
  return books.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');
}

//

function oldBooksOrdered(books) {
  const newBooks = books.filter((element) => (2022 - element.releaseYear) > 60);
  return newBooks.sort((a, b) => a.releaseYear - b.releaseYear);
}

//

function fantasyOrScienceFictionAuthors(func) {
  const newBooks = func.map((element) => element.author.name);
  return newBooks.sort();
}

//

function oldBooks(func) {
  const newBooks = func.map((element) => element.name);
  return newBooks.sort();
}

//

function authorWith3DotsOnName(books) {
  const newBooks = books.find((element) => element.author.name[1] === '.' && element.author.name[4] === '.' && element.author.name[7] === '.');
  return newBooks.name;
}

//