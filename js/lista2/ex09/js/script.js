function sortear() {
  n = prompt("Quantas pessoas?");
  nomes = [];

  for (i = 0; i < n; i++) {
    nome = prompt("Nome da pessoa " + (i + 1));
    nomes.push(nome);
  }

  for (i = nomes.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = nomes[i];
    nomes[i] = nomes[j];
    nomes[j] = temp;
  }

  document.write("<h3>Ordem sorteada:</h3>");
  for (i = 0; i < nomes.length; i++) {
    document.write((i + 1) + ". " + nomes[i] + "<br>");
  }
}
