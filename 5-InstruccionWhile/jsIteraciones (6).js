function mostrar()
{

	var contador=0;
  var acumulador=0;
  var numero=0;
  while(contador < 5)
  {
    numero = parseInt(prompt("Ingrese numero"));
    while(isNaN(numero))
    {
      alert("Numero invalido");
      numero = parseInt(prompt("Ingrese Numero"));
    }
    acumulador = acumulador + numero;
    contador= contador + 1

  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
