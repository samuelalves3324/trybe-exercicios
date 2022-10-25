const newEmployees = (func) => {
  const name = func;
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const addNewEmployees = (employee) => {
  let email = employee.toLowerCase().split('');
  for (let i = 0; i < email.length; i += 1) {
    if (email[i] === ' ') {
      email[i] = '_';
    }
  }
  email = email.join('');
  email = `${email}@trybe.com`
  return { nome : employee, email : email };
}

//

const raffle = (number, func) => {
  if (number === func()) {
    return 'Parabéns você ganhou';
  } 
  return 'Tente novamente';
}

const randomNumber = () => {
  return Math.ceil(Math.random() * 5);
}

//

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrector = (soluctions, answers, func) => {
  return func(soluctions, answers);
}

const comparator = (soluctions, answers) => {
  let counter = 0;
  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i] === soluctions[i]) {
      counter += 1;
    } else if (answers[i] === 'N.A') {
      counter = counter;
    } else {
      counter -= 0.5;
    }
  }
  return counter;
}