const salvo = localStorage.getItem('tema');

if (salvo === 'escuro') {
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

document.getElementById('tema').addEventListener('click', trocarTema);