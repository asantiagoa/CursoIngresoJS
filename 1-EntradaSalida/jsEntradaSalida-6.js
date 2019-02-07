/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

