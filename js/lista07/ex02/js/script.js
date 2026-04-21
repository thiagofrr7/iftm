window.addEventListener("DOMContentLoaded", function (){

    let txtCaixa1 = document.getElementById("textoCaixa1");
    let txtCaixa2 = document.getElementById("textoCaixa2");
    let numeros = document.getElementById("numeros");
    let btnTemp = document.getElementById("botaoTemp");

    btnTemp.addEventListener("click", function(){
        setTimeout(trocaTexto, Number(numeros.value) * 1000);
    })

    function trocaTexto(){
        txtCaixa2.value = txtCaixa1.value;
        txtCaixa1.value = "";
    }
})
