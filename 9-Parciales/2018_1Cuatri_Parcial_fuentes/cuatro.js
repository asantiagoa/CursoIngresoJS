function mostrar()
{
  var num1;
  var num2;
  num1 = prompt("ingrese primer número");
  num1 = parseInt(num1);
  num2 = prompt("Ingrese segundo número");
  num2 = parseInt(num2);
  if (num1 == num2)
  {
    alert(num1 +" "+ num2);
  }
  else
  {
    if (num1 > num2)
    {
      alert(num1 - num2);
    }
    else
    {
      var num3;
      num3 = num1 + num2;
      if(num3 > 10)
      {
        alert("el resultado es "+num3+", es mayor a 10");
      }
      else
      {
        alert("el resultado es "+num3);
      }

    }

  }

}
