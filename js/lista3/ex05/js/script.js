txt1b = document.getElementById("texto1Bim");
txt2b = document.getElementById("texto2Bim");
btnResultado = document.getElementById("botaoResultado");

btnResultado.addEventListener("click", calculo);

function calculo() {

    nota1 = parseFloat(txt1b.value);
    nota2 = parseFloat(txt2b.value);

    soma = nota1 + nota2;

    if (nota1 < 0 || nota1 > 50)
        alert("Nota 1 inválida. Informe uma nova entre 0 e 50");
    else if (nota2 < 0 || nota2 > 50)
        alert("Nota 2 inválida. Informe uma nova entre 0 e 50");
    else if (soma > 60.0) {
        alert(`Você foi aprovado! A soma das notas deu ${soma} pontos. ${soma - 60} pontos acima da média 60.0 de aprovação.`)
    }
    else
        alert(`Você foi reprovado! A soma das notas deu ${soma} pontos. Faltaram ${60 - soma} pontos para atingir a média de 60.0 para aprovação.`)
}
