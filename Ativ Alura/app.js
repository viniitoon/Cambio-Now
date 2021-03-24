/*var valorEmDolarTexto = prompt ("Qual o valor em dolar você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

alert (valorEmDolarNumero)

var valorEmReal = valorEmDolarNumero * 5.57
var valorEmRealDecimal = valorEmReal.toFixed(2)

alert (valorEmReal) */

// Revisão
// Variáveis var int - float - string
// Alert - parseInt - parseFloat - prompt
// Operaçoes + somar * multiplicar
// comentario Final

var appform = document.querySelector("#app form");

appform.onsubmit = CambioNow;

function CambioNow(e){
    e.preventDefault();

    var input_dollar = document.getElementById("input_dollar").nodeValue;
    var result = document.getElementById("result");
    result.innerHTML = "";

    var result_moedas = document.getElementById("result-moedas");
    result_moedas.innerHTML = "";

    var valor_cents = parseFloat(input_dollar)*100;
    
    result.innerHTML = valor_cents;

    var moedas = separarMoedas(valor_cents);

    result_moedas.innerHTML = "Quarters: " + moedas[0]
    + " Dimes: " + moedas[1] + " Nickels: " + moedas[2]
    + " Pennies: " + moedas[3];
}

function separarMoedas(valor){
    var total = valor;
    var Quarters = 0;
    if(total >= 25){
        Quarters = perseInt(Total/25);
        total -= 25*Quarters;
    }
    console.log(total);

    var dimes = 0;
    if(total >=10){
        Quarters = parseInt (total/10);
        total -= 10*dimes;
    }

    var Nickels = 0;
    if (total >=5){
        Nickels = parseInt(total/5);
        total -= 5*Nickels;
    }

var Pennies = total;

return [Quarters, dimes, Nickels, Pennies];
}