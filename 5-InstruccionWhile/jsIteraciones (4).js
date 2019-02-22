function mostrar()
{

  var numero = prompt("ingrese un número entre 0 y 9.");
  numero = parseInt(numero);
  while(isNaN(numero))
  {
      alert("no es un numero");
      numero = prompt("ingrese un número entre 0 y 9.");
  }
  while((numero > 9)||(numero < 0))
  {


    alert("numero invalido");
    numero = prompt("ingrese un número entre 0 y 9.");
    numero = parseInt(numero);
  }
  document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN
