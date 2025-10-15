//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");

for (let i = 1; i <= 151; i++) {
    const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
    const card = document.createElement("div");
    const image = document.createElement("img");
    const label = document.createElement("span");

    card.classList.add("pokemon");
    image.src = `${baseUrl}/${i}.png`;
    label.innerText = `${i}`;
    card.appendChild(image);
    card.appendChild(label);
    container.appendChild(card);
}