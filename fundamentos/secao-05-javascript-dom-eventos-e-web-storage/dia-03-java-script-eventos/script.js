function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

function createDays() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let day = document.createElement('li');
    day.innerHTML = decemberDaysList[i];
    day.className = 'day';
    document.getElementById('days').appendChild(day);

    if ([24, 25, 31].includes(decemberDaysList[i])) {
      day.classList.add('holiday');
    }
    if ([4, 11, 18, 25].includes(decemberDaysList[i])) {
      day.classList.add('friday');
    }
  }
}

createDays();

function createButtonHolidays(nameButton) {
  let buttonHolidays = document.createElement('button');
  buttonHolidays.id = 'btn-holiday';
  buttonHolidays.innerHTML = nameButton;
  document.getElementsByClassName('buttons-container')[0].appendChild(buttonHolidays);
}

createButtonHolidays('Feriados');

let onOff = 'on';
let clickButton = document.getElementById('btn-holiday');
clickButton.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  let arrayClass = document.getElementsByClassName('holiday');
  if (onOff === 'on') {
    for (let i = 0; i < arrayClass.length; i += 1) {
      arrayClass[i].style.backgroundColor = 'orange';
    }
    onOff = 'off';
  } else {
    for (let i = 0; i < arrayClass.length; i += 1) {
      arrayClass[i].style.backgroundColor = 'rgb(238,238,238)';
    }
    onOff = 'on';
  }
}


function createButtonFridays(nameButton) {
  let buttonFridays = document.createElement('button');
  buttonFridays.id = 'btn-friday';
  buttonFridays.innerHTML = nameButton;
  document.getElementsByClassName('buttons-container')[0].appendChild(buttonFridays);
}

createButtonFridays('Sexta-feira');

let zeroOrOne = 0;
let clickButtonFriday = document.getElementById('btn-friday');
clickButtonFriday.addEventListener('click', changeText);

function changeText() {
  let arrayClassFriday = document.getElementsByClassName('friday');
  let fridays = [4, 11, 18, 25];
  if (zeroOrOne === 0) {
    for (let i = 0; i < arrayClassFriday.length; i += 1) {
      arrayClassFriday[i].innerHTML = 'Sextou!';
    }
    zeroOrOne = 1;
  } else {
    for (let i = 0; i < arrayClassFriday.length; i += 1) {
      arrayClassFriday[i].innerHTML = fridays[i];
    } 
    zeroOrOne = 0;
  }
}

let dayList = document.getElementById('days');

dayList.addEventListener('mouseover', function (element) {
  if (element.target.classList.contains('day')) {
  element.target.style.fontSize = 40 + 'px';
  }
})
dayList.addEventListener('mouseout', function (element) {
  if (element.target.classList.contains('day')) {
    element.target.style.fontSize = 20 + 'px';
  }
})


function addTask(taskName) {
  let taskList = document.createElement('span');
  taskList.innerHTML = taskName;
  document.getElementsByClassName('my-tasks')[0].appendChild(taskList);
}

addTask('Jogar');


function addSubtitle(color) {
  let subtitle = document.createElement('div');
  subtitle.className = 'task';
  subtitle.style.backgroundColor = color;
  document.getElementsByClassName('my-tasks')[0].appendChild(subtitle);
}

addSubtitle('green')

let taskButton = document.getElementsByClassName('my-tasks')[0];

taskButton.addEventListener('click', function (event) {
  if (event.target.classList.contains('task') && event.target.classList.contains('select')) {
    event.target.classList.remove('select');
  }
  else if (event.target.classList.contains('task')) {
    event.target.classList.add('select');
  } 
})

dayList.addEventListener('click', function(event) {
  if (event.target.classList.contains('day') && event.target.classList.contains('on')) {
    event.target.style.color = 'rgb(119,119,119)';
    event.target.classList.remove('on');
  }
  else if (event.target.classList.contains('day')) {
    event.target.style.color = document.getElementsByClassName('select')[0].style.backgroundColor;
    event.target.classList.add('on');
  }
})

let myCommitment = document.createElement('ul');
myCommitment.id = 'commitment-list'
document.getElementsByTagName('body')[0].appendChild(myCommitment);

let messageBox = document.getElementById('task-input');
let buttonAdd = document.getElementById('btn-add');

buttonAdd.addEventListener('click', function(event) {
  if (messageBox.value.length > 0) {
    let commitmentList = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(commitmentList);
    commitmentList.innerHTML = messageBox.value;
    commitmentList.style.width = '100%';
    commitmentList.style.textAlign = 'center';
    commitmentList.style.color = '#666';
    commitmentList.style.fontSize = '20px';
  } else {
    alert('erro');
  }
})

messageBox.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    if (messageBox.value.length > 0) {
      let commitmentList = document.createElement('div');
      document.getElementsByTagName('body')[0].appendChild(commitmentList);
      commitmentList.innerHTML = messageBox.value;
      commitmentList.style.width = '100%';
      commitmentList.style.textAlign = 'center';
      commitmentList.style.color = '#666';
      commitmentList.style.fontSize = '20px';
      
    } else {
      alert('erro');
    }
  }
})