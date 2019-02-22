function mostrar()
{
    /* usuario ingresa 4 entradas, debe indicarse el ingreso mas grande y el monto total.
    si el total es mayor a 100, se aplica un descuento del 10%, si es mayor a 50, se aplica un descuento
    del 5% y si es menor a 50 se aplica un recargo del 15%*/
    var entradas;
    entradas = 0;
    var numero1;
    var numero2;
    var numero3;
    var numero4;
    numero1 = parseInt(prompt("Ingrese el primer importe"));
    numero2 = parseInt(prompt("Ingrese el segundo importe"));
    numero3 = parseInt(prompt("Ingrese el tercer importe"));
    numero4 = parseInt(prompt("Ingrese el cuarto importe"));
    //var total
    /*while(entradas<4)
    {
        //console.log(entradas++);------->post incremento(muestra 0)
        //console.log(++entradas);------->pre incrementro(muestra 1)
        entradas++
        //break;----->sale del bucle
        //continue;-------->corta la ejecucion del bucle y vuelve a evaluar la condicion
        //while(NaN)
        //importe = prompt("ingrese importe");
        //total +=importe;
    }*/
    var mayorN;
    var totalDYR;
    totalDYR = numero1 + numero2 + numero3 + numero4;
    if((numero1>numero2)&&(numero1>numero3)&&(numero1>numero4))
    {
        mayorN = numero1;
    }
    else
    {   
        if((numero2>numero3)&&(numero2>numero4))
        {
            mayorN = numero2;
        }
        else
        {
            if((numero3>numero4))
            {
                mayorN = numero3;
            }
            else
            {
                mayorN = numero4;
            }
        }
    }
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
