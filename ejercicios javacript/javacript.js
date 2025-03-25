function cambiarContimente(elemento){
    continente = elemento.value
    switch(continente){
        case "Europa":
        marrakech.disabled=false
        madrid.disabled=true
        break
        case "America":
        marrakech.disabled=false
        madrid.disabled=true
        break
        case "Africa":
        break
        default:
    }
}
    /*if(continente == "Europa"){
        marrakech.disabled=false
        madrid.disabled=true
    }
    else if(continente == "Africa"){
        marrakech.disabled=false
        madrid.disabled=true
    }
    else if(continente == "America"){

    }*/
