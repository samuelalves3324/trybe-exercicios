document.getElementById('main-text').style.backgroundColor = localStorage.getItem('background-color');
document.getElementById('main-text').style.color = localStorage.getItem('font-color');
document.getElementById('main-text').style.fontSize = localStorage.getItem('font-size');
document.getElementById('main-text').style.fontWeight = localStorage.getItem('font-weigth');
document.getElementById('main-text').style.fontFamily = localStorage.getItem('font');

function createColorOptions (backColor, className) {
    let newElement = document.createElement('button');
    newElement.className = 'colors';
    newElement.style.height = '50px';
    newElement.style.width = '50px';
    newElement.style.marginLeft = '20px'
    newElement.style.backgroundColor = backColor;
    document.getElementsByClassName(className)[0].appendChild(newElement);
}

createColorOptions('blue', 'options1');
createColorOptions('yellow', 'options1');
createColorOptions('red', 'options1');

createColorOptions('blue', 'options2');
createColorOptions('yellow', 'options2');
createColorOptions('red', 'options2');

function createFontOptions (className, fontOption) {
  let newElement = document.createElement('button');
  newElement.className = 'font-options';
  newElement.style.height = '50px';
  newElement.style.width = '85px';
  newElement.style.marginLeft = '20px'
  newElement.innerHTML = fontOption;
  document.getElementsByClassName(className)[0].appendChild(newElement);
}

createFontOptions('options3', '18px');
createFontOptions('options3', '20px');
createFontOptions('options3', '22px');

createFontOptions('options4', '20px');
createFontOptions('options4', '25px');
createFontOptions('options4', '30px');

createFontOptions('options5', 'Arial');
createFontOptions('options5', 'sans-serif');
createFontOptions('options5', 'monospace');

let backColorSelection = document.getElementsByClassName('options1')[0];
let fontColorSelection = document.getElementsByClassName('options2')[0];
let fontSizeSelection = document.getElementsByClassName('options3')[0];
let fontWeigthSelection = document.getElementsByClassName('options4')[0];
let fontSelection = document.getElementsByClassName('options5')[0];

backColorSelection.addEventListener('click', function (event) {
  document.getElementById('main-text').style.backgroundColor = event.target.style.backgroundColor;
  localStorage.setItem('background-color', event.target.style.backgroundColor);
})

fontColorSelection.addEventListener('click', function (event) {
  document.getElementById('main-text').style.color = event.target.style.backgroundColor;
  localStorage.setItem('font-color', event.target.style.backgroundColor);
})

fontSizeSelection.addEventListener('click', function (event) {
  document.getElementById('main-text').style.fontSize = event.target.innerHTML;
  localStorage.setItem('font-size', event.target.innerHTML);
})

fontWeigthSelection.addEventListener('click', function (event) {
  document.getElementById('main-text').style.lineHeight = event.target.innerHTML;
  localStorage.setItem('font-weigth', event.target.innerHTML);
})

fontSelection.addEventListener('click', function (event) {
  document.getElementById('main-text').style.fontFamily = event.target.innerHTML;
  localStorage.setItem('font', event.target.innerHTML);
})


function createClear () {
  let newElement = document.createElement('button');
  newElement.id = 'clear';
  newElement.style.height = '50px';
  newElement.style.width = '85px';
  newElement.style.marginLeft = '20px'
  newElement.innerHTML = 'Restaurar padrão';
  document.getElementById('text-options').appendChild(newElement);
}

createClear();
let clearButton = document.getElementById('clear');

clearButton.addEventListener('click', function (event) {
  localStorage.clear();
})