// array que contiene los nombres 
let amigos = []
let numeroAleatorio = 0

// validar si el input del nombre esta vacio o si no es un numero
function validarEntrada(){
    let inputNombre = document.querySelector('.input-name').value
    let resultado = true
    // verificar si el input no esta vacio o si no es un número
    if(inputNombre == '' || !isNaN(Number(inputNombre))){
        alert('Por favor, inserte un nombre valido.')
        resultado = false
    }
    return resultado;
    
    
}

// limpiar input
function limpiarInput(){
    let inputNombre = document.querySelector('.input-name')
    inputNombre.value = ''
}

function agregarAmigo(){
    resultado = validarEntrada()
    let nombre = document.querySelector('.input-name').value
    if(resultado){
        // agrega los nombres a la lista
        amigos.push(nombre) 
        limpiarInput()
        visualizarLista()
    }
  
}

// funcion para imprimir la lista 
function visualizarLista(){
    let lista = document.querySelector('.name-list')
    let elementoLista = document.createElement('li')
    amigos.forEach(nombre => {
        elementoLista.textContent = nombre
        lista.appendChild(elementoLista)
    });
   
    
}

// funcion que crear el numero aleatorio
function crearNumeroAleatorio(rango){
    numeroAleatorio = Math.floor(Math.random()*rango)
    return numeroAleatorio
}

// funcion para seleccionar el amigo
function sortearAmigo(){
    let rango = amigos.length
    if(rango!=0){
        numeroAleatorio = crearNumeroAleatorio(rango)
        let resultadoSorteo = document.querySelector('.result-list')
        resultadoSorteo.innerHTML = amigos[numeroAleatorio]
    }else{
        alert('Por favor, ingrese los nombres')
    }
    document.querySelector('#reiniciar').removeAttribute('disabled')
    
}

// Funcion para limpiar la lista de amigos y resultado
function limpiarLista(){
    let lista = document.querySelector('.name-list')
    let resultadoSorteo = document.querySelector('.result-list')
    lista.innerHTML = ''
    resultadoSorteo.innerHTML = ''
}

function reiniciarSorteo(){
    condicionesIniciales()
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    
}

function condicionesIniciales(){
    amigos = []
    limpiarLista()
}

