window.addEventListener("DOMContentLoaded", function(){

    let txtAumento = document.getElementById("textoAumento");
    let tamanhoFonte = 14;

    nome = prompt("Qual o seu nome completo?");
    txtAumento.textContent = nome;

    let intervalo = setInterval(function(){
        tamanhoFonte = tamanhoFonte + 2;
        txtAumento.style.fontSize = tamanhoFonte + "px";

        if(tamanhoFonte >= 40){
            clearInterval(intervalo);
        }
    }, 500)
})