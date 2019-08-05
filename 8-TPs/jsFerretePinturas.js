/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var fahrenheit;
var centigrados;
function FahrenheitCentigrados () 
{
    fahrenheit=parseInt(document.getElementById("Temperatura").value);
    centigrados=(fahrenheit-32)*(5/9);
    alert(fahrenheit+" Fahrenheit son "+centigrados+" grados centigrados");
}

function CentigradosFahrenheit () 
{
    centigrados=parseInt(document.getElementById("Temperatura").value);
    fahrenheit=centigrados*(9/4)+32;
    alert(centigrados+" centigrados son "+fahrenheit+" grados fahrenheit");
}
