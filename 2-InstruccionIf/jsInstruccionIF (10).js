function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var nota;
	nota = Math.floor((Math.random()*10)+1);
	nota = parseInt(nota);
  if(nota >= 9)
  {
		alert(nota+"; Excelente");
	}
  else
  {

     if((nota >= 4) && (nota < 9))
    {
		  alert(nota+"; Aprobó");
    }

    else
    {
		  alert(nota+"; Debe recursar");
    }
  }
}//FIN DE LA FUNCIÓN
