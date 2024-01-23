/*Hemos llegado a otra lista de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje. ¿Vamos a hacerlo? Desafíos:*/

//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while(contador < 10){
    console.log("El contador esta contando", contador)
    contador ++;
}
//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador2 = 10;
while(contador >= 0){
    console.log("El contador comienza en en diez hasta cero", contador)
    contador --;
}
//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroMax = promt("Ingresa el número para la cuenta regresiva:");

while(numeroMax >= 0){
    console.log(numeroMax)
    numeroMax --;
}
//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroMax2 = prompt("Ingresa el número para la cuenta progresiva:");
let contador3
while(contador3 <= numeroMax2){
    console.log(contador3)
    contador++;
}