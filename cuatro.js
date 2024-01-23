/*Y vamos a poner en práctica nuestro conocimiento con otra lista de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje.

Desafíos finales:*/

//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Hola bienvenido al juego");
//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Jean Pierre";
console.log(`Hola, ${nombre} !`);
//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombre2 = "Jean Pierre";
alert(`¡Hola, ${nombre2}!`);
//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let pregunta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`El lenguaje preferido es: ${pregunta}`);
//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 5;
let valor2 = 10;

let resultado = valor1+valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);
//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let valer1 = 6;
let valer2 = 7;
let resultade = valer1-valer2;
console.log(`La diferencia entre ${valer1} y ${valer2} es ${resultade}.`)
//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt('Ingresa tu edad:');
if (edad >= 18){
    alert('Eres mayor de edad');
}else{
    alert('Lo siento eres pulpin');
};
//Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = prompt('Ingresa un número:');
if (numero > 0){
    alert('El número es positivo');
}else if (numero < 0){
    alert('El número es negativo');
}else{
    alert('El número es cero');
};
//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let numeros = 1;
while(numeros <= 10){
    console.log(numeros);
    numeros++;
}
//Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = prompt('Ingresa la nota:');
if (nota >= 7){
    console.log('Aprobado');
}else{
    console.log('Reprobado');
};

//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio = Math.random(); 
console.log(`Número aleatorio generado ${numeroAleatorio}`);
//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numeroAleatorio2 = Math.floor(Math.random()*10)+1;
console.log(`El número aleatorio entero es: ${numeroAleatorio2}`);
//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numeroAleatorio3 = parseInt(Math.floor(Math.random()*1000)+1);
console.log(`El número aleatorio de 1 a 1000 entero es ${numeroAleatorio3}`);