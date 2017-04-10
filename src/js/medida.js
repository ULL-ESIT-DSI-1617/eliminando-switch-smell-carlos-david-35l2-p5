"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Medida (valor, tipo_origen, tipo_destino) {
  this.valor_ = valor;
  this.tipo_origen_ = tipo_origen;
  this.tipo_destino_ = tipo_destino;
}

Medida.prototype.get_valor = function(){return this.valor_;}
Medida.prototype.get_tipo_origen = function(){return this.tipo_origen_;}
Medida.prototype.get_tipo_destino = function(){return this.tipo_destino_;}

Medida.prototype.set_valor = function(valor){this.valor_ = valor;}
Medida.prototype.set_tipo_origen = function(tipo_origen){this.tipo_origen_ = tipo_origen;}
Medida.prototype.set_tipo_destino = function(tipo_destino){this.tipo_destino_ = tipo_destino;}
