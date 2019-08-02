function mostrar()
{
    var nota;
    var sexo;
    var promedio=0;
    var varaprob=0; //varones aprobados
    var contador=0;
    var min;
    var sexdelmin; //sexo de la nota minima
    
    do 
    {
        nota=parseInt(prompt("Ingrese su nota"));
        while (isNaN(nota)==true)
        {
            alert ("Eso no es un numero perro");
            nota=prompt("Ingresa tu nota dale");
        }
            sexo=prompt("Ingrese el sexo con f o m");
            while (!(sexo=="f"||sexo=="m"))
            {
            alert("Sexo invalido");
            sexo=prompt("Ingrese un sexo valido");
            }
            if (contador==0)
            {
                 min=nota;
                 sexdelmin=sexo;
            } if (nota<min)
            {
                 sexdelmin=sexo;
                 min=nota;
            }
            contador=contador+1;
            promedio=promedio+nota;

            while(sexo=="f"||sexo=="m")
            {
                if(sexo="m"&&nota>=6)
                {
                    varaprob=varaprob+1;
                }
            }
       
    

    } while (contador<5);
    alert("La nota mas baja pertenece a un " +sexdelmin +" y es de "+min);
    promedio=promedio/contador;
    alert("El promedio de notas es igual a "+promedio);
}
