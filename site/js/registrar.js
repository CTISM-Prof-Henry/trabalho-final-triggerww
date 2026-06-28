const form = document.getElementById('login');
const btn_registro = document.getElementById('btn-registrar');

function registrar(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if(localStorage.getItem(email) === null) {
        localStorage.setItem(email, senha);
        btn_registro.style.backgroundColor = 'var(--confirmar)';
        btn_registro.style.color = 'white';
        btn_registro.style.border = '2px solid var(--confirmar)';
        btn_registro.value = 'Registrado';

        setTimeout(() => {
            location.href = 'login.html';
        }, 1000);
    } else {
        btn_registro.style.backgroundColor = 'var(--erro)';
        btn_registro.style.color = 'white';
        btn_registro.style.border = '2px solid var(--erro)';
        btn_registro.value = 'E-mail já existe'

        setTimeout(() => {
            btn_registro.style.backgroundColor = 'white';
            btn_registro.style.color = 'var(--cor-principal-500)';
            btn_registro.style.border = '2px solid var(--cor-principal-500)';
            btn_registro.value = 'Registrar'
        }, 1000);
    }
}

form.addEventListener('submit', registrar);