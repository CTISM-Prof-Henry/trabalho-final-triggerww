const botao = document.getElementById('cadastrar');

function mostrar() {
    let formulario = document.getElementById('cadastro');
    let fundo = document.getElementById('fundo');

    if(formulario.style.display == 'none') {
        formulario.style.display = 'block';
        fundo.style.display = 'block';
    } else {
        formulario.style.display = 'none';
        fundo.style.display = 'none';
    }
}

botao.addEventListener('click', mostrar);

fundo.addEventListener('click', () => {
    formulario.style.display = 'none';
    fundo.style.display = 'none';
});