function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while (contador<5) {
		numero=parseInt (prompt("Ingrese un numero"));
		contador=contador+1;
		acumulador=acumulador+numero;
	}
	promedio=acumulador/contador;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN