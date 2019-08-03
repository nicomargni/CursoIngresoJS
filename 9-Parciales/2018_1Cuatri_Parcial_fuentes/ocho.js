function mostrar()
{
var letra;
var numero;
var respuesta;
var contPares=0;
var contImpares=0;
var contCeros=0;
var contPositivos=0;
var promPositivos;
var sumaPositivos=0;
var sumaNegativos=0;
var letraMin;
var letraMax;
var numMin;
var numMax;

do
{
    letra=prompt("Ingrese una letra");
    while(!(isNaN(letra)==true))
   {
        alert("Eso no es una letra");
        letra=prompt("Ingrese una letra valida");
    }
        numero=parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while(isNaN(numero)==true||numero<-100||numero>100)
       {
         alert("Eso no es un numero valido");
         numero=parseInt(prompt("Ingrese un numero entre 100 y -100"));
        }
            if(numero<=numMin)
            {
                numMin=numero;
                letraMin=letra;
            } if(numero>=numMax)
            {
                numMax=numero;
                letraMax=letra;
            }
            if(numero%2==0)
            {
                contPares++;
            } if(numero%2!=0)
            {
                contImpares++;
            } if(numero%10==0)
            {
                contCeros++;
                if(numero==100||numero==-100)
                {
                    contCeros++;
                }
            } if(numero>0)
            {
                contPositivos++;
                sumaPositivos=sumaPositivos+numero;
            } if(numero<0)
            {
                sumaNegativos=sumaNegativos+numero;
            }
            respuesta=prompt("Desea ingresar mas datos?");
    
}while(respuesta=="si");
promPositivos=sumaPositivos/contPositivos;
alert("La cantidad de numeros pares es de "+contPares);
alert("La cantidad de numeros impares es de "+contImpares);
alert("La cantidad de ceros es igual a "+contCeros);
alert("La suma de los numeros negativos es igual a "+sumaNegativos);
alert("El promedio de los numeros positivos es igual a "+promPositivos);
alert("El numero minimo es "+numMin+" cuya letra es la "+letraMin);
alert("El numero maximo es "+numMax+" cuya letra es la "+letraMax);

}
