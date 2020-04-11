const input = document.querySelector('.txt');
const warning = document.getElementById('red');
document.querySelector('.btn').addEventListener('click', () => {
    if (input.value === '') {
        warning.innerText = "Whoops! It looks like you forgot to add your email";
        input.style.border = 'var(--Light-Red) 1px solid';
    } else if (input.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
        warning.innerText = '';
        input.style.border = 'var(--Pale-Blue) 1px solid';
    } else {
        warning.innerText = 'Please provide a valid email address';
        input.style.border = 'var(--Light-Red) 1px solid';
    }
});