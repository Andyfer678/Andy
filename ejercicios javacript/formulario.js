document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Limpiar mensajes de error previos
    document.getElementById('errorMessages').innerHTML = '';
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    let errorMessages = [];
    
    // Validar que los campos no estén vacíos
    if (!username || !password || !confirmPassword) {
        errorMessages.push("Todos los campos son obligatorios.");
    }
    
    // Validar que el nombre de usuario no tenga espacios ni empiece con un número
    if (/\s/.test(username)) {
        errorMessages.push("El nombre de usuario no puede contener espacios.");
    }
    if (/^\d/.test(username)) {
        errorMessages.push("El nombre de usuario no puede empezar con un número.");
    }
    
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        errorMessages.push("Las contraseñas no coinciden.");
    }

    // Validar que las contraseñas no empiecen con el nombre de usuario
    if (password.startsWith(username) || confirmPassword.startsWith(username)) {
        errorMessages.push("Las contraseñas no pueden empezar con el nombre de usuario.");
    }

    // Mostrar errores si existen
    if (errorMessages.length > 0) {
        document.getElementById('errorMessages').innerHTML = errorMessages.join('<br>');
    } else {
        alert("Formulario enviado con éxito.");
        // Aquí podrías enviar el formulario si las validaciones son correctas
    }
});