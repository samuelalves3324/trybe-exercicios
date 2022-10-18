const verify = () => {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if (value1 === '' || value2 === '') {
     throw new Error(`Preencha os dois campos!`);
  } else if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Insira apenas números');
  }
  const result = Number(value1) + Number(value2);
  return result;
}

function sum() {
  try {
    document.getElementById('result').innerHTML = `Resultado: ${verify()}`;
  } catch (error) {
    document.getElementById('result').innerHTML = error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}