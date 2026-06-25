const botao = document.getElementById('cadastrar');
const formulario = document.getElementById('cadastro');
const fundo = document.getElementById('fundo');

function mostrar() {
    if (formulario.style.display === 'none' || formulario.style.display === '') {
        formulario.style.display = 'block';
        fundo.style.display = 'block';
    } 
}

botao.addEventListener('click', mostrar);

function fechar(event) {
    if(event.target == fundo) {
        formulario.style.display = 'none';
        fundo.style.display = 'none';
    }
}

fundo.addEventListener('click', fechar)
