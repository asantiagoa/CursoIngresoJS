function mostrar()
{
    var precio;
    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
    var desc;
    desc = prompt("Ingrese el descuento");
    desc = parseInt(desc);
    var total;
    total = ((100 - desc)/100) * precio;
    document.getElementById("elPrecioFinal").value = total;
}
