// app.js
// Mostrar el perfil actual de los masculinos
function mostrarPerfil(index) {
    const perfil = perfilesMasculinos[index];
    document.querySelector(".profile-pic img").src = perfil.imagen;
    document.querySelector(".profile-details h3").innerText = perfil.nombre;
    document.querySelector(".profile-details p").innerText = perfil.descripcion.substring(0, 40) + "...";
}


const perfiles = [
    {
        nombre: "Juan",
        imagen: "juan.jpg",
        descripcion: "Me gusta la aventura y viajar por el mundo.",
        genero: "masculino"
    },
    {
        nombre: "Ana",
        imagen: "ana.jpg",
        descripcion: "Amante de los animales y de la buena cocina.",
        genero: "femenino"
    },
    {
        nombre: "LicuadoraX3000",
        imagen: "licuadora.jpg",
        descripcion: "Lo mejor para tus batidos, ¡de calidad industrial!",
        genero: "licuadora"
    }
];

// app.js

// Función para abrir y cerrar el menú
function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

// Funciones de navegación de perfiles
let currentProfileIndex = 0; // Muestra el índice actual de perfil

function showNextProfile() {
    currentProfileIndex++;
    loadProfile(currentProfileIndex);
}

function showPreviousProfile() {
    if (currentProfileIndex > 0) {
        currentProfileIndex--;
        loadProfile(currentProfileIndex);
    }
}

function loadProfile(index) {
    // Aquí cargarías los datos del perfil de un array o fuente de datos
    console.log(`Cargando perfil ${index}`);
}

// Función para manejar el "me gusta"
let likedProfiles = [];

function handleLike() {
    likedProfiles.push(currentProfileIndex);
    console.log("Me gusta guardado:", likedProfiles);
    showNextProfile();
}

// Función para cambiar de página en el menú
function goToPage(page) {
    switch (page) {
        case 'miPerfil':
            window.location.href = 'mi_perfil.html';
            break;
        case 'misMeGustas':
            window.location.href = 'mis_megustas.html';
            break;
        case 'sobreNosotros':
            window.location.href = 'sobre_nosotros.html';
            break;
        case 'configuraciones':
            window.location.href = 'configuraciones.html';
            break;
        case 'eleccionGenero':
            window.location.href = 'eleccion_genero.html';
            break;
    }
}
