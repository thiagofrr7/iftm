txt1b = document.getElementById("texto1Bim");
txt2b = document.getElementById("texto2Bim");
btnResultado = document.getElementById("botaoResultado");

btnResultado.addEventListener("click", calculo);

function calculo() {

    soma = parseFloat(txt1b.value) + parseFloat(txt2b.value);

    if (soma > 50.0) {
        alert(`${soma}`)
    }
    else
        alert(`${soma}`);
}