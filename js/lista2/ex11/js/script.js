let cartas = [];

for (let i = 1; i <= 27; i++) {
    cartas.push(i);
}

cartas = cartas.sort(() => Math.random() - 0.5).slice(0, 12);

for (j = 0; j < 4; j++) {
    document.write('<div class="cartas-titulo">');
    document.write(`<h1> Cartas do Jogador ${j + 1}: </h1>`);
    document.write('</div>');
    
    document.write('<div class="cartas">');
    for (i = 0; i < 3; i++) {
        carta = cartas[j * 3 + i];
        document.write(`<img src='img/carta${carta}.png'>`);
    }
    document.write('</div>');
}

