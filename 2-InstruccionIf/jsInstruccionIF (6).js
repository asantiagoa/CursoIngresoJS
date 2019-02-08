function mostrar()
{
//tomo la edad
var edad;
edad = document.getElementById("edad").value;
edad = parseInt(edad);
if (edad <= 17 && edad >= 13){
    alert("es adolescente");
} 
    
else if (edad >= 18){
    alert("es adulto");
}
else{
    alert("es niño");
}


}//FIN DE LA FUNCIÓN