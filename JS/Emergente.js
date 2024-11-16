   // Función que muestra la ventana emergente
    window.onload = function() {
        const modal = document.getElementById('modal');
        modal.style.display = 'block'; // Muestra la ventana emergente al cargar
    };

    // Función para ocultar la ventana emergente y reproducir el audio
    function startPage() {
        const modal = document.getElementById('modal');
        const audio = document.getElementById('reproductor');
        
        
        // Ocultar la ventana emergente
        modal.style.display = 'none'; 
        
        // Reproducir el audio
        audio.play().then(() => {
            document.getElementById('reproductor').volume = 0.6;
            console.log('Audio iniciado.');
        }).catch(error => {
            console.log('Error al reproducir el audio:', error);
        });
    }
