document.getElementById('menu').addEventListener('change', function() {

    event.preventDefault();  // Evita la recarga de la página

    //region imagenes 

    //endregion

    const vent1 = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2FMnrFZtppwbIAAaylCSSN6cGl0CTzstxRce1wjl3qdegdxmjY892y7OzYo2CLnK0hnr6wappKD1Idb-s6Wls6XZjhgyQQztV67PHQWpj6rFp1-lThvSa15BVBz9apjQOHtH-y1qrXbv9cdVx6GCuhyphenhyphenop0acUehlFcpLQE1IxPysz1NlfPyFOc_96CwUh/s500/ventana1.webp"
    const vent2 = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigrw1OTK4lTEbdy4fC0ltw9sUir3px7Vx1kYRoSA1sZ92iDqPUhhl80ERBUoQbO6OkgnDZJsdNP7b6ln33Zkdl94-bdGjfbIG_5Xx3xYw9wh4VAoT2F0UavaDr3CwqiqeG6-dBPVDO2GNZXRMEVnnbDMOGnP84j8tUTGb0x-JBUC46pV99ulgyPN_AS9_h/s500/ventana2.png"

    var selectedValue = this.value;
    var galleryContainer = document.querySelector('.gallery-container .gallery');
    
    // Limpia la galería actual
    galleryContainer.innerHTML = '';

    // Carga las imágenes correspondientes a la selección
    if (selectedValue === 'escaleras') {
        galleryContainer.innerHTML = `
            <img src="/escalera1.webp" alt="Escalera metalica gris Torreon coahuila">
            <img src="/escalera2.webp" alt="Escalera metalica para tu negocio o empresa gris Torreon coahuila">
            <img src="/escalera3.webp" alt="Hermosa escalera metallica en  Torreon coahuila">

        `;
    } else if (selectedValue === 'puerta1') {
        galleryContainer.innerHTML = `
            <img src="src/logo.png" alt="Puerta 1 - Imagen 1">
            <img src="src/puerta1_2.jpg" alt="Puerta 1 - Imagen 2">
        `;
    } else if (selectedValue === 'ventana1') {
        galleryContainer.innerHTML = `
            <img src="${vent1}" alt="Ventana 1 - Imagen 1">
            <img src="${vent2}" alt="Ventana 1 - Imagen 2">
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

