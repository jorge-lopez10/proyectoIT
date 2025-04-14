// Simulación de base de datos de clientes
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

// Función para mostrar todos los clientes
function mostrarClientes() {
    const tablaClientes = document.getElementById("tablaClientes").getElementsByTagName("tbody")[0];
    tablaClientes.innerHTML = ""; // Limpiar la tabla antes de mostrar los nuevos datos

    clientes.forEach(cliente => {
        const fila = tablaClientes.insertRow();

        fila.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellido}</td>
            <td>${cliente.dni}</td>
        `;
    });
}

// Función para buscar clientes
function buscarClientes() {
    const query = document.getElementById("searchCliente").value.toLowerCase();

    // Filtramos los clientes que coinciden con el criterio de búsqueda
    const clientesFiltrados = clientes.filter(cliente => {
        return (
            cliente.id.toLowerCase().includes(query) ||
            cliente.nombre.toLowerCase().includes(query) ||
            cliente.apellido.toLowerCase().includes(query)
        );
    });

    // Limpiar la tabla
    const tablaClientes = document.getElementById("tablaClientes").getElementsByTagName("tbody")[0];
    tablaClientes.innerHTML = "";

    // Mostrar los resultados filtrados
    clientesFiltrados.forEach(cliente => {
        const fila = tablaClientes.insertRow();

        fila.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellido}</td>
            <td>${cliente.dni}</td>
        `;
    });
}

// Función de logout
function logout() {
    localStorage.removeItem("clienteEmail");
    window.location.href = "index.html";
}

// Al cargar la página, mostrar la lista de clientes
window.onload = function() {
    mostrarClientes();
};
