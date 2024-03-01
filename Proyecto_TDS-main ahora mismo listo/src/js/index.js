// Función para abrir la ventana emergente
function abrirVentanaEmergente() {
    document.getElementById('ventanaEmergenteContainer').style.display = 'block';
}

// Función para cerrar la ventana emergente
function cerrarVentanaEmergente() {
    document.getElementById('ventanaEmergenteContainer').style.display = 'none';
}

// Evento click para abrir la ventana emergente al hacer clic en el botón
document.getElementById('obtenerTaquilla').addEventListener('click', () => {
    abrirVentanaEmergente();
});

function checkSi() {
    document.getElementById('noCheckbox').checked = false;
}

// Función para desmarcar el checkbox "Si" cuando se selecciona el checkbox "No"
function checkNo() {
    document.getElementById('siCheckbox').checked = false;
}