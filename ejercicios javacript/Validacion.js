document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const Numero1 = document.getElementById('Numero1').value.trim();
    const Numero2 = document.getElementById('Numero2').value;
    const Numero3 = document.getElementById('Numero3').value;

    if (Numero1.includes(' ') || Numero2.includes(' ')) {
        alert('Numero1');
        return;
    }
    if (Numero1 === Numero2) {
        alert('Numero2');
        return;
    }
    if (Numero2 !== Numero3) {
        alert('Numero3');
        return;
    }
    alert('Formulario enviado correctamente.');
    
});