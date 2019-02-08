
function mostrar()
{
    var base;
    base = prompt("ingrese la base");
    base = parseInt(base);
    var ha;
    ha = prompt("ingrese la altura");
    ha = parseInt(ha);
    var sf;
    sf = (base * ha)/2;
    var per;
    per = base * 3;
    alert("El perímetro del triángulo es " + per + " y su superficie " + sf);
}
