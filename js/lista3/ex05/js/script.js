txt1b = document.getElementById("texto1Bim");
txt2b = document.getElementById("texto2Bim");
btnResultado = document.getElementById("botaoResultado");

btnResultado.addEventListener("click", calculo);

function calculo() {

    soma = parseFloat(txt1b.value) + parseFloat(txt2b.value);

    if (txt1b.value < 0 || txt1b.value > 50)
        alert("Nota 1 inválida. Informe uma nova entre 0 e 50");
    else if (txt1b.value < 0 || txt1b.value > 50)
        alert("Nota 1 inválida. Informe uma nova entre 0 e 50");
    else if (soma > 50.0) {
        alert(`Você foi aprovado! A soma das notas deu ${soma} pontos. ${soma - 60} pontos acima da média 60.0 de aprovação.`)
    }
    else
        alert(`Você foi reprovado! A soma das notas deu ${soma} pontos. Faltaram ${60 - soma} pontos para atingir a média de 60.0 para aprovação.`)
}