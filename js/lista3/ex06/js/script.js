txtValor1 = document.getElementById("textoValor1");
txtValor2 = document.getElementById("textoValor2");
btnmais = document.getElementById("botaoMais");
btnmenos = document.getElementById("botaoMenos");
btnvezes = document.getElementById("botaoVezes");
btndivisao = document.getElementById("botaoDivisao");
txtresultado = document.getElementById("textoResultado");

btnmais.addEventListener("click", Mais);
btnmenos.addEventListener("click", Menos);
btnvezes.addEventListener("click", Vezes);
btndivisao.addEventListener("click", Divisao);

function Mais() {
    valor1 = parseFloat(txtValor1.value);
    valor2 = parseFloat(txtValor2.value);
    resultado = valor1 + valor2;
    txtresultado.value = resultado;
}

function Menos() {
    valor1 = parseFloat(txtValor1.value);
    valor2 = parseFloat(txtValor2.value);
    resultado = valor1 - valor2;
    txtresultado.value = resultado;
}

function Vezes() {
    valor1 = parseFloat(txtValor1.value);
    valor2 = parseFloat(txtValor2.value);
    resultado = valor1 * valor2;
    txtresultado.value = resultado;
}

function Divisao() {
    valor1 = parseFloat(txtValor1.value);
    valor2 = parseFloat(txtValor2.value);
    resultado = valor1 / valor2;
    txtresultado.value = resultado;
}