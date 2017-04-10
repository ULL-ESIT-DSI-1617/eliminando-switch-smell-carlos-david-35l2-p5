"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function calculate(temperature) {
  var result = new Temperatura();
  // var temp = original.value;
  var temp = temperature;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])\s*(?:to)?\s*([fFcCkK])/;

  var m = temp.match(regexp);
  if (m) {
    var t = new Temperatura()

    t.set_valor(parseFloat(m[1]));
    t.set_tipo_origen(m[2]);
    t.set_tipo_destino(m[3]);

    if ((t.get_tipo_origen() == 'c' || t.get_tipo_origen() == 'C') && ((t.get_tipo_destino() == 'f' || t.get_tipo_destino() == 'F'))) {
      result.set_valor(t.convertirC_F());
      result.set_tipo_destino("F");
    }
    else if ((t.get_tipo_origen() == 'c' || t.get_tipo_origen() == 'C') && ((t.get_tipo_destino() == 'k' || t.get_tipo_destino() == 'K'))) {
      result.set_valor(t.convertirC_K());
      result.set_tipo_destino("K");
    }
    else if ((t.get_tipo_origen() == 'f' || t.get_tipo_origen() == 'F') && ((t.get_tipo_destino() == 'c' || t.get_tipo_destino() == 'C'))) {
      result.set_valor(t.convertirF_C());
      result.set_tipo_destino("C");
    }
    else if ((t.get_tipo_origen() == 'f' || t.get_tipo_origen() == 'F') && ((t.get_tipo_destino() == 'k' || t.get_tipo_destino() == 'K'))) {
      result.set_valor(t.convertirF_K());
      result.set_tipo_destino("K");
    }
    else if ((t.get_tipo_origen() == 'k' || t.get_tipo_origen() == 'K') && ((t.get_tipo_destino() == 'c' || t.get_tipo_destino() == 'C'))) {
      result.set_valor(t.convertirK_C());
      result.set_tipo_destino("C");
    }
    else if ((t.get_tipo_origen() == 'k' || t.get_tipo_origen() == 'K') && ((t.get_tipo_destino() == 'f' || t.get_tipo_destino() == 'F'))) {
      result.set_valor(t.convertirK_F());
      result.set_tipo_destino("F");
    }
    var muestra = result.mostrar();
    converted.innerHTML = muestra;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C to K' or '35C F' instead";
  }
}
