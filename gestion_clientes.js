// Arreglo para simular la base de datos de clientes
let clientes = [];

// Función para agregar un cliente
function agregarCliente(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const cliente = {
        id: Date.now(), // Usamos el timestamp para generar un ID único
        nombre,
        apellido,
        dni,
        email,
        password
    };

    clientes.push(cliente); // Agregamos el cliente al arreglo

    mostrarClientes(); // Actualizamos la lista de clientes
    ocultarFormulario(); // Ocultamos el formulario después de agregar
}

// Función para mostrar el formulario de agregar cliente
function mostrarFormulario() {
    document.getElementById("cliente-formulario").style.display = "block";
}

// Función para ocultar el formulario
function ocultarFormulario() {
    document.getElementById("cliente-formulario").style.display = "none";
}

// Función para eliminar un cliente
function eliminarCliente(id) {
    clientes = clientes.filter(cliente => cliente.id !== id);
    mostrarClientes(); // Actualizamos la lista de clientes
}

// Función para mostrar todos los clientes
function mostrarClientes() {
    const listaClientes = document.getElementById("clientes-lista");
    listaClientes.innerHTML = ''; // Limpiamos la lista antes de mostrarla

    clientes.forEach(cliente => {
        const li = document.createElement("li");
        li.textContent = `${cliente.nombre} ${cliente.apellido} (DNI: ${cliente.dni}, Correo: ${cliente.email})`;

        // Botón para eliminar
        const eliminarButton = document.createElement("button");
        eliminarButton.textContent = "Eliminar";
        eliminarButton.onclick = function() {
            eliminarCliente(cliente.id);
        };

        li.appendChild(eliminarButton);
        listaClientes.appendChild(li);
    });
}

// Mostrar los clientes al cargar la página
window.onload = mostrarClientes;
