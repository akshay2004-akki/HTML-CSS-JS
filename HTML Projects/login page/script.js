let pass = 'akki04';
const form = document.querySelector(".myform");
const nameInput = form.querySelector('input[name="name"]');
const passwordInput = form.querySelector('input[name="password"]');
const overlay2 = document.querySelector(".overlay2");
const overlay = document.querySelector(".overlay");

const loginn=document.querySelector('.login');
const container=document.querySelector('.container');
const option=document.querySelector('.option');

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const enteredName = nameInput.value;
        const enteredPassword = passwordInput.value;

        if (enteredName==="Akshay Anand" && enteredPassword === pass) {
            overlay2.classList.remove('hidden');
            overlay.classList.add('hidden');
        } else {
            overlay.classList.remove('hidden');
            overlay2.classList.add('hidden');
        }
    }
});

loginn.addEventListener('click', function(){
    container.classList.remove('hide');
    option.classList.remove('hide');
});