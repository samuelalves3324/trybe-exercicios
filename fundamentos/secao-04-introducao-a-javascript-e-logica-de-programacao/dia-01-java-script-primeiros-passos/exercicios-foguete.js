const n1 = 33;
const n2 = 97;
const n3 = 65;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
  console.log('true')
}
else {
  console.log('false')
}

const n4 = 54;
const n5 = 97;
const n6 = 56;

if (n4 % 2 !== 0 || n5 % 2 !== 0 || n6 % 2 !== 0) {
  console.log('true')
}
else {
  console.log('false')
}

const custoProduto = 10;
const valorVenda = 20;
let lucro = 0;
const impostoSobreCusto = (20 * custoProduto) / 100;

if (custoProduto > 0 && valorVenda > 0) {
  let valorCustoTotal = custoProduto + impostoSobreCusto;
  lucro = valorVenda - valorCustoTotal;
  console.log(lucro)
}
else {
  console.log('erro')
}

const salario = 3000;
let salarioLiquido = 0;

if (salario <= 1556.94) {
  salarioLiquido = salario - ((8 * salario) / 100);
}
else if (salario > 1556.94 && salario <= 2594.92) {
  salarioLiquido = salario - ((9 * salario) / 100);
}
else if (salario > 2594.92 && salario <= 5189.82) {
  salarioLiquido = salario - ((11 * salario) / 100);
}
else if (salario > 5189.82) {
  salarioLiquido = salario - 570.88;
}

if (salarioLiquido <= 1903.98) {
  console.log(salarioLiquido)
}
else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
  let ir = ((7.5 * salarioLiquido) / 100) - 142.80;
  salarioLiquido = salarioLiquido - ir;
  console.log(salarioLiquido)
}
else if (salarioLiquido > 2826.65 && salarioLiquido <= 3751.05) {
  let ir = ((15 * salarioLiquido) / 100) - 354.80;
  salarioLiquido = salarioLiquido - ir;
  console.log(salarioLiquido)
}
else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
  let ir = ((22.5 * salarioLiquido) / 100) - 636.13;
  salarioLiquido = salarioLiquido - ir;
  console.log(salarioLiquido)
}
else if (salarioLiquido > 4664.68) {
  let ir = ((27.5 * salarioLiquido) / 100) - 869.36;
  salarioLiquido = salarioLiquido - ir;
  console.log(salarioLiquido)
}
else {
  console.log('Erro')
}