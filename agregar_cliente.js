document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formAgregarCliente");
    const inputId = document.getElementById("idCliente");

    // Simula obtener todos los clientes del almacenamiento local
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    // Generar ID único
    function generarId() {
        let nuevoId = 1;
        const idsExistentes = clientes.map(c => parseInt(c.id));
        while (idsExistentes.includes(nuevoId)) {
            nuevoId++;
        }
        return nuevoId.toString();
    }

    // Mostrar ID generado
    const idGenerado = generarId();
    inputId.value = idGenerado;

    // Manejar envío de formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombreCliente").value;
        const apellido = document.getElementById("apellidoCliente").value;
        const dni = document.getElementById("dniCliente").value;

        const nuevoCliente = {
            id: idGenerado,
            nombre,
            apellido,
            dni
        };

        // Agregar y guardar
        clientes.push(nuevoCliente);
        localStorage.setItem("clientes", JSON.stringify(clientes));

        alert(`Cliente "${nombre} ${apellido}" agregado con éxito. ID: ${idGenerado}`);

        // Reiniciar formulario (y generar nuevo ID)
        form.reset();
        const nuevoId = generarId();
        inputId.value = nuevoId;
    });
});

// Botón cancelar (redirigir o limpiar formulario)
function cancelar() {
    window.location.href = "gestion_clientes.html"; // o simplemente form.reset();
}
