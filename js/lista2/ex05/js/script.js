N = parseInt(prompt("Quantos alunos?"))

aluno = []
idade = []

for(i = 1; i <= N; i++){
    nome = prompt(`Qual é o nome do aluno ${i}?`)
    
    aluno.push(nome)

    idade2 = parseInt(prompt(`Qual é a idade do aluno ${i}?`))

    idade.push(idade2)
}

soma = 0
for(i = 0; i < idade.length; i++){
    soma = soma + idade[i];
}

media = soma / N;
alert(`A média de idade é ${media.toFixed(2)} ano(s).`);

listaformatada = aluno.join("\n");
resultado = Math.floor(Math.random() * aluno.length);
alert(`Alunos do sorteio:\n\n${listaformatada}\n\nAluno sorteado para ganhar o almoço:\n\n${aluno[resultado]}`);