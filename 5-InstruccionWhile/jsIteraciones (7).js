function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta='si';
  while(respuesta =="si")
  {
    acumulador = parseInt(prompt("Ingrese un numero"));
    while(isNaN(acumulador))
    {
      alert("Numero incorrecto");
      
    }
    acumulador += acumulador;
    contador++;
    respuesta = prompt("desea continuar?");
    respuesta = respuesta.toLowerCase()
  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
