




    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });


   // añadimos el header a el html
        fetch('header.html')
            .then(response => response.text())
            .then(data => document.getElementsByClassName('header').innerHTML = data);





           


        
            