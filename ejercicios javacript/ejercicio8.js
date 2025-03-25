function actualizarContador() {
    if(botoncheck.checked == true)
        botoncheck.form.botonrnviado.disable=false
    else
    botoncheck.form.botonrnviado.disable=true
}

function actualizar(campatexto){
    //alert(campatexto.vaalue)
    //longitud = campatexto.value.length
    campatexto.form.restantes.value = campatexto.value.length
    campatexto.form.restantes.value = 140-campatexto.value.length
}
  