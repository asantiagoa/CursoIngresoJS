function mostrar()
{
    var entradas;
    entradas = 0
    var numero1;
    var numero2;
    var numero3;
    var numero4;
    //while (entradas > 4);
    //{
        numero1 = parseInt(prompt("Ingrese el primer importe"));
        numero2 = parseInt(prompt("Ingrese el segundo importe"));
        numero3 = parseInt(prompt("Ingrese el tercer importe"));
        numero4 = parseInt(prompt("Ingrese el cuarto importe"));

        //entradas = 4;

    //}
    var mayorN;
    var totalDYR;
    mayorN = Math.max(numero1, numero2, numero3, numero4 );
    totalDYR = numero1 + numero2 + numero3 + numero4;
    if(totalDYR >= 100)
    {
        totalDYR = totalDYR * 0.9;
    }
    else
    {
        if((totalDYR > 50)&&(totalDYR<100))
        {
            totalDYR = totalDYR * 0.95;
        }
        else
        {
            totalDYR = totalDYR * 1.15;
        }
    }
    alert("El mayor importe es: "+mayorN+" y el total es: "+totalDYR);


}
