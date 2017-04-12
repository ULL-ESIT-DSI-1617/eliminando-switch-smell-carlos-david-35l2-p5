(function(exports) {
  "use strict"; // Use ECMAScript 5 strict mode in browsers that support it
  function main() {
    var temp_convertir = document.getElementById('temp_convert').value,
        resultado = document.getElementById('converted');
    resultado.innerHTML = Medida.convertir(temp_convertir);
    return false;
}
exports.main = main;
})(this);
