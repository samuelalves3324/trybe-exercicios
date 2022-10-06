function palindromo(word) {
  let wordReversed = '';

  for (let index = word.length - 1; index >= 0; index -= 1) {
    wordReversed += word[index];
  }

  if (wordReversed === word) {
    return 'true';
  } else {
    return 'false';
  }
 
}
//console.log(palindromo('trybe'));

function biggest(arrayInteiros) {
  let biggestInt = arrayInteiros[0];
  let indexInt = 0;
  for (let index = 0; index < arrayInteiros.length; index += 1) {
    if (arrayInteiros[index] > biggestInt) {
      biggestInt = arrayInteiros[index];
      indexInt = index;
    }
  }
  return indexInt;
}

//console.log(biggest([2, 3, 6, 7, 10, 1]));

function least(arrayInteiros) {
  let leastInt = arrayInteiros[0];
  let indexInt = 0;
  for (let index = 0; index < arrayInteiros.length; index += 1) {
    if (arrayInteiros[index] < leastInt) {
      leastInt = arrayInteiros[index];
      indexInt = index;
    }
  }
  return indexInt;
}

//console.log(least([2, 4, 6, 7, 10, 0, -3]));

function biggestCharacter(arrayNames) {
  let biggestWord = arrayNames[0];

  for (let index = 0; index < arrayNames.length; index += 1) {
    if (arrayNames[index].length > biggestWord.length) {
      biggestWord = arrayNames[index];
    }
  }
  return biggestWord;
}
//console.log(biggestCharacter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function mostRepeated (arrayInteiros) {
  let numberMostRepeated = 0;
  let counterTotal = 0;
  
  for (let index = 0; index < arrayInteiros.length; index += 1) {
    let counter = 0;
    for (let indexDentro = 0; indexDentro < arrayInteiros.length; indexDentro += 1) {
      if (arrayInteiros[index] === arrayInteiros[indexDentro]) {
        counter += 1;
      }
    }
    if (counter > counterTotal) {
      counterTotal = counter;
      numberMostRepeated = arrayInteiros[index];
    }
  }
  return numberMostRepeated;
}

//console.log(mostRepeated([3, 3, 2, 5, 8, 2, 3]));

function sumattion(number) {
  let result = 0;

  for (index = 1; index <= number; index += 1) {
    result += index;
  }
  return result;
}

//console.log(sumattion(5));

function stringEndingVerify(stringWord, stringEnding) {
  let wordCut = '';

  for (let index = stringWord.length - stringEnding.length; index < stringWord.length; index += 1) {
    wordCut += stringWord[index];
  }
  if (wordCut === stringEnding) {
    return 'true';
  }
  else {
    return 'false';
  }
}
console.log(stringEndingVerify('samuel', 'uel'));