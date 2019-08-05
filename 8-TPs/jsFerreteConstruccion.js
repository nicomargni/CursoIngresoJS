/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;
var radio;
var alamRect;
var alamCirc;
var pi=parseInt(3.14);
var cemento=2;
var cal=3;
var cantCemento;
var cantCal;
var area;
function Rectangulo () 
{
    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
    radio=parseInt(document.getElementById("Radio").value);

    alamRect=((largo+ancho)*2)*3;
    alert("La cantidad de alambre a comprar es de "+alamRect+" metros");

}
function Circulo () 
{
    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
    radio=parseInt(document.getElementById("Radio").value);
    
    alamCirc=(pi*radio)*3;
    alert(alamCirc);

}
function Materiales () 
{
    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
    radio=parseInt(document.getElementById("Radio").value);

    area=largo*ancho;
    cantCemento=area*cemento;
    cantCal=area*cal;
    alert("La cantidad de bolsas de cemento a utilizar es de "+cantCemento+", y de bolsas de cal es "+cantCal)
}