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
        localStorage.removeItem('tema');
    }
}

botaoTema.addEventListener('click', trocarTema);