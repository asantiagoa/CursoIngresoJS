/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var num1;
    num1 = document.getElementById("PrecioUno").value;
    num1 = parseInt(num1);
    var num2;
    num2 = document.getElementById("PrecioDos").value;
    num2 = parseInt(num2);
    var num3;
    num3 = document.getElementById("PrecioTres").value;
    num3 = parseInt(num3);
    var numSuma;
    numSuma = num1+num2+num3;
    alert(numSuma);
}
function Promedio () 
{
    var num1;
    num1 = document.getElementById("PrecioUno").value;
    num1 = parseInt(num1);
    var num2;
    num2 = document.getElementById("PrecioDos").value;
    num2 = parseInt(num2);
    var num3;
    num3 = document.getElementById("PrecioTres").value;
    num3 = parseInt(num3);
    var numSuma;
    numSuma = num1+num2+num3;
    var numProm;
    numProm = numSuma / 3;
    alert(numProm);
}
function PrecioFinal () 
{
    var num1;
    num1 = document.getElementById("PrecioUno").value;
    num1 = parseInt(num1);
    var num2;
    num2 = document.getElementById("PrecioDos").value;
    num2 = parseInt(num2);
    var num3;
    num3 = document.getElementById("PrecioTres").value;
    num3 = parseInt(num3);
    var numSuma;
    numSuma = num1+num2+num3;
    var numIva;
    numIva = numSuma * 1.21;
    alert(numIva);
}