function mostrar()
{
    var numero;
	var contador=0;
	var acumulador=0;
	var seguir='si';
	var promedio;

	while (seguir == 'si'){
		numero= parseInt (prompt ("Ingrese un numero"));
		contador=contador+1;
		acumulador=acumulador+numero;
		seguir=prompt("Quiere ingresar otro numero?");
	}
	promedio=acumulador/contador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN