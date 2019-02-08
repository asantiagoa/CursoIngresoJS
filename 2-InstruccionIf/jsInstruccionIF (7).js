function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
edad = parseInt(edad);
var estado;
estado = document.getElementById("estadoCivil").value;
if((edad < 18) && (estado != "Soltero")){
    alert("es muy pequeño para no ser soltero")
}
	


}//FIN DE LA FUNCIÓN