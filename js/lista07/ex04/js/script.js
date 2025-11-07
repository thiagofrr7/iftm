window.addEventListener("DOMContentLoaded", function(){
    
    let X = parseInt(prompt("Digite quantos segundos:"));
    document.write(`Por favor, aguarde ${X} segundos para carregar a página do Google.`);
    let contador = document.createElement("p");
    document.body.appendChild(contador);
    contador.textContent = X;

    intervalo = setInterval(decremento, 1000);

    function decremento(){
        X = X - 1;
        contador.textContent = X;

        if(X === 0){
            clearInterval(intervalo);
            window.location.href="https://www.google.com";
        }
    }

})
