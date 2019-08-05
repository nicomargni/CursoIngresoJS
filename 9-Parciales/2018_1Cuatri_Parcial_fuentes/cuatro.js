function mostrar()
{
var num1;
var num2;
var resta;
var suma;
num1=parseInt(prompt("Ingrese el primer numero"));
num2=parseInt(prompt("Ingrese el segundo numero"));
if(num1==num2)
{
    alert(num1+" "+num2);
} if(num1>num2)
{
    resta=num1-num2;
} if(num1<num2)
{
    suma=num1+num2;
} if(suma>10)
{
    alert("La suma es igual a "+suma+" y supero el 10");
}
}
