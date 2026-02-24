
window.addEventListener("DOMContentLoaded", function(){

    vetIdades = [10,21,31,40];

    const somaIdades = (idades) => {
        var soma = 0;
        for (i=0; i<idades.length; i++) 
            soma+=idades[i];
        return soma;
    }

    const mediaArit = (x) => {
        return x / 4;
    }

    const maiorIdade = (idades) => {
        
        var maior = 0;

        for(i = 0; i < idades.length; i++){
            if(idades[i] > maior){
                maior = idades[i];
            }
        }
        return maior;
    }

    const idadeImpar = (idades) => {

        vetImpares = []

        for(i = 0; i < idades.length; i++){
            if(idades[i] % 2 != 0){
                vetImpares.push(idades[i]);
            }
        }

        return vetImpares;
    }

    const maiordeIdade = (idades) => {

        var contagem = 0;
        
        for(i = 0; i < idades.length; i++){
            if(idades[i] >= 18){
                contagem++;
            }
        }

        if(contagem == 4){
            return true;
        } else {
            return false;
        }
    }

    const comparaValor = (idades, x) => {

        var contagem = 0;

        for(i = 0; i < idades.length; i++){
            if(idades[i] >= x){
                contagem++;
            }
        
        }

        if(contagem == 4){
                return true;
        } else {
                return false;
        }
    }

    const exibirIdades = (idades, x) => {

        exibirVet = [];

        for(i = 0; i < idades.length; i++){
            if(idades[i] > x){
                exibirVet.push(idades[i]);
            }
        }

        return exibirVet;
    }

    const mediaIdade = (idades) => {

        var soma = 0;
        
        for(i = 0; i < idades.length; i++){
            soma+=idades[i];
        }

        var media = soma / idades.length;

        return media;
    }

    document.write(`<p>Soma das idades = ${somaIdades(vetIdades)}</p>`);
    document.write(`<p>Média aritmética = ${mediaArit(somaIdades(vetIdades))}</p>`);
    document.write(`<p>Maior idade = ${maiorIdade(vetIdades)}</p>`);
    document.write(`<p>Idades ímpares = ${idadeImpar(vetIdades)}</p>`);
    document.write(`<p>Compara valor = ${comparaValor(vetIdades, 4)}</p>`);
    document.write(`<p>Exibir idades = ${exibirIdades(vetIdades, 5)}</p>`);
    document.write(`<p>Média das idades = ${mediaIdade(exibirIdades(vetIdades, 5), 5)}</p>`);


})