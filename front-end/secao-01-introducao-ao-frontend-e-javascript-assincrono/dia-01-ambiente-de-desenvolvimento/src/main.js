import validator from 'validator';
import './style.css';

const button = document.getElementById('button');
const input = document.getElementById('input');
const dropdown = document.getElementById('dropdown');
const text = document.getElementById('text');

const isEmail = () => {
  if (validator.isEmail(input.value)) {
    text.innerHTML = 'É um email';
  } else {
    text.innerHTML = 'Não é um email';
  }
};

const isDate = () => {
  if (validator.isDate(input.value, { format: 'DD/MM/YYYY' })) {
    text.innerHTML = 'É uma data válida';
  } else {
    text.innerHTML = 'Não é uma data válida';
  }
};

const isPhoneNumber = () => {
  if (validator.isMobilePhone(input.value, ['pt-BR'])) {
    text.innerHTML = 'É um número de telefone';
  } else {
    text.innerHTML = 'Não é um número de telefone';
  }
};

const isURL = () => {
  if (validator.isURL(input.value)) {
    text.innerHTML = 'É uma URL';
  } else {
    text.innerHTML = 'Não é uma URL';
  }
};

const isRgbColor = () => {
  if (validator.isRgbColor(input.value)) {
    text.innerHTML = 'É uma cor rgb';
  } else {
    text.innerHTML = 'Não é uma cor rgb';
  }
};

button.addEventListener('click', (event) => {
  const optionSelected = dropdown.options[dropdown.selectedIndex].text;
  event.preventDefault();
  if (optionSelected === 'email') {
    isEmail();
  } else if (optionSelected === 'data') {
    isDate();
  } else if (optionSelected === 'número de telefone') {
    isPhoneNumber();
  } else if (optionSelected === 'url') {
    isURL();
  } else if (optionSelected === 'cor rgb') {
    isRgbColor();
  }
});
