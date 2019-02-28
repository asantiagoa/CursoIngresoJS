function mostrar()
{
  var num;
  var max;
  var min;
  var bandera=false;
	// declarar variables

	var respuesta=true;

	while(respuesta==true)
  {
  	num = parseInt(prompt("Ingrese un número"));
    while(isNaN(num))
    {
      alert("numero invalido");
      num = parseInt(prompt("Ingrese un número"));
    }
    if(num>max||bandera==false)//bandera se usa para ejecutar el codigo por primera vez;después entra por la condicion num>max
    {
      max=num;
    }
    if(num<min||bandera==false)
    {
    min=num;
    }
    bandera=true
    respuesta=confirm("quiere seguir ingresando numeros?");
  }
  document.getElementById("maximo").value=max;
  document.getElementById("minimo").value=min;




}//FIN DE LA FUNCIÓN
