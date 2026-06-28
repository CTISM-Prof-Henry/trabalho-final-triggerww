const formulario = document.getElementById('cadastro');
const fundo = document.getElementById('fundo');

function mostrar() {
    formulario.style.display = 'block';
    fundo.style.display = 'block';
}

function ocultar() {
    formulario.style.display = 'none';
    fundo.style.display = 'none';
}

document.getElementById('cadastrar').addEventListener('click', mostrar);
document.getElementById('btn-cancelar').addEventListener('click', ocultar);

function registrar_pet() {
    const nome = document.getElementById('nome').value;
    const especie = document.getElementById('especie').value;
    const raca = document.getElementById('raca').value;
    const idade = document.getElementById('idade').value;
    const contato = document.getElementById('contato').value; 
    const imagem = document.getElementById('url').value;

    const pet = [
        nome, especie, raca, idade, contato, imagem
    ];

    localStorage.setItem(nome, JSON.stringify(pet));
}

document.getElementById('btn-cadastro').addEventListener('click', registrar_pet);