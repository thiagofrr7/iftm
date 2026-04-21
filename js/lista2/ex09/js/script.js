document.write(`<h1>Ordem de apresentação dos grupos</h1>`)

p = parseInt(prompt("Quantas pessoas?"));

nomes = [];

for(i = 1; i <= p; i++){
    nome = prompt(`Qual é o nome da pessoa ${i}?`);
    nomes.push(nome);
}

nomes.sort(() => Math.random() - 0.5);

// Aqui coloquei um sisteminha para não colocar a borda no último nome, como no exemplo do exercício

for(i = 0; i < nomes.length; i++){
    if (i === nomes.length - 1) {
        document.write(`<p class="nomes" style="border-bottom: none">${i+1}º - ${nomes[i]}</p>`);
    } else {
        document.write(`<p class="nomes">${i+1}º - ${nomes[i]}</p>`);
    }
}