import "./style.css"

const img = document.getElementById('img');
const text = document.getElementById('text');
const button = document.getElementById('button');
const trueName = document.getElementById('true-name');

button.addEventListener('click', () => {
  const randomNumber = Math.round(Math.random() * 731)
  fetch(`https://akabab.github.io/superhero-api/api/id/${randomNumber}.json`)
  .then(response => response.json())
  .then(data => {
  img.src = data.images.md;
  text.innerHTML = data.name;
  trueName.innerHTML = `Nome verdadeiro: ${data.biography.fullName}`;
  })
  .catch(error => alert(`Número sorteado inválido`))
})

