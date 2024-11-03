// app.js

// Al hacer clic en "Crear Perfil" muestra el formulario de creación
document.getElementById('createProfileBtn').addEventListener('click', () => {
    document.getElementById('home').style.display = 'none';
    document.getElementById('profileCreation').style.display = 'block';
});

// Validación del formulario y almacenamiento de datos
document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío del formulario para manejarlo con JS

    // Recoge los valores del perfil
    const username = document.getElementById('username').value;
    const lookingFor = document.getElementById('lookingFor').value;

    // Simula guardar los datos y redirige a la sección "eleccion_genero"
    alert(`Perfil creado: ${username} - ${lookingFor}`);

    // Aquí podrías redirigir a la sección "eleccion_genero"
    // Por ejemplo:
    window.location.href = "eleccion_genero.html";  // Esto cargaría la página "eleccion_genero.html"
});
