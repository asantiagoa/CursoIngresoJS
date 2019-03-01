function mostrar()
{
  /*var contador = 0;//punto del pdf de recuperatorio.
  var notaI;//nota ingresada
  var notamin;//menor nota
  var nota=0;//total de notas
  var notaP;//promedio de las notas
  var cVar186=0;//cant. de varones con nota 6+ mayores a 18
  var nota1M;//nota de la primera mujer
  var notaJ;//nota del mas joven
  var edad;//edad ingresada
  var edad1M;//edad de la primera mujer ingresada
  var edadMin;//edad menor
  var sexo;//sexo ingresado
  var sexomin;//sexo de la nota minima
  var sexoJ;//sexo del mas joven
  var contM=0;//contador de mujeres
  while(contador<5)
  {
    notaI = parseInt(prompt("Ingrese nota"));//ingreso nota
    while(notaI>10||notaI<0||isNaN(notaI))//confirmo nota
    {
      notaI = parseInt(prompt("numero invalido,Ingrese nota"));
    }
    sexo = prompt("Ingrese sexo (f o m)");//ingreso sexo
    while(sexo !="f" && sexo !="m")//confirmo sexo
    {
      sexo = prompt("entrada invalida, Ingrese sexo (f o m)");
    }
    if(sexo=="f")//contador de mujeres
    {
      contM++;
    }
    edad = parseInt(prompt("ingrese una edad"));//ingreso edad
    if(edad>=18 && notaI>=6 && sexo=="m")//si tiene 18 o mas, si saco 6 o mas y si es hombre
    {
      cVar186++;
    }
    if(edad<edadMin||contador==0)//consigo edad menor y le atribuyo el sexo y la nota
    {
      edadMin=edad;
      notaJ = notaI;
      sexoJ = sexo;
    }
    if(contM==1)//si es la primera mujer
    {
      edad1M = edad;
      nota1M = notaI;
    }
    if (notaI<notamin||contador==0)//consigo menor nota
    {
      notamin = notaI;
      sexomin = sexo;
    }
    contador++;
    nota = nota+notaI;//total de notas
  }

  notaP = nota/contador;//promedio de notas
  alert("el promedio de las notas es: "+notaP);//A)
  alert("la nota mas baja es: "+notamin+" y el sexo de quien la obtuvo es "+sexomin);//B)
  alert(cVar186+" varones mayores de 18 años consiguieron una nota mayor o igual a 6");//C)
  alert("la persona mas joven obtuvo un "+notaJ+" y es de sexo "+sexoJ);//D)
  if(contM==0)
  {
    alert("no hay ninguna mujer");
  }
  else
  {
    alert("la primera mujer consiguió un "+nota1M+" de nota y tiene "+edad1M+" años");
  }*/
  var contador=0;//punto de material ejercicio 1
  var velocidadIngresada;//velocidad ingresada
  var sumVel=0;//velocidad total
  var velProm;//velocidad promedio
  var velMin;//velocidad minima
  var velMaxSol;//velocidad mas alta de combustible solido
  var combustible;//tipo de combustible
  var cCombLiq=0;//cantidad de vehiculos con combustible liquido
  var tcombMin;//tipo de combustible velocidad minima
  while(contador<5)
  {
    velocidadIngresada=parseInt(prompt("ingrese una velocidad (de 0 a 250 km/h)"));
    while(velocidadIngresada>250 || velocidadIngresada<0||isNaN(velocidadIngresada))
    {
      velocidadIngresada=parseInt(prompt("valor invalido, ingrese una velocidad (de 0 a 250 km/h)"));
    }
    combustible = prompt("ingrese el tipo de combustible del vehiculo (s o l)")
    while(combustible != "s"&& combustible != "l")
    {
      combustible = prompt("valor invalido, ingrese el tipo de combustible del vehiculo (s o l)")
    }
    sumVel = sumVel + velocidadIngresada;
    if((combustible=="s")&&(contador==0||velocidadIngresada>velMaxSol))
    {
      velMaxSol=velocidadIngresada;
      console.log(velMaxSol);
    }
    if(contador==0||velocidadIngresada<velMin)
    {
      velMin = velocidadIngresada;
      tcombMin = combustible;
    }
    if(combustible =="l"&& velocidadIngresada >100)
    {
      cCombLiq++;
    }
    contador++;
  }
  velProm = sumVel / contador;
  alert("el promedio de velocidades es "+velProm);
  alert("la velocidad mas baja es "+velMin+" y el tipo de combustible "+tcombMin);
  alert("la cantidad de autos que van a mas de 100km/h y usan combustible liquido es "+cCombLiq);
  alert("el auto con combustible solido de mayor velocidad llega a los "+velMaxSol+"km/h");
}
