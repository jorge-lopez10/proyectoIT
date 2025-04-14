function logout() {
    console.log("Datos en localStorage antes de logout:", localStorage.getItem("clienteEmail"));
    localStorage.removeItem("clienteEmail");  // Elimina el email del cliente almacenado
    window.location.href = "index.html";      // Redirige al login
}

/*// Verifica si el usuario está logueado
window.onload = function() {
    const email = localStorage.getItem("clienteEmail");
    if (!email) {
        // Si no está logueado, redirigimos al login
        window.location.href = "index.html";
    }
};*/
