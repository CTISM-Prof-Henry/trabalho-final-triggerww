function mostrar_pet() {
    const lista = document.querySelector('.adotar-cards');

    const pets = JSON.parse(localStorage.getItem("pets")) || [];

    lista.innerHTML = "";

    pets.forEach((pet, i) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${pet.imagem}" alt="${pet.nome}">
        <h2>${pet.nome}</h2>
        <p>Espécie: ${pet.especie}</p>
        <p>Raça: ${pet.raca}</p>
        <p>Idade: ${pet.idade}</p>
        <p>Contato: ${pet.contato}</p>
        `;

        lista.appendChild(card);
    });
}

mostrar_pet();