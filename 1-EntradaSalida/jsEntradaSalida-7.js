/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    var num2;
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    numRes = num1 + num2;
    alert(numRes); 
}

function restar()
{
    var num1;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    var num2;
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    numRes = num1 - num2;
    alert(numRes);


}

function multiplicar()
{ 
    var num1;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    var num2;
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    numRes = num1 * num2;
    alert(numRes);
}

function dividir()
{
    var num1;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    var num2;
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    numRes = num1 / num2;
    alert(numRes);
}

