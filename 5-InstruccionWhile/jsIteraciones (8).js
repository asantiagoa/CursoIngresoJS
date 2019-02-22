function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	while(respuesta == "si")
	{
		contador = parseInt(prompt("Ingrese un número"));
		if(contador	>= 0)
		{
			positivo = positivo + contador;
		}
		else
		{
			if(contador < 0)
			{
				negativo = negativo * contador;
			}
		}
		respuesta = prompt("Desea continuar?");
		respuesta = respuesta.toLowerCase()
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN