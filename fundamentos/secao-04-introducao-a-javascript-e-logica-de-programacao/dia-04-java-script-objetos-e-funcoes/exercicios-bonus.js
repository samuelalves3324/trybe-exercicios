function storesRomans() {
  const romans = {
    I : 1,
    IV : 4,
    V : 5,
    IX : 9,
    X : 10,
    XL : 40,
    L : 50,
    XC : 90,
    C : 100,
    CD : 400,
    D : 500,
    CM : 900,
    M : 1000,
  }
  return romans;
}

function romanNumerals(stringRomanNumerals) {
  const numbersRomans = storesRomans();
  let result = 0;
  for (let i = 0; i < stringRomanNumerals.length; i += 1) {
    for (let key in numbersRomans) {
      if (stringRomanNumerals[i] === key) {
        result += numbersRomans[key];
      }
    }
  }
  return result;
}
romanNumerals('CMXCIX');


function arrayOfNumbers(vector) {
  let result = [];

  for (let i = 0; i < vector.length; i += 1) {
    let iLength = vector[i].length;
    for (let j = 0; j < iLength; j += 1) {
      if (vector[i][j] % 2 === 0) {
        result.push(vector[i][j]);
      }
    }
  }
  return result;
}

//console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

function countRepetitions(fruitsArray) {
  let result = {};
  result[fruitsArray[0]] = 0;
  for (let i = 0; i < fruitsArray.length; i += 1) {
    for (let key in result) {
      if (fruitsArray[i] === result[key]) {
        result[key] += 1;
      }
    
    }
  }
  console.log(result);
}

countRepetitions([
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
])