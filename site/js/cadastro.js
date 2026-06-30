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

    const pet = {
        nome, especie, raca, idade, contato, imagem
    };

    const pets = JSON.parse(localStorage.getItem("pets")) || [];
    pets.push(pet);

    localStorage.setItem("pets", JSON.stringify(pets));

    mostrar_pet();
}

document.getElementById('btn-cadastro').addEventListener('click', registrar_pet);

function mostrar_pet() {
    const lista = document.querySelector('.adotar-cards');

    const pets = JSON.parse(localStorage.getItem("pets")) || [];

    lista.innerHTML = "";

    pets.forEach((pet, i) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${pet.imagem}" alt="${pet.nome}">
        <div class="card-conteudo">
        <h3>${pet.nome}</h3>
        <p>${pet.especie} • ${pet.raca}</p>
        <p>${pet.idade} • ${pet.sexo}</p>
        <p class="contato">Contato: ${pet.contato}</p>
        <div class="btn-excluir">Excluir</div>
        </div>
        `;

        lista.appendChild(card);

        const btn = card.querySelector('.btn-excluir');
        btn.addEventListener("click", () => {
            excluir_pet(i);
        });

        lista.appendChild(card);
    });
}

function excluir_pet(i) {
    const pets = JSON.parse(localStorage.getItem("pets")) || [];

    pets.splice(i, 1);

    localStorage.setItem("pets", JSON.stringify(pets));
    
    mostrar_pet();
}

function sair() {
    localStorage.removeItem(status);    
    window.location.reload();
}

document.getElementById('btn-sair').addEventListener('click', sair);

mostrar_pet();