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
        <a href="mailto:${pet.contato}" class="btn-contato">Entrar em contato</a>
        </div>
        `;

        lista.appendChild(card);
    });
}

mostrar_pet();