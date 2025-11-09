window.addEventListener("DOMContentLoaded", function(){

    const txtFala = document.getElementById("textoFala");
    const btnFala = document.getElementById("botaoFala");
    const container = document.getElementById("containerFalas");

    btnFala.addEventListener("click", function(){
        
        let contador = 0;
        contador = contador + Number(txtFala.value);

        for(let i = 0; i < contador; i++){
        let fala = document.createElement("p");
        document.body.appendChild(fala);
        fala.textContent = "Ho Ho Ho Feliz Natal!";
        fala.classList.add("fala");
        container.appendChild(fala);
        }

    })
})