window.addEventListener("DOMContentLoaded", function(){

    let vetorNomes = [];
    let N = parseInt(prompt("Quantos nomes?"));

    for(let i = 0; i < N; i++){
        let nome = prompt(`Digite o nome ${i + 1}:`);
        vetorNomes.push(nome);
    }

    let j = 0;
    let intervalo = setInterval(function(){
        let lista = document.createElement("p");
        lista.textContent = vetorNomes[j];
        document.body.appendChild(lista);

        j++; 
        if(j >= vetorNomes.length){
        clearInterval(intervalo);
        }
    }, 1000);

});