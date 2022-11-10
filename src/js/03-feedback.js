const form = document.querySelector(`.feedback-form`);
const user = {};
const throttle = require('lodash.throttle');



function userData(event) {
  user[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(user));
}

function refresh() {
  let memory = localStorage.getItem('feedback-form-state');
  console.log(memory);
  if (memory) {
    memory = JSON.parse(memory);
    Object.entries(memory).forEach(([name, value]) => {
      console.log(name);
      console.log(value);
      form.elements[name].value = value;
    });
  }
}

function onSubmit(e) {
  e.preventDefault();
  console.log(user);
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}

form.addEventListener(`input`, throttle(userData, 500));
form.addEventListener(`submit`, onSubmit);

refresh()