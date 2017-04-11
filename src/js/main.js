"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function main() {
  var medir = new Medida();
  var temp_convertir = document.getElementById('temp_convert').value;
  var resultado = document.getElementById('converted');
  resultado.innerHTML = medir.convertir(temp_convertir);
}
