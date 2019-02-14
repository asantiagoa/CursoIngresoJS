function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
/*if(mesDelAño == "Febrero"){
    alert("Este mes no tiene mas de 29 días");
}
else{
    alert("Este mes tiene mas de 29 días");
}*/
switch(mesDelAño){
    case ("Febrero"):{
        alert("Este mes no tiene mas de 29 días");
        break;
    }
    default:{
        alert("Este mes tiene mas de 29 días");
        break;
    }
}

}//FIN DE LA FUNCIÓN