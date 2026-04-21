vetorCartas = [];

for(i = 1; i <=27; i++){
    vetorCartas.push(i);
}

vetorPares = [];
numerosEscolhidos = [];

while (numerosEscolhidos.length < 4) {
    carta = Math.floor(Math.random() * 27) + 1;
    if (!numerosEscolhidos.includes(carta)){
        numerosEscolhidos.push(carta);
        vetorPares.push(carta, carta);
    }
}

vetorParesEmbaralhados = [...vetorPares]
vetorParesEmbaralhados.sort(() => Math.random() - 0.5);

console.log(vetorParesEmbaralhados);

for(i = 0; i < vetorParesEmbaralhados.length; i++){
    numeroCarta = vetorParesEmbaralhados[i];
    document.write(`<img src= "img/carta${numeroCarta}.png" alt= "carta de número ${numeroCarta}">`);
}