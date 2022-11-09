import "./style.css"

const img = document.getElementById('img');
const text = document.getElementById('text');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  const randomNumber = Math.round(Math.random() * 731)
  fetch(`https://akabab.github.io/superhero-api/api/id/${randomNumber}.json`)
  .then(response => response.json())
  .then(data => {
  img.src = data.images.lg;
  text.innerHTML = data.name;
  })
  .catch(error => alert(`Número sorteado inválido`))
})

