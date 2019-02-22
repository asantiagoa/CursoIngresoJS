function mostrar()
{
    /*cada habitacion de un hotel tiene un precio y hay promociones segun el tipo de pago.
    si es con visa, 10% de descuento,con paypal 15%, mercadopago 10% y efectivo 20%. cualquier otro medio tiene
    un 5% de descuento.
    si paga con paypal y compra el paquete "todoIncluido" se agrega un 10% al descuento
    si paga con efectivo y compra el paquete "soloDesayunos" se suma un 10% al descuento, si compra
    "todoIncluido" se suma un 15%*/ 
    var precio;
    var mPago;
    var paquete;
    precio = 100;
    mPago = document.getElementById("laHora").value;
    paquete = prompt("Ingrese el paquete (soloDesayunos o todoIncluido)");
    switch(mPago)
    {
        case "Mercadopago":
        case "Visa":
        {
            precio = precio * 0.9;
            break;
        }
        case "Paypal":
        {
            switch(paquete)
            {
                case "soloDesayunos":
                {
                    precio = precio * 0.75;
                    break;
                }
                default:
                {
                    precio = precio * 0.85;
                    break;
                }
            }
        }
        case "Efectivo":
        {
            switch(paquete)
            {
                case "soloDesayunos":
                {
                    precio = precio * 0.7;
                    break;
                }
                case "todoIncluido":
                {
                    precio = precio * 0.65;
                    break;
                }
                default:
                {
                    precio = precio * 0.8;
                    break;
                }
            }
        }
        default:
        {
            precio = precio * 0.95;
            break;
        }
        alert("Usted paga $"+precio);
    }

}
