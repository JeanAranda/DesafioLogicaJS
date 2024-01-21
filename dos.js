/*Programar requiere práctica. Hemos creado una lista adicional de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje. ¿Listo para practicar?

Desafíos:*/

//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaDeLaSemana = prompt('Ingrese el día de la semana');
if (diaDeLaSemana === 'Sabado' || diaDeLaSemana === 'Domingo'){
    alert('¡Buen fin de semana!');
}else{
    alert('¡Buena semana!');
}
//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt('Ingresa un número positivo o negativo');
if (numero > 0){
    alert('El número es positivo');
}else if (numero < 0){
    alert('El número es negativo');
}else{
    alert('El número es cero');
}
//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
let puntuacion = prompt('Ingresa la puntuación');
if (puntuacion >= 100){
    alert('¡Felicidades, has ganado!')
}else{
    alert('Intenta nuevamente para ganar.')
}

//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let  saldoDeCuenta = prompt('Ingresa el saldo de cuenta');
alert('Tu saldo de cuenta es '+saldoDeCuenta);
//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt('Ingrese su nombre ');
alert('Bienvenido '+nombre);