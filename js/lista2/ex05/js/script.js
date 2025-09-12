function Calculadora() {
  texto = document.getElementById("lista").value;
  linhas = texto.split("\n");

  soma = 0;
  nomes = [];
  qtd = 0;

  for (i = 0; i < linhas.length; i++) {
    partes = linhas[i].split(",");
    nome = partes[0];
    idade = parseInt(partes[1]);

    soma += idade;
    nomes.push(nome);
    qtd++;
  }

  media = soma / qtd;
  sorteado = nomes[Math.floor(Math.random() * qtd)];

  document.write("Quantidade: " + qtd + "<br>");
  document.write("Média: " + media.toFixed(2) + "<br>");
  document.write("Sorteado: " + sorteado);
}

