const form = document.getElementById('login');
const btn = document.getElementById('btn-registrar');

function registrar(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if(localStorage.getItem(email) === null) {
        localStorage.setItem(email, senha);
        btn.style.backgroundColor = 'var(--confirmar)';
        btn.style.color = 'white';
        btn.style.border = '2px solid var(--confirmar)';
        btn.value = 'Registrado';

        setTimeout(() => {
            location.href = 'login.html';
        }, 1000);
    } else {
        btn.style.backgroundColor = 'var(--erro)';
        btn.style.color = 'white';
        btn.style.border = '2px solid var(--erro)';
        btn.value = 'E-mail já existe'

        setTimeout(() => {
            btn.style.backgroundColor = 'white';
            btn_registro.style.color = 'var(--cor-principal-500)';
            btn_registro.style.border = '2px solid var(--cor-principal-500)';
            btn_registro.value = 'Registrar'
        }, 1500);
    }
}

form.addEventListener('submit', registrar);