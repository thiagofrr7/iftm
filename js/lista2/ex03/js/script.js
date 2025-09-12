N = parseInt(prompt("Escolha um número"));

for(i = 0; i < N; i++){
    numerox = Math.round(Math.random()*N);
    document.write(numerox + "<br>");
}