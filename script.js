// Datos de usuario para validar (solo para pruebas)
const validUser = {
    email: "email@algo.com", // Correo electrónico
    password: "1234"          // Contraseña
};

// Función para manejar el inicio de sesión
function login(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    // Obtener los valores ingresados por el usuario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("login-error");
    
    // Comprobar si el correo y la contraseña coinciden con los valores válidos
    if (email === validUser.email && password === validUser.password) {
        // Si las credenciales son correctas, redirigir al usuario a la página principal
        sessionStorage.setItem("userEmail", email); // Guardamos el correo en sessionStorage para simular una sesión
        window.location.href = "principal.html"; // Redirigimos a la página principal
    } else {
        // Si las credenciales son incorrectas, mostrar el mensaje de error
        errorElement.style.display = "block";
    }
}


