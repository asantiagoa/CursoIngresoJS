function mostrar()
{

var clave;
var contador;
contador = 0
clave = prompt("ingrese la clave.");
while(contador>3)
{
  while(clave != "utn750")
  {
    alert("La clave es incorrecta");
    clave = prompt("Ingrese la clave");
    contador=contador+1;
  }
  alert("la clave es correcta");
}


}//FIN DE LA FUNCIÓN
