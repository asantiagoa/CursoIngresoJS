function mostrar()
{
    var precio;
    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
    var desc;
    desc = prompt("Ingrese descuento");
    desc = parseInt(desc);
    var descdin;
    descdin = precio - (((100 - desc)/100) * precio);
    var precdes;
    precdes = ((100 - desc)/100) * precio;
    var iva;
    iva = precdes * 0.21;
    var total;
    total = precdes + iva;
    alert("Su descuento le resta "+descdin+"$ a su precio original de "+precio+"$ lo que lo deja en "+precdes+"$ , con un IVA de "+iva+"$");
    document.getElementById("elPrecioFinal").value = precdes + iva;
}
