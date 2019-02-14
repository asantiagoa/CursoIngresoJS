/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 
 */
function CalcularPrecio () 
{
     var lampCant;
     lampCant = document.getElementById("Cantidad").value;
     lampCant = parseInt(lampCant);
     if(lampCant >= 6)
    {
         document.getElementById("precioDescuento").value = ((lampCant * 35)*0.5);
    }
     else if(lampCant == 5)
    {
         if (document.getElementById("Marca").value == "ArgentinaLuz")
        {
             document.getElementById("precioDescuento").value = ((lampCant * 35)*0.6);
        }
         else
        {
            document.getElementById("precioDescuento").value = ((lampCant * 35)*0.7);
        }
    }
     else if(lampCant == 4)
    {
         if((document.getElementById("Marca").value == "ArgentinaLuz")||(document.getElementById("Marca").value == "FelipeLamparas")){
            document.getElementById("precioDescuento").value = ((lampCant * 35)*0.75);
        }
        else
        {
           document.getElementById("precioDescuento").value = ((lampCant * 35)*0.8);
        }
    }
     else if(lampCant == 3)
    {
         if((document.getElementById("Marca").value == "ArgentinaLuz"))
        {
            document.getElementById("precioDescuento").value = ((lampCant * 35)*0.85);
        }
         else if(document.getElementById("Marca".value == "FelipeLamparas"))
        {
            document.getElementById("precioDescuento").value = ((lampCant * 35)*0.90);
        }
         else
        {
            document.getElementById("precioDescuento").value = ((lampCant * 35)*0.95);
        }
    }//terminan lamparas
    var iibb;
    var precio;
    precio = document.getElementById("precioDescuento").value;
    precio = parseInt(precio);
    if(precio>=120)
    {
        iibb = document.getElementById("precioDescuento");
        iibb = parseInt(iibb);
        iibb = iibb * 1.10;
        var iibbTot;
        iibbTot = iibb * 0.10;
    }
    alert("Usted paga "+iibb+" ("+iibbTot+" en impuestos)");
}

