const submitButton = document.getElementById('submit-button');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');

submitButton.addEventListener('click', function (event) {
  // event.preventDefault();
  if (inputEmail.value.length < 10 || inputName.value.length < 10) {
    alert('Dados Inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
  }
})