nota1 = parseFloat(prompt("Informe sua nota do 1º bimestre."));
nota2 = parseFloat(prompt("Informe sua nota do 2º bimestre."));
soma = nota1 + nota2;

if(soma >= 60)
    alert(`Sua soma de notas foi ${soma}. Parabéns! Você ficou acima de 60,0 pontos e foi aprovado.`);
else
    alert(`Sua soma de notas foi ${soma}. Você ficou abaixo de 60 pontos e foi reprovado. Faltaram ${60 - soma} pontos para você passar.`);

