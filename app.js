/*let titulo = document.querySelector('h1'); //conecta js con html, en este caso query selector nos dice que a la cantidad de elementos dentro de h1 le vamos a asigar una variable 
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Escribe un número del 1 al 10';*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    return;*/
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    /*let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';*/
    document.querySelector('#valorUsuario').value = ''; //esto es lo mismo que el comentario de arriba pero ahorra memoria ya que queda en una sola linea de codigo
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros posibles 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado esta incluidoen la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();//Si se genera por ejemplo 5, y en la siguiente vuelve a generar 5 se manda llamara la funcion nuvamente, si no lo agrega (recursividad=poder utilizar la funcionalidad que ya esta hecha)
        }else {
            listaNumerosSorteados.push(numeroGenerado);//push agrega un elemento nuevo a la lista
            return(numeroGenerado);
        }
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio   
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
