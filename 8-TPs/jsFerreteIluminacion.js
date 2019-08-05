/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var lamparas;
var marca;
var descuento;
var precioDescuento;
var IIBB;
function CalcularPrecio () 
{
    lamparas=parseInt(document.getElementById("Cantidad").value);
    marca=document.getElementById("Marca").value;
    
    if(lamparas>=6)
    {
        precioDescuento=(lamparas*35)/2;
        
        if(precioDescuento>120)
        {
            IIBB=(precioDescuento*10)/100;
            precioDescuento=precioDescuento-IIBB;
            alert("Usted pago "+IIBB+" de impuestos");
            
        }
        document.getElementById("precioDescuento").value=precioDescuento;
    }while(lamparas==5)
    {
     if(marca=="ArgentinaLuz")
    {
        descuento=((lamparas*35)*40)/100;
        precioDescuento=(lamparas*35)-descuento;
    } else
    {
        descuento=((lamparas*35)*30)/100;
        precioDescuento=(lamparas*35)-descuento;
    }
    document.getElementById("precioDescuento").value=precioDescuento;
    break;
    }
     while(lamparas==4)
    {
        if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
        {
            descuento=((lamparas*35)*25)/100;
            precioDescuento=lamparas*35-descuento;
        } else
        {
            descuento=((lamparas*35)*20)/100;
            precioDescuento=lamparas*35-descuento;
        }
        document.getElementById("precioDescuento").value=precioDescuento;
        break;
    } while(lamparas==3)
    {
     
         if(marca=="ArgentinaLuz")
         {
             descuento=((lamparas*35)*15)/100;
             precioDescuento=lamparas*35-descuento;
         } if(marca=="FelipeLamparas")
         {
             descuento=((lamparas*35)*10)/100;
             precioDescuento=lamparas*35-descuento;
         }else
         {
             descuento=((lamparas*35)*5)/100;
             precioDescuento=lamparas*35-descuento;
         }
         document.getElementById("precioDescuento").value=precioDescuento;
         break;
    }
    }

