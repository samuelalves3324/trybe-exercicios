let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]+ numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];

console.log(soma);

let media = soma / numbers.length;

console.log(media);

if (media > 20) {
  console.log('valor maior que 20');
}
else {
  console.log('valor menor ou igual a 20');
}

let numerosImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numerosImpares += 1;
  }
}
if (numerosImpares === 0) {
  console.log('nenhum valor ímpar encontrado');
}
else{
   console.log(numerosImpares);
}

let numeros = [];

for (let index = 1; index < 26; index += 1) {
  numeros.push(index)
  
}
console.log(numeros)

for (let index = 0; index < numeros.length; index += 1) {
  console.log(numeros[index] / 2); 
}

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
  for (let indexComparador = 0; indexComparador < numbers.length; indexComparador += 1) {
    if (numbers[index] > numbers[indexComparador] && numbers[index] > maiorNumero) {
      maiorNumero = numbers[index];
    }
  }
}
console.log(maiorNumero);

let menorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
  for (let indexComparador = 0; indexComparador < numbers.length; indexComparador += 1) {
    if (numbers[index] < numbers[indexComparador] && numbers[index] < menorNumero) {
      menorNumero = numbers[index];
    }
  }
}
console.log(menorNumero);