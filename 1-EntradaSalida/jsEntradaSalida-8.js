/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var dividendo;
    var divisor;
    var division;
    var resto;
    
    dividendo = document.getElementById ("numeroDividendo").value;
    divisor = document.getElementById ("numeroDivisor").value;
    
    division = dividendo / divisor;
    resto = parseInt (dividendo) - parseInt (division) * divisor;
    alert ("el resto es igual a " + resto);

	
}
