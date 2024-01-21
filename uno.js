/*Practicar la lógica de programación, incluyendo conceptos como variables, condicionales (if), alertas (alert), solicitudes (prompt), es esencial para tu carrera y desarrollo. Estos fundamentos proporcionan la base para resolver problemas de manera estructurada, tomar decisiones en el código, crear bucles controlados e interactuar eficazmente con las personas.

Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para generar soluciones innovadoras, depurar de manera eficiente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde el principio es fundamental para construir una carrera exitosa en el campo de la programación.

Con esto en mente, hemos creado una lista de actividades (no obligatorias) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje. ¿Listo para practicar?

Desafíos*/

//Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
alert('¡Bienvenida y bievenido a nuestro sitio web!');
//Declara una variable llamada nombre y asígnale el valor "Luna".
let nombre = "Luna";
//Crea una variable llamada edady asígnale el valor 25.
let edad = 25;
//Establece una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas = 50;
//Establece una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible = 1000;
//Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert("¡Error! Completa todos los campos");
//Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);
//Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
let nombre2 = prompt("Ingrese el nombre de usuario");
//Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
let edad2 = prompt('Ingrese su edad');
//Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
let edad3 = prompt("Ingrese la edad");
if (edad3 >= 18){
    alert('¡Puedes obtener tu licencia de conducir!')
}else{
    alert('Lo siento no eres mayor de edad');
    console.log(edad3 + " Esta edad es menor o invalida")
}