function mostrar()
{

var sexo = prompt("ingrese f ó m .");

    while (!(sexo=="f" || sexo=="m")) 
    {
     alert ("Sexo invalido, reingrese el sexo");
     sexo = prompt("ingrese f ó m .");
    }

     alert ("Su sexo es " + sexo);
     document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN