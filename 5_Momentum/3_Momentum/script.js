let time = document.querySelector('.time');
let greeting = document.querySelector('.greeting');
let myName = document.querySelector('.myName');
let myFocus = document.querySelector('.myFocus');

function showTime() {
  let today = new Date();
  // console.log(today);
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  // output time
  time.innerText = `${hour}:${addZero(minute)}`;
  setTimeout(showTime, 1000);
};

// add zero
function addZero(number) {
  if(number < 10) {
    return '0' + number;
  } else {
    return number;
  };
};

// set background
function setBackground() {
  let today = new Date();
  let hour = today.getHours();
  // console.log(hour);

  if(hour < 12) {
    document.body.style.backgroundImage = "url('./images/bg1.jpg')";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    greeting.innerText = 'Good morning, ';
  } else if(hour < 18) {
    document.body.style.backgroundImage = "url('./images/bg2.jpg')";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    greeting.innerText = 'Good afternoon, ';
  } else {
    document.body.style.backgroundImage = "url('./images/bg3.jpg')";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    greeting.innerText = 'Good evening, ';
  };
};

// get name 
function getName() {
  // console.log(localStorage.getItem('name'));
  if(localStorage.getItem('name') === null) {
    myName.innerText = '[Enter name]';
  } else {
    myName.innerText = localStorage.getItem('name');
  };
};

// get name 
function getName() {
  // console.log(localStorage.getItem('focus'));
  if(localStorage.getItem('focus') === null) {
    myFocus.innerText = '[Enter focus]';
  } else {
    myFocus.innerText = localStorage.getItem('focus');
  };
};

// event
myName.addEventListener('keydown', setName);

// set name
function setName(event) {
  // console.log(event);
  if(event.key === 'Enter') {
    localStorage.setItem('name', event.target.innerText);
    myName.blur();
  };
};

// event
myFocus.addEventListener('keydown', setFocus);

// set focus
function setFocus(event) {
  console.log(event);
  if(event.key === 'Enter') {
    localStorage.setItem('focus', event.target.innerText);
    myFocus.blur();
  };
};

showTime();
setBackground();
getName();
getName();