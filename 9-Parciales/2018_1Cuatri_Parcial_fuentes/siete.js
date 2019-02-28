function mostrar()
{
  var contador=0;
  var nota=0;
  var notaentrada;
  var sexo;
  var notaprom;
  var notamin=0;
  var cVaron6=0;
  var sexoMin;
  while(contador<6)
  {
    notaentrada = parseInt(prompt("ingrese nota"));
    while(notaentrada>10 || notaentrada<0||isNaN(notaentrada))
    {
      notaentrada = parseInt(prompt("numero invalido,ingrese una nota"));
    }
    nota = nota+notaentrada;
    sexo = prompt("ingrese su sexo (f ó m)");
    while(sexo != "f" && sexo != "m")
    {
      sexo = prompt("sexo invalido, ingrese f o m");
    }
    console.log(sexo);
    if(notaentrada<notamin||contador == 0)
    {
      notamin = notaentrada;
      sexoMin = sexo;
    }
    if(notaentrada>=6 && sexo == "m")
    {
      ++cVaron6;
      console.log(cVaron6);
      console.log("ad"+contador)
    }
    contador++;
  }

  notaprom = nota/contador;
  alert("el promedio es "+notaprom);
  alert(cVaron6+ " varones tienen una nota de 6 o mas");
  alert("la nota mas baja es "+notamin+" y el sexo de quien la consiguio es "+sexoMin);
}
