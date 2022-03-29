const full = document.querySelector(".container");
full.style.backgroundColor = 'orange';

const input = document.querySelector('input');
const title = document.querySelector('.title');

input.onchange = handleInputChange;

function handleInputChange(e) {
    console.log(e.target.value);
    title.textContent = e.target.value;
}

const colors = ['red', 'green', 'blue'];

// We will impement randomization for our app background color;
// Todo Add