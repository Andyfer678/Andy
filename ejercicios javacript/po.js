/*var numeros=[34,15,2,26,7,11,49,15,10,23]
var mayor=numeros[0]
var menor=numeros[0]
var suma = 0
var media = 0

for(i=0;i<numeros.length ; i++){
    suma += numeros[i]
        if(mayor < numeros[i])
            mayor = numeros[i]
        if(menor < numeros[i])
            menor = numeros[i]
}

document,write("la lista tiene" + numeros.length + "numero<br/>")
document,write("es mayor es " + mayor + "y el menor es " + menor + "br/")
document,write("la media arimetica de todos es " + suma/numeros.length)*/

var numeros = new Array()

function iniciar(){
    for(i=0; i<10; i++){
        n = 1+Math.floor(Math.random()*50)
        numeros.push(n)
    }
    enrojo()
    /*element = document.getElementById("parrafo")
    for(i=0; i<10; i++){
        nuevo = document.createElement("span")
        element.appendChild(nuevo)
        nuevo.innerHTML = numeros[i].toStrimg() + "<br/>"
        if(numeros[i]%2 == 0 && numeros[i]%3 == 0 )
            numeros.setAttribute("class","estilorojo")
        else
            nuevo.setAttribute("class","estiloazul")
    }*/
}

function cambiar(titular){
    element = document.getElementById("parrafo")
    element.innerHTML=""
    if(titular.innerHTML=="En rojo y negrita los pares y divisibles por tres"){
        enazul()
        titular.innerHTML = "En rojo y negrita los pares y divisibles por tres"
    }
    else{
        enrojo()
        titular.innerHTML = "En rojo y negrita los pares y divisibles por tres"
    }

}
function enazul(){
    element = document.getElementById("parrafo")
    for(i=0; i<10; i++){
        nuevo = document.createElement("span")
        element.appendChild(nuevo)
        nuevo.innerHTML = numeros[i].toStrimg() + "<br/>"
        if(numeros[i]%2 == 0 && numeros[i]%3 == 0 )
            numeros.setAttribute("class","estiloazul")
        else
            nuevo.setAttribute("class","estiloazul")


    }
}
function enrojo(){
    element = document.getElementById("parrafo")
    for(i=0; i<10; i++){
        nuevo = document.createElement("span")
        element.appendChild(nuevo)
        nuevo.innerHTML = numeros[i].toStrimg() + "<br/>"
        if(numeros[i]%2 == 0 && numeros[i]%3 == 0 )
            numeros.setAttribute("class","estilorojo")
        else
            nuevo.setAttribute("class","estilorojo")

    }
}