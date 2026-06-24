const form = document.querySelector('.login');
const botao = document.querySelector('.btn-login');

function login(event) {
    event.preventDefault();

    let email = document.getElementById('email').value; 
    let senha = document.getElementById('senha').value;

    if(email == "admin" && senha == "1234") {
        location.href = "cadastrar-pet.html";
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
