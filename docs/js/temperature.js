"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Temperatura (valor, tipo_origen, tipo_destino){
  Medida.call(this, valor, tipo_origen, tipo_destino);
}

Temperatura.prototype = new Medida();

//Convertir Celsius a Farenheit
Temperatura.prototype.convertirC_F = function(){
  return ((this.get_valor()*9)/5)+32;
}
//Convertir Celsius a Kelvin
Temperatura.prototype.convertirC_K = function(){
  return (this.get_valor()+273.15);
}
//Convertir Farenheit a Celsius
Temperatura.prototype.convertirF_C = function(){
  return ((this.get_valor()-32)*5)/9;
}
//Convertir Farenheit a Kelvin
Temperatura.prototype.convertirF_K = function(){
  return (((this.get_valor()-32)*5)/9)+273.15;
}
//Convertir Kelvin a Celsius
Temperatura.prototype.convertirK_C = function(){
  return (this.get_valor()-273.15);
}
//Convertir Kelvin a Farenheit
Temperatura.prototype.convertirK_F = function(){
  return (((this.get_valor()-273.15)*9)/5)+32;
}

Temperatura.prototype.mostrar = function(){
  var result = this.get_valor() + " " + this.get_tipo_destino();
  return result;
}
