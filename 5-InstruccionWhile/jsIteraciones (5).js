function mostrar()
{

var sexo = prompt("ingrese f ó m .");
while((sexo!="f")&&(sexo!="m"))
  {
    alert("sexo invalido");
    sexo = prompt("Ingrese sexo");
  }
while(sexo == "f")
  {
    sexo = "femenino"
    document.getElementById('Sexo').value=sexo;
  }
while (sexo == "m")
  {
    sexo = "masculino"
    document.getElementById('Sexo').value=sexo;
  }
}//FIN DE LA FUNCIÓN
