document.getElementById('menu').addEventListener('change', function() {

    event.preventDefault();  // Evita la recarga de la página

    //region imagenes 

    //endregion


    var selectedValue = this.value;
    var galleryContainer = document.querySelector('.gallery-container .gallery');
    
    // Limpia la galería actual
    galleryContainer.innerHTML = '';

    // Carga las imágenes correspondientes a la selección
    if (selectedValue === 'escaleras') {
        galleryContainer.innerHTML = `
            <img src="src/img/escaleras/escalera1.webP" alt="Escalera metalica gris Torreon coahuila">
            <img src="src/img/escaleras/escalera2.webP" alt="Escalera metalica para tu negocio o empresa gris Torreon coahuila">
            <img src="src/img/escaleras/escalera3.webP" alt="Hermosa escalera metallica en  Torreon coahuila">

        `;
    } else if (selectedValue === 'puerta1') {
        galleryContainer.innerHTML = `
            <img src="src/logo.png" alt="Puerta 1 - Imagen 1">
            <img src="src/puerta1_2.jpg" alt="Puerta 1 - Imagen 2">
        `;
    } else if (selectedValue === 'ventana1') {
        galleryContainer.innerHTML = `
            <img src="src/ventana1_1.jpg" alt="Ventana 1 - Imagen 1">
            <img src="src/ventana1_2.jpg" alt="Ventana 1 - Imagen 2">
        `;
    }else{
        galleryContainer.innerHTML =  `<p>nada que mostrar por aqui</p>`
       

    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    const trabajos = document.getElementById('div-nuestros-trabajos');
    setTimeout(() => {
        trabajos.classList.add('show');
    }, 250); // Espera 0.5 segundos antes de mostrar el contenido
});

