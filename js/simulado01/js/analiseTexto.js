window.addEventListener("DOMContentLoaded", function(){

    let infoUser = localStorage.getItem("infoUser");
    let imprimeInfo = document.getElementById("imprimeInfo");
    const armazenaTexto = document.getElementById("armazenaTexto");
    let novoSelect = document.getElementById("novoSelect");
    const btnAnalise = document.getElementById("botaoAnalise");
    const btnNatal = document.getElementById("botaoNatal");

    let txtCaixa = document.getElementById("textoCaixa");
    let txtM = document.getElementById("textoM");
    let txtPrimeira = document.getElementById("textoPrimeira");
    let txtSegunda = document.getElementById("textoSegunda");
    let txtUltima = document.getElementById("textoUltima");

    imprimeInfo = document.createElement("p");
    imprimeInfo.textContent = infoUser;
    armazenaTexto.appendChild(imprimeInfo);

    btnAnalise.addEventListener("click", function(){
        
        let textoAnalise = infoUser;
        
        if(novoSelect.value == "Não" && txtCaixa.value.trim() !== ""){
            textoAnalise = txtCaixa.value.trim();
        }

        let palavras = textoAnalise.split(" ");
        txtPrimeira.value = palavras[0] || "";
        txtSegunda.value = palavras[1] || "";
        txtUltima.value = palavras[palavras.length - 1] || "";

        let palavrascomM = [];

        for(let i = 0; i < palavras.length; i++){
            if(palavras[i][0].toUpperCase() === "M")
                palavrascomM.push(palavras[i]);
        }
        
        txtM.value = palavrascomM.join(", ");

    })

    btnNatal.addEventListener("click", function(){
        window.location.href="felizNatal.html";
    })

})