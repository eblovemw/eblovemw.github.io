const $loginForm = document.querySelector("#login-form");
const $loginInput = $loginForm.querySelector("input");
const $greetings = document.querySelector("#greetings");



function hello(name) {
    $loginForm.classList.add('hidden');
    $greetings.classList.remove('hidden');

    $greetings.innerText = `Hello, ${name} :)`;
}


function loginSubmit(e) {
    e.preventDefault();
    const name = $loginInput.value;
    localStorage.setItem('name', name);
    hello(name);
}


const localStorageName = localStorage.getItem('name');
if (localStorageName === null) {
    // login X -> form 보여주기
    $loginForm.classList.remove('hidden');
    $loginForm.addEventListener("submit", loginSubmit);
} else {
    // login O -> form 숨기고, 인사말 보여주기
    hello(localStorageName);
}
