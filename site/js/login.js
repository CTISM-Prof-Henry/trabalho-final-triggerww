const form = document.getElementById('login');
const btn_login = document.getElementById('btn-login');

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const login = localStorage.getItem(email);

    if(senha === login) {
        btn_login.style.backgroundColor = 'var(--confirmar)';
        btn_login.value = 'Logando';

        setTimeout(() => {
            location.href = 'adotar-protetor.html';
        }, 1000);
    } else {
        btn_login.style.backgroundColor = 'var(--erro)';
        btn_login.value = 'Login inválido';

        setTimeout(() => {
            btn_login.style.backgroundColor = 'var(--cor-principal-500)';
            btn_login.value = 'Entrar';
        }, 1500);
    }
}

form.addEventListener('submit', login);