function Jokenpo() {
  j1 = Math.floor(Math.random() * 3); 
  j2 = Math.floor(Math.random() * 3);

  if (j1 == j2) {
    vencedor = "Empate";
  } else if (
    (j1 == 0 && j2 == 2) ||
    (j1 == 1 && j2 == 0) ||
    (j1 == 2 && j2 == 1)
  ) {
    vencedor = "Jogador 1 ganhou";
  } else {
    vencedor = "Jogador 2 ganhou";
  }

  document.write("Jogador 1: " + j1 + "<br>" + "\nJogador 2: " + j2 + "<br>" + "\n" + vencedor);
}

Jokenpo();