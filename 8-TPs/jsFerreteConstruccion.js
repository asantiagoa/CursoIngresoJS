/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    largo = document.getElementById("Largo").value;
    largo = parseInt(largo);
    var ancho;
    ancho = document.getElementById("Ancho").value;
    ancho = parseInt(ancho);
    var per;
    per = (2*(ancho + largo))* 3;
    alert("debe comprar "+per+" metros de alambre.");
    
}
function Circulo () 
{
    var radio;
    radio = document.getElementById("Radio").value;
    radio = parseInt(radio);
    alRad = ((radio * 2)*Math.PI) * 3;
    alert("debe comprar "+alRad+" metros de radio");
    
}
function Materiales () 
{
    var largo;
    largo = document.getElementById("Largo").value;
    largo = parseInt(largo);
    var ancho;
    ancho = document.getElementById("Ancho").value;
    ancho = parseInt(ancho);
    var area;
    area = largo * ancho;
    var bolCem
    bolCem = 2 * area;
    var bolCal;
    bolCal = 3 * area;
    alert("para una superficie de "+area+" metros usted necesita "+bolCem+" bolsas de cemento y "+bolCal+" bolsas de cal.");
}