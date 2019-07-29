function mostrar()
{

	var contnegativos=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var seguir='si';

	while (seguir=='si'){
		numero=parseInt (prompt ("Ingrese un numero"));
		while (isNaN(numero)==true){
			alert ("Esto no es un numero");
			numero= parseInt (prompt("Ingrese un numero valido"));
		}
		if (numero<0){
			negativo=negativo*numero;
		} else {
			positivo=positivo+numero;
		} if (contnegativos==0){
		
		}
		seguir=prompt ("Quiere ingresar otro numero?");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN