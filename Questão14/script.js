let quantCigarro_Dia = parseInt(prompt("Quantos cigarros fumados por dia?"));

var precoCigarro_unidade = 0.50;

let tempoFuma = parseInt(prompt("A quantos anos você fuma? "));

var gastoDia = quantCigarro_Dia * precoCigarro_unidade;
var gastoTotal = (tempoFuma * 365) * gastoDia;

document.write("O Usuário gastou com Cigarro: $ ", gastoTotal);
