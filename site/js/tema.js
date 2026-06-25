let botaoTema = document.getElementById('tema');

const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'escuro') {
    document.body.classList.add('modo-escuro');
}

function trocarTema() {
    document.body.classList.toggle('modo-escuro');

    if (document.body.classList.contains('modo-escuro')) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
}

botaoTema.addEventListener('click', trocarTema);