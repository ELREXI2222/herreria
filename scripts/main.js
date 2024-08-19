const verMasButton = document.getElementById('verMas');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.modal .close');

    verMasButton.addEventListener('click', function() {
        modal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });


   // añadimos el header a el html
        fetch('header.html')
            .then(response => response.text())
            .then(data => document.getElementsByClassName('header').innerHTML = data);


           
        
            