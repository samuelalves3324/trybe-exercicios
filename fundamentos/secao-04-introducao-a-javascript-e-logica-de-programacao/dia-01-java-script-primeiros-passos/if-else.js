const n1 = 30;
const n2 = 17;

if (n1 > n2) {
  console.log(n1);
}
else {
  console.log(n2);
}

const n3 = 45;
const n4 = 95;
const n5 = 107;

if (n3 > n4 && n3 > n5) {
  console.log(n3);
}
else if (n4 > n5 && n4 > n3) {
  console.log(n4);
}
else {
  console.log(n5);
}

let valor = -30; 

if (valor > 0) {
  console.log('positive');
}
else if (valor < 0) {
  console.log('negative');
}
else {
  console.log('zero');
}

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

if ((angulo1 + angulo2 + angulo3) == 180) {
  console.log('true');
}
else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log('erro')
}
else {
  console.log('false')
}

let nota = 0;

if (nota >= 90 && nota <= 100) {
  console.log('A');
}
else if (nota >= 80 && nota < 90) {
  console.log('B');
}
else if (nota >= 70 && nota < 80) {
  console.log('C');
}
else if (nota >= 60 && nota < 70) {
  console.log('D');
}
else if (nota >= 50 && nota < 60) {
  console.log('E');
}
else if (nota < 50 && nota > 0) {
  console.log('F');
}
else {
  console.log('erro')
}