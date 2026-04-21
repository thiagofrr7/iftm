btnDobro = document.getElementById("botaoDobro");
valor1 = document.getElementById("textoValor1");
valor2 = document.getElementById("textoValor2");

btnDobro.addEventListener("click", dobro);

function dobro() {
    valor2.value = valor1.value * 2;
}