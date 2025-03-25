//1. Escribir una página web donde se generen con javascript los 10 primeros números
//<ul id="numeros-lista"></ul> Agregarlo a la lista en el HTML
/*for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.textContent = i; // Asignar el número al contenido del li
    document.getElementById('numeros-lista').appendChild(li); // Agregarlo a la lista en el HTML

}*/

//2. Escribir una página web donde se generen con javascript los 50 primeros números pares
// <ul id="pares-lista"></ul> Agregarlo a la lista en el HTML
/*for (let i = 1; i <= 50; i++) {
    let numeroPar = i * 2; // Multiplicamos por 2 para obtener los números pares
    let li = document.createElement('li');
    li.textContent = numeroPar; // Asignar el número par al contenido del li
    document.getElementById('pares-lista').appendChild(li); // Agregarlo a la lista en el HTML
}*/

//3. Escribir una página web con javascript donde se generen los 5 primeros números múltiplos de uno dado por el usuario
/*function generarMultiplos() { 
    let numero = document.getElementById('numero').value;// Obtenemos el valor ingresado por el usuario
    // Limpiamos la lista de múltiplos en cada ejecución
    let lista = document.getElementById('multiples-lista');
    lista.innerHTML = '';
    // Verificamos que el número ingresado sea válido
    if (numero <= 0 || isNaN(numero)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }
    // Generar los 5 primeros múltiplos del número
    for (let i = 1; i <= 5; i++) {
        let multiplo = numero * i;
        let li = document.createElement('li');
        li.textContent = multiplo; // Asignar el múltiplo al contenido del li
        lista.appendChild(li); // Agregarlo a la lista en el HTML
    }
}
function deshailotar(boton){
    boton.form.botonenviar.disabled = true;
}
function validar(formulario){
    let correcto =false
    let espacio = 0
    let element = formulario.nombre.value
    for(i=0; i<element.length; i++)
        if(element[i] == " ")
            espacio++
        if(espacio == 0)
            correcto = true
        else
        alert("el nmbre de usuario no puede tener espacio en blanco")
            return correcto;
}
//el nombre no puede tener espacio en blanco ni en la contraseña 
// no puede coincidir con el nombre y igual en el campo de repetir
// script.js

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const contraseña = document.getElementById('contraseña').value;
    const repetirContraseña = document.getElementById('repetir-contraseña').value;

    if (nombre.includes(' ') || contraseña.includes(' ')) {
        alert('El nombre y la contraseña no pueden tener espacios en blanco.');
        return;
    }
    if (nombre === contraseña) {
        alert('El nombre no puede ser igual a la contraseña.');
        return;
    }
    if (contraseña !== repetirContraseña) {
        alert('Las contraseñas no coinciden.');
        return;
    }
    alert('Formulario enviado correctamente.');
    
});*/