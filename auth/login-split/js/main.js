document.addEventListener('DOMContentLoaded', () => {

const buttons = document.querySelectorAll('.theme-switcher button');
const body = document.body;

buttons.forEach(btn => {

btn.addEventListener('click', () => {

const theme = btn.getAttribute('data-theme');

body.className = `theme-${theme}`;

});

});

// Simulação de submit para evitar reload

document.getElementById('loginForm').addEventListener('submit', (e) => {

e.preventDefault();

const btn = e.target.querySelector('.btn-primary');

btn.textContent = 'Autenticando...';

setTimeout(() => {

btn.textContent = 'Acessar Painel';

}, 1500);

});

});
