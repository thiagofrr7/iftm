window.addEventListener("DOMContentLoaded", function (){

    let txtCaixa1 = document.getElementById("textoCaixa1");
    let txtCaixa2 = document.getElementById("textoCaixa2");
    let btnTemp = document.getElementById("botaoTemp");
    
    btnTemp.addEventListener("click", function (){
        setTimeout(trocaTexto, 2000);
    });

    function trocaTexto(){
        txtCaixa2.value = txtCaixa1.value;
        txtCaixa1.value = "";
    }
})

