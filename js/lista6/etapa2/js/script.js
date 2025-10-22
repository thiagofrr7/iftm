vetorCartas = [];

for(i = 1; i <=27; i++){
    vetorCartas.push(i);
}

console.log("Todas as cartas do baralho:")
console.log(vetorCartas);

vetorPares = [];
numerosEscolhidos = [];

while (numerosEscolhidos.length < 4) {
    carta = Math.floor(Math.random() * 27) + 1;
    if (!numerosEscolhidos.includes(carta)){
        numerosEscolhidos.push(carta);
        vetorPares.push(carta, carta);
    }
}

console.log("Quatro pares de cartas aleatórias do baralho:");
console.log(vetorPares);

