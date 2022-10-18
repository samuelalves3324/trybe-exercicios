const testingScope = (escopo) => {
  if (escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

// testingScope(false);



const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  return array.sort(function(a, b) {
    return a - b;
  });
}
// console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉



const factorial = (number) => {
  let result = number;
  for (let i = number - 1; i > 0; i -= 1) {
    result *= i;
  }
  return `Esse é o fatorial ${result}`;
}

// console.log(factorial(4));


const longestWord = (phrase) => {
  let newPhrase = phrase.split(' ');
  let result = newPhrase[0];

  for (let i = 0; i < newPhrase.length; i += 1) {
    if (newPhrase[i].length > result.length) {
      result = newPhrase[i];
    }
  }
  return result;
}

// console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));



const substituaX = (nome) => {
  const frase = `Tryber ${nome} aqui!`;
  return frase;
}
// console.log(substituaX('Samuel'));


const minhasSkills = (função) => {
  const skills = `JavaScript
  HTML
  CSS`;
  let result = `${função}
  Minhas três principais habilidades são: 
  ${skills}`
  return result;
}
console.log(minhasSkills(substituaX('Samuel')));