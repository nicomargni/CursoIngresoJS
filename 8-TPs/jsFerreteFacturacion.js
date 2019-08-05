/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1;
var precio2;
var precio3;
var suma;
var promedio;
var precioFinal;
var iva;
function Sumar () 
{
    precio1=parseInt(document.getElementById("PrecioUno").value);
    precio2=parseInt(document.getElementById("PrecioDos").value);
    precio3=parseInt(document.getElementById("PrecioTres").value);
    suma=precio1+precio2+precio3;
    alert("La suma de los productos es igual a "+suma);
}
function Promedio () 
{
    precio1=parseInt(document.getElementById("PrecioUno").value);
    precio2=parseInt(document.getElementById("PrecioDos").value);
    precio3=parseInt(document.getElementById("PrecioTres").value);

    promedio=(precio1+precio2+precio3)/3;
    alert("El promedio de los precios es igual a "+promedio);
}
function PrecioFinal () 
{
    precio1=parseInt(document.getElementById("PrecioUno").value);
    precio2=parseInt(document.getElementById("PrecioDos").value);
    precio3=parseInt(document.getElementById("PrecioTres").value);

    iva=((precio1+precio2+precio3)*21)/100;
    precioFinal=precio1+precio2+precio3+iva;
    alert("El precio de los productos mas iva es igual a "+precioFinal);
}