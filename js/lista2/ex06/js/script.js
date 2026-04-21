function MegaSena() {
  numeros = [];
  while (numeros.length < 6) {
    n = Math.floor(Math.random() * 60) + 1;
    existe = false;
    for (i = 0; i < numeros.length; i++) {
      if (numeros[i] == n) {
        existe = true;
      }
    }
    if (!existe) {
      numeros.push(n); 
    }
  }
  texto = "Números da Mega Sena: ";
  for (i = 0; i < numeros.length; i++) {
    texto += numeros[i] + " ";
  }
  document.write(texto);
}

MegaSena();
