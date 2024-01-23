let numeroMaxPosible = 20;
let numeroSecreto = Math.floor(Math.random()*numeroMaxPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabaraVeces = 'vez';
let maximosIntentos = 4;
console.log(numeroSecreto);
while (numeroUsuario !=  numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas el número entre 1 y ${numeroMaxPosible}`));
    console.log(typeof(numeroUsuario));
    
    if (numeroUsuario == numeroSecreto){
        //Acertamos
        alert(`Acertaste el número secreto es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        
        intentos ++;
        if (intentos > maximosIntentos){
            alert(`Llegaste al número maximo de ${maximosIntentos} intentos`);
            break;
        }
        
    }
}