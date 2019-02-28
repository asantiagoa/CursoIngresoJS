function mostrar()
{
  var num=0;
  var conPos=0;
  var positivos=0;
  var promPos=0;
  var conNeg=0;
  var negativos=0;
  var promNeg=0;
  var cCero=0;
  var cPar=0;
  var respuesta= true;
	//declarar contadores y variables


	while(respuesta==true)
	{
    do
    {
      num=parseInt(prompt("Ingrese un numero"));
    }while(isNaN(num));
    /*num=parseInt(prompt("Ingrese un numero"));
    while(isNaN(num))
    {
      alert("numero invalido");
      num=parseInt(prompt("Ingrese un numero"));
    }*/
    if(num>0)//suman positivos
    {
      positivos= num + positivos;
      conPos++;//cantidad de positivos
      promPos = positivos / conPos;//promedio positivos
    }
    else//si no son positivos son negativos
    {
      negativos = num + negativos;
      conNeg++;//cantidad de negativos
      promNeg = negativos / conNeg;//promedio negativos
    }
    if(num==0)
    {
      cCero++;
    }
    if(num%2==0)//resto de num/2=0 es par
    {
      cPar+1;
    }
    respuesta=confirm("seguir?");

  }
  document.write("suma de positivos = "+ positivos+"<br>");
  document.write("cantidad de positivos = "+ conPos+"<br>");
  document.write("promedio de positivos = "+ promPos+"<br>");
  document.write("cantidad de 0's = "+cCero+"<br>");
  document.write("suma de negativos = "+negativos+"<br>");
  document.write("cantidad de negativos = "+conNeg+"<br>");
  document.write("promedio de negativos = "+promNeg+"<br>");
  document.write("diferencia de positivos y negativos = "+ parseInt(positivos - negativos)+"<br>");



}//FIN DE LA FUNCIÓN
