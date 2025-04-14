function mostrarBusquedaID() {
    document.getElementById("modalBusqueda").style.display = "block";
    document.getElementById("busquedaID").value = "";
    document.getElementById("resultadoBusqueda").innerHTML = "";
  }
  
  function cerrarBusquedaID() {
    document.getElementById("modalBusqueda").style.display = "none";
  }
  
  function buscarCuentaPorID() {
    const id = document.getElementById("busquedaID").value.trim();
    const cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
  
    const cuenta = cuentas.find(c => c.codigo === id);
  
    const resultado = document.getElementById("resultadoBusqueda");
    resultado.innerHTML = "";
  
    if (cuenta) {
      const btn = document.createElement("button");
      btn.textContent = `Seleccionar Cuenta ${cuenta.codigo} (Saldo: $${cuenta.saldo})`;
      btn.onclick = () => {
        document.getElementById("cuentaSelect").value = cuenta.codigo;
        document.getElementById("cuentaConsulta").value = cuenta.codigo;
        cerrarBusquedaID();
      };
      resultado.appendChild(btn);
    } else {
      resultado.innerHTML = `<p style="color: red;">Cuenta con ID ${id} no encontrada.</p>`;
    }
  }
  