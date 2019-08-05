function mostrar()
{
var precio;
var descuento;
var resultado;
precio=prompt("Ingrese el precio");
descuento=prompt("Ingrese el descuento deseado");
resultado=(precio*descuento)/100;
document.getElementById("elPrecioFinal").value=resultado;
}
