
function mostrar()
{
    var largo;
    largo = prompt("ingrese largo");
    largo = parseInt(largo);
    var ancho;
    ancho = prompt("ingrese ancho");
    ancho = parseInt(ancho);
    var per;
    per = 2*(ancho + largo);
    alert("el perímetro es: "+per);
}
