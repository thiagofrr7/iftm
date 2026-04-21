alert("Selecione os seguintes valores RGB (cada valor deverá estar entre 0 e 255):");
num1 = parseInt(prompt("Primeiro valor: "));
num2 = parseInt(prompt("Segundo valor: "));
num3 = parseInt(prompt("Terceiro valor: "));

document.write(`<p style='color: rgb(${num1}, ${num2}, ${num3})'>Fundamentos de Web Design II</p>`);