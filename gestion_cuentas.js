// Simulación de base de datos
let cuentas = [];

// Función para agregar una cuenta
function agregarCuenta(event) {
    event.preventDefault();

    const codigo = document.getElementById("codigoCuenta").value;
    const saldo = parseFloat(document.getElementById("saldoInicial").value);
    const cliente = document.getElementById("cliente").value;

    // Crear objeto cuenta
    const nuevaCuenta = {
        codigo,
        saldo,
        cliente
    };

    // Agregar cuenta al array
    cuentas.push(nuevaCuenta);

    // Limpiar el formulario
    document.getElementById("formAgregarCuenta").reset();

    // Actualizar la lista de cuentas
    actualizarListaCuentas();
}

// Función para mostrar todas las cuentas
function actualizarListaCuentas() {
    const tablaCuentas = document.getElementById("tablaCuentas").getElementsByTagName("tbody")[0];
    tablaCuentas.innerHTML = "";

    cuentas.forEach(cuenta => {
        const fila = tablaCuentas.insertRow();

        fila.innerHTML = `
            <td>${cuenta.codigo}</td>
            <td>${cuenta.saldo}</td>
            <td>${cuenta.cliente}</td>
            <td><button onclick="eliminarCuenta('${cuenta.codigo}')">Eliminar</button></td>
        `;
    });
}

// Función para eliminar cuenta
function eliminarCuenta(codigo) {
    cuentas = cuentas.filter(cuenta => cuenta.codigo !== codigo);
    actualizarListaCuentas();
}

// Función de logout
function logout() {
    localStorage.removeItem("clienteEmail");
    window.location.href = "index.html";
}

// Al cargar la página, actualizar la lista de cuentas
window.onload = function() {
    // Simulación: podríamos cargar las cuentas desde un archivo o base de datos real
    actualizarListaCuentas();

    // Agregar el evento al formulario
    document.getElementById("formAgregarCuenta").addEventListener("submit", agregarCuenta);
};
