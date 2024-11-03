// Referencia al formulario y sus elementos
const form = document.getElementById('formRegistro');
const fechaNacimiento = document.getElementById('fechaNacimiento');

// Función para validar la edad (debe ser mayor de 18 años)
function validarEdad() {
    const fechaNac = new Date(fechaNacimiento.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        return edad - 1;
    }
    return edad;
}

// Evento de envío del formulario
form.addEventListener('submit', function(event) {
    const edad = validarEdad();

    if (edad < 18) {
        // Si el usuario es menor de 18 años, muestra un mensaje y no envía el formulario
        alert('Debes tener al menos 18 años para registrarte.');
        event.preventDefault(); // Evita el envío del formulario
    }
});