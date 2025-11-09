window.addEventListener("DOMContentLoaded", function(){

    const txtCaixa = document.getElementById("textoCaixa");
    const btnEnviar = document.getElementById("botaoEnviar");

    btnEnviar.addEventListener("click", function(){
        const infoUser = txtCaixa.value;
        localStorage.setItem("infoUser", infoUser);
        window.location.href="analiseTexto.html";
    })

})