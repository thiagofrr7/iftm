window.addEventListener("DOMContentLoaded", function(){

    // CAIXAS DE TEXTO

    txtNascimento = document.getElementById("textoNascimento");
    txtCPF = document.getElementById("textoCPF");
    txtMatricula = document.getElementById("textoMatricula");
    txtDisc = document.getElementById("textoDisc");
    txtDiscV2 = document.getElementById("textoDisc2");
    txtDiscV3 = document.getElementById("textoDisc3");
    txtDiscV4 = document.getElementById("textoDisc4");
    txtCampus = document.getElementById("textoCampus");
    txtFone = document.getElementById("textoFone");
    txtFone2 = document.getElementById("textoFone2");
    txtAltura = document.getElementById("textoAltura");
    txtFaturamento = document.getElementById("textoFaturamento");
    txtCronometro = document.getElementById("textoCronometro");
    txtSenha = document.getElementById("textoSenha");

    // BOTÕES

    btnNascimento = document.getElementById("botaoNascimento").addEventListener("click", function(){

        var vldnasc = /^\d{2}\/\d{2}\/\d{2}(\d{2})?$/;

        if(vldnasc.test(txtNascimento.value)){
            alert("Data de nascimento: VÁLIDA")
        }
        else{
            alert("Data de nascimento: INVÁLIDA");
        }
    });

    btnCPF = document.getElementById("botaoCPF").addEventListener("click", function(){

        // [UTILIZAR JWIFI]

        var vldcpf = /^\d{3}.\d{3}.\d{3}-\d{2}/

        if(vldcpf.test(txtCPF.value)){
            alert("CPF: VÁLIDO");
        }
        else{
            alert("CPF: INVÁLIDO");
        }

    });

    btnMatricula = document.getElementById("botaoMatricula").addEventListener("click", function(){

        var vldmatricula = /^IFTM-\d{3}\/\d{3}-[a-zA-Z0-9]{2}$/i;

        if(vldmatricula.test(txtMatricula.value)){
            alert("Número de matrícula de um aluno: VÁLIDO");
        }
        else{
            alert("Número de matrícula de um aluno: INVÁLIDO");
        }

    })

    btnDisciplina = document.getElementById("botaoDisciplina").addEventListener("click", function(){

        // [UTILIZAR JWIFI]

        var vldDisciplina = /^MT-\d{2}\.\d{3}-IFTM$/i;

        if(vldDisciplina.test(txtDisc.value)){
            alert("Código de disciplina do IFTM: VÁLIDO");
        } else {
            alert("Código de disciplina do IFTM: INVÁLIDO");
        }

    });

    btnDisciplinaV2 = document.getElementById("botaoDisciplinaV2").addEventListener("click", function(){

        // [UTILIZAR JWIFI]

        var vldDisciplinaV2 = /^MT-\d{2}\.\d{3}-[iI][fF][tT][mM]$/; 

        if(vldDisciplinaV2.test(txtDiscV2.value)){
            alert("Código de disciplina do IFTM (versão 2): VÁLIDO");
        } else {
            alert("Código de disciplina do IFTM (versão 2): INVÁLIDO");
        }

    })
    
    btnDisciplinaV3 = document.getElementById("botaoDisciplinaV3").addEventListener("click", function(){

        var vldDisciplina3 = /^M\s{1}T-\d{2}\.\d{3}-[Ii]\s{1}[Ff]\s{1}[Tt]\s{1}[Mm]$/;

        if(vldDisciplina3.test(txtDiscV3.value)){
            alert("Código de uma disciplina do IFTM (versão 3): VÁLIDO");
        }
        else{
            alert("Código de uma disciplina do IFTM (versão 3): INVÁLIDO");
        }
    })
    
    btnDisciplinaV4 = document.getElementById("botaoDisciplinaV4").addEventListener("click", function(){

        var vldDisciplina4 = /^MT-\d{2}.\d{3}-IFTM Uberlândia( Centro)?$/;

        if(vldDisciplina4.test(txtDiscV4.value)){
            alert("Código de uma disciplina do IFTM (versão 4): VÁLIDO");
        }
        else{
            alert("Código de uma disciplina do IFTM (versão 4): INVÁLIDO");
        }

    })

    btnCampus = document.getElementById("botaoCampus").addEventListener("click", function(){

        var vldCampus = /^IFTM campus Uberlândia( Centro)?$/;

        if(vldCampus.test(txtCampus.value)){
            alert("Nome de Campus do IFTM: VÁLIDO");
        }

        else{
            alert("Nome de Campus do IFTM: INVÁLIDO");
        }

    });

    btnTelefone = document.getElementById("botaoTelefone").addEventListener("click", function(){

        var vldTelefone = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;

        if(vldTelefone.test(txtFone.value)){
            alert("Telefone: VÁLIDO");
        } else {
            alert("Telefone: INVÁLIDO");
        }

    })

    btnTelefoneV2 = document.getElementById("botaoTelefoneV2").addEventListener("click", function(){

        var vldTelefone2 = /^\(\d{2,3}\)\d{5}-\d{4}$/; 

        if(vldTelefone2.test(txtFone2.value)){
            alert("Telefone (versão 2): VÁLIDO");
        }
        else{
            alert("Telefone (versão 2): INVÁLIDO");
        }

    });

    btnAltura = document.getElementById("botaoAltura").addEventListener("click", function(){

        var vldAltura = /^(1[\,\.][3-9]([0-9])?|2[\,\.][0-5]([0-9])?)$/;

        if(vldAltura.test(txtAltura.value)){
            alert("Altura de uma pessoa: VÁLIDA");
        }
        else{
            alert("Altura de uma pessoa: INVÁLIDA");
        }

    });

    btnFaturamento = document.getElementById("botaoFaturamento").addEventListener("click", function(){

        var vldFaturamento = /^R\$(\d{1,3}(\.\d{3}){0,3})(\,|\.)\d{2}$/;

        if(vldFaturamento.test(txtFaturamento.value)){
            alert("Faturamento anual de uma empresa: VÁLIDA");
        }
        else{
            alert("Faturamento anual de uma empresa: INVÁLIDA");
        }

    })

    btnCronometro = document.getElementById("botaoCronometro").addEventListener("click", function(){
        
        // [UTILIZAR JWIFI]

        var vldCronometro = /^(?:[01]?[0-9]|2[0-3]):(?:[0-5]?[0-9]):(?:[0-5]?[0-9]):(?:[0-9]{2})$/;

        if (vldCronometro.test(txtCronometro.value)) {
            alert("Cronômetro: VÁLIDO");
        } else {
            alert("Cronômetro: INVÁLIDO");
        }

    })

    btnSenha = document.getElementById("botaoSenha").addEventListener("click", function(){
        var vldSenha = /^[A-Za-z0-9._-]{5,}&[A-Pa-p]+\.[aeiou]+(?:\.[A-Za-z0-5]+)?-[^0-9]+,[^A-Za-z0-9]{2}\.[^ab01]+$/
;

        if (vldSenha.test(txtSenha.value)) {
            alert("Senha: VÁLIDA");
        } else {
            alert("Senha: INVÁLIDA");
        }

    });

})
