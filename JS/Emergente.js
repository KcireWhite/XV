// Función que muestra la ventana emergente
window.addEventListener('load', () => {
    // Aseguramos que todo el contenido haya cargado antes de mostrarlo
    document.body.classList.add('loaded'); // Agrega la clase que hace visible el contenido
    const modal = document.getElementById('modal');
    modal.style.display = 'block'; // Muestra la ventana emergente al cargar
});

// Función para ocultar la ventana emergente y reproducir el audio
async function startPage() {
    const modal = document.getElementById('modal');
    const audio = document.getElementById('reproductor');

    // Ocultar la ventana emergente
    modal.style.display = 'none'; 

    try {
        // Reproducir el audio
        await audio.play();
        audio.volume = 0.1;
        console.log('Audio iniciado.');
    } catch (error) {
        console.log('Error al reproducir el audio:', error);
    }
}
