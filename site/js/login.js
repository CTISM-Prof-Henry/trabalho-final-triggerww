// Só para conseguir registrar os pets.

const form = document.querySelector('.login');
const botao = document.querySelector('.btn-login');

function login(event) {
    event.preventDefault();

    let email = document.getElementById('email').value; 
    let senha = document.getElementById('senha').value;

    if(email == "admin" && senha == "1234") {
        botao.style.background = 'var(--confirmar)';
        botao.value = 'Logando';

        setTimeout(() => {
            location.href = "adotar-protetor.html";
        }, 1000);
    } else {
        botao.style.background = 'var(--erro)';
        botao.value = 'Login inválido!';

        setTimeout(() => {
            botao.style.background = 'var(--cor-principal-500)';
            botao.value = 'Entrar';
        }, 1500); 
    }
}

form.addEventListener('submit', login);
