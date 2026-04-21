N = parseInt(prompt("Escreva um número N"));
M = parseInt(prompt("Escreva um número M"));

  for(i = N; i < M; i++){
  operacao = Math.floor(Math.random() * (M - N + 1)) + N;
  document.write(operacao + "<br>");
  }