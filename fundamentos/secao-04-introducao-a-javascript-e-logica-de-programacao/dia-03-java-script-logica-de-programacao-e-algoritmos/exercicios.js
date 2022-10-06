let fatoral = 10;
let resultado = fatoral;

for (let index = 1; index < fatoral; index += 1) {
  resultado = resultado * index;
}

console.log(resultado);



let word = 'arara';
let invertedWord = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
  invertedWord += word[index];
}

console.log(invertedWord);

let linguagensProgramacao = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = linguagensProgramacao[0];

for (let index = 0; index < linguagensProgramacao.length; index += 1) {
  if (linguagensProgramacao[index].length > maiorPalavra.length) {
    maiorPalavra = linguagensProgramacao[index];
  }
}

console.log(maiorPalavra);


let menorPalavra = linguagensProgramacao[0];

for (let index = 0; index < linguagensProgramacao.length; index += 1) {
  if (linguagensProgramacao[index].length < menorPalavra.length) {
    menorPalavra = linguagensProgramacao[index];
  }
}

console.log(menorPalavra);

let numerosPrimos = [];


for (let index = 2; index <= 50; index += 1) {
  let divisiveis = 0;
    for (let indexDentro = 1; indexDentro <= index; indexDentro += 1) {
      if (index % indexDentro === 0) {
      divisiveis += 1;
    }
  }
  if (divisiveis === 2) {
  numerosPrimos.push(index);
}
}

let maiorNumeroPrimo = numerosPrimos[0];

for (let index = 0; index < numerosPrimos.length; index += 1) {
  if (numerosPrimos[index] > maiorNumeroPrimo) {
    maiorNumeroPrimo = numerosPrimos[index];
  }
}

console.log(maiorNumeroPrimo);
