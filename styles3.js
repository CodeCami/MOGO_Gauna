// app.js

function selectGender(gender) {
    let targetPage = '';

    if (gender === 'masculino') {
        targetPage = 'eleccion_perfil_masculino.html';
    } else if (gender === 'licuadora') {
        targetPage = 'eleccion_perfil_licuadora.html';
    } else if (gender === 'femenino') {
        targetPage = 'eleccion_perfil_femenino.html';
    }

    // Redirige a la página seleccionada
    if (targetPage) {
        window.location.href = targetPage;
    }
}
