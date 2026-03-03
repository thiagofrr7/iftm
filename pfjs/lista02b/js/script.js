import usersTable from "./users.js";

window.addEventListener("DOMContentLoaded", function() {

    // Exercício 1
    document.body.innerHTML += `<h3>1) Exibir o nome e a idade de todas as pessoas maiores de idade: </h3>`;
    usersTable.filter(user => user.idade >= 18).forEach(user => {
        document.body.innerHTML += `<p>Nome: ${user.nome}, Idade: ${user.idade}</p>`;
    });

    // Exercício 2
    document.body.innerHTML += `<h3>2) Exibir os nomes de todas as pessoas do sexo masculino: </h3>`;
    usersTable.filter(user => user.sexo === 'M').forEach(user => {
        document.body.innerHTML += `<p>${user.nome}</p>`;
    });

    // Exercício 3
    document.body.innerHTML += `<h3>3) Exibir os dados da pessoa com o maior salário: </h3>`;
    let maiorSalario = usersTable.reduce((acumulador, userAtual) => {
        if (userAtual.salario > acumulador.salario) {
            return userAtual; 
        } else {
            return acumulador; 
        }
    }, usersTable[0]);

    document.body.innerHTML += `<p>Nome: ${maiorSalario.nome}, Idade: ${maiorSalario.idade}, Salário: R$${maiorSalario.salario}</p>`;

    // Exercício 4
    document.body.innerHTML += `<h3>4) Há alguma mulher que ganha acima de 5000,00?</h3>`;
    let pesquisaMulher = usersTable.some(user => {
        return user.sexo == 'F' && user.salario > 5000;
    });
    
    document.body.innerHTML += `<p>${pesquisaMulher}</p>`;

    // Exercício 5
    const mediaHomens = usersTable.filter(user => user.sexo === 'M').reduce((acumulador, user, pos, vet) => {
            acumulador += user.salario;
            if (pos === vet.length - 1) {
                return acumulador / vet.length; 
            } 
            return acumulador; 
        }, 0);

    const mediaMulheres = usersTable.filter(user => user.sexo === 'F').reduce((acumulador, user, pos, vet) => {
            acumulador += user.salario;
            if (pos === vet.length - 1) {
                return acumulador / vet.length; 
            }
            return acumulador;
        }, 0);

    document.body.innerHTML += `<h3>5) Média dos salários dos homens e das mulheres: </h3>`;
    document.body.innerHTML += `<p>Média dos salários dos homens: R$${mediaHomens}</p>`;
    document.body.innerHTML += `<p>Média dos salários das mulheres: R$${mediaMulheres}</p>`;

});
