nome = prompt("Digite o seu nome completo.");
idade = parseInt(prompt("Quantos anos você tem?"));

if(idade >= 18)
    alert(`${nome}, você já POSSUI idade para tirar carteira.`);
else
    alert(`${nome}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${18 - idade} ano(s).`);