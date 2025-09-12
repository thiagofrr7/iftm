function sortearOrdem() {
  texto = prompt("Digite um nome por linha:");

  lista = texto.split("\n");
  nomes = [];

  for (i = 0; i < lista.length; i++) {
    if (lista[i] != "") {
      nomes.push(lista[i]);
    }
  }

  for (i = nomes.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = nomes[i];
    nomes[i] = nomes[j];
    nomes[j] = temp;
  }

  resultado = "Ordem sorteada:\n";
  for (i = 0; i < nomes.length; i++) {
    resultado += (i + 1) + ". " + nomes[i] + "\n";
  }

  document.write(resultado);
}

sortearOrdem();
