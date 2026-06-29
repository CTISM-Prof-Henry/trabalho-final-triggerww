const form = document.getElementById('login');
const btn = document.getElementById('btn-login');

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const login = localStorage.getItem(email);

    if(senha === login) {
        btn.style.backgroundColor = 'var(--confirmar)';
        btn.value = 'Logando';
        localStorage.setItem(status, 'logado');

        setTimeout(() => {
            location.href = 'adotar-protetor.html';
        }, 1000);
    } else {
        btn.style.backgroundColor = 'var(--erro)';
        btn.value = 'Login inválido';

        setTimeout(() => {
            btn.style.backgroundColor = 'var(--cor-principal-500)';
            btn.value = 'Entrar';
        }, 1500);
    }
}

form.addEventListener('submit', login);