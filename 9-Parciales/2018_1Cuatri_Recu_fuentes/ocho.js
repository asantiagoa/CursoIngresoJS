function mostrar()
{
   /* var entradas;
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
    alert("El mayor importe es: "+mayorN+" y el total es: "+totalDYR);//ejercicio sfdsh */




  /*2-en ocho.js, .(ejercicio carpeta ###curso de ingreso)
  Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
  superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
  el ingreso por document.write:
  1-La cantidad de países con superficie impar.
  2-La cantidad de países con superficie menor a 100
  3-La cantidad de países con superficie igual a 100
  4-El nombre del primer país que superó los 100 de superficie
  5-El promedio de kilómetros ingresados.
  6-El nombre del que menos territorio tiene.*/
  var contador = 0;
  var respuesta = true;//confirmacion
  var pais;//nombre del pais
  var superficie;//superficie del país
  var cantSupImp=0;//cantidad de paises con superficie impar
  var cantSupMen100=0;//cantidad de paises con superficie menor a 100km
  var cantSupMay100=0;//cantidad de paises con superficie mayor a 100km
  var pais1Mayor100;//primer pais ingresado cuya superficie supera los 100km
  var promKM;//promedio de KM's de tierra
  var menorPais;//nombre del pais con menor superficie
  var supMin;//la menor superficie
  var supTotal=0;//la suma de todas las superficies
  while(respuesta==true)
  {
    pais = prompt("ingrese el nombre del país");
    superficie= parseInt(prompt("ingrese la superficie del pais"));
    while(superficie<0||isNaN(superficie))
    {
      superficie= parseInt(prompt("dato invalido, ingrese la superficie del pais"));
    }
    if((superficie%2)!=0)//si la superficie es impar suma +1 a la cantidad de paises con sup. impar
    {
      cantSupImp++;
    }
    if(superficie>100)//si la superficie es mayor a 100 suma +1 a la cantidad de paises con sup>100
    {
      cantSupMay100++;
    }
    else//si la superficie no es mayor a 100 suma +1 a la cantidad de paises con sup<100
    {
      cantSupMen100++;
    }
    if(cantSupMay100==1)//si es el primer pais que se ingresa y tiene mas de 100KM de sup. su nombre se guarda
    {
      pais1Mayor100 = pais;
    }
    if(contador==0||superficie<supMin)//si es la primera vez que se ingresan datos o si la superficie del pais es la menor ingresada hasta ahora se guarda su nombre
    {
      supMin=superficie;
      menorPais = pais;
    }
    contador++;
    supTotal = supTotal + superficie;
    promKM = supTotal/contador
    respuesta = confirm("seguir ingresando?");
  }
  document.write( cantSupImp+" paises tienen superficie impar<br>");//1)
  document.write(cantSupMen100+" tienen superficie menor a 100KM<br>");//2)
  document.write(cantSupMay100+" tienen superficie mayor a 100KM<br>");//3)
  document.write(pais1Mayor100+" es el primer pais ingresado en superar los 100KM<br>");//4)
  document.write(promKM+" es el promedio de las superficies ingresadas<br>");//5)
  document.write(menorPais+" es el pais mas chico<br>");//6)

}
