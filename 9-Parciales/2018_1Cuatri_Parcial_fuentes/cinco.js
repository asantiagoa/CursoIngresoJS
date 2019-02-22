function mostrar()
{
  var planeta         //CONSIGNA DEFAULT.
  planeta = prompt("ingrese un planeta");
  planeta = planeta.toLowerCase();
  switch(planeta)
  {
    case "tierra":
    {
      alert("Aca vivimos");
      break;
    }
      case "mercurio":
      case "venus":
    {
      alert("Acá hace más calor");
      break;
    }
      case "marte":
      case "júpiter":
      case "saturno":
      case "urano":
      case "neptuno":
    {
      alert("Acá hace más frío");
      break;
    }
    default:
    {
      alert("No es un planeta valido");
    }

  }
}
