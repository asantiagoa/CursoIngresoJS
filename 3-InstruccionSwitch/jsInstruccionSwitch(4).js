function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
    switch (mesDelAño){
        default:{
            alert("Este mes tiene 31 días");
            break;
        }
        case "Febrero":{
            alert("Este mes tiene 28 días");
            break;
        }
        case "Noviembre":
        case "Abril":
        case "Junio":
        case "Septiembre":{
            alert("Este mes tiene 30 días")
            break;
        }
    }

    
 
    
	



}//FIN DE LA FUNCIÓN