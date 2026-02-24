
window.addEventListener("DOMContentLoaded", function(){

    const vetIdades = [10,21,31,40];

    const somaIdades = (idades) => {
        return idades.reduce((acumulador, idade) => acumulador + idade, 0);
    }

    const mediaArit = (soma, idades) => {
        return soma / idades.length;
    }

    const maiorIdade = (idades) => {
        
        var maior = 0;

        idades.forEach((idade) => {
            if(idade > maior){
                maior = idade;
            }
        })
        
        return maior;
    }

    const idadeImpar = (idades) => {
        return idades.filter(idade => idade % 2 !== 0);
    }

    const maiordeIdade = (idades) => {
        return idades.every(idade => idade >= 18);
    }

    const comparaValor = (idades, x) => {
        return idades.every(idade => idade >= x);
    } 

    const exibirIdades = (idades, x) => {

        let exibirVet = [];

        idades.forEach((idade) => {

            if(idade >= x){
                exibirVet.push(idade);
            }
        })

        return exibirVet;

    }

    const mediaIdade = (idades) => {


        var soma = 0;

        idades.forEach((idade) => {
            soma+=idade;
        })

        var media = soma / idades.length;

        return media;
    }

    var x = parseInt(prompt(`Digite um valor:`));

    document.write(`<p>Soma das idades = ${somaIdades(vetIdades)}</p>`);
    document.write(`<p>Média aritmética = ${mediaArit(somaIdades(vetIdades), vetIdades)}</p>`);
    document.write(`<p>Maior idade = ${maiorIdade(vetIdades)}</p>`);
    document.write(`<p>Idades ímpares = ${idadeImpar(vetIdades)}</p>`);
    document.write(`<p>Todos são maiores de idade (18+) = ${maiordeIdade(vetIdades)}</p>`);
    document.write(`<p>Todas as idades são maiores ou iguais a determinado valor (${x}) = ${comparaValor(vetIdades, x)}</p>`);
    document.write(`<p>Exibição das idades maiores ou iguais que determinada idade (${x}) = ${exibirIdades(vetIdades, x)}</p>`);
    document.write(`<p>Média das idades maiores ou iguais que determinada idade (${x}) = ${mediaIdade(exibirIdades(vetIdades, x))}</p>`);

})