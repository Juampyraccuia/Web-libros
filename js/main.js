document.addEventListener('DOMContentLoaded', () => {
    const elementosLibros = document.querySelectorAll('.libro-item');

    elementosLibros.forEach(elemento => {
        const calificacion = parseFloat(elemento.getAttribute('data-rating'));
        const contenedorEstrellas = elemento.querySelector('.stars');

        for (let i = 0; i < 5; i++) {
            const estrella = document.createElement('i');
            estrella.classList.add('fas', 'fa-star');

            if (i < Math.floor(calificacion)) {
                estrella.classList.add('filled');
            } else if (i < calificacion) {
                // Verificar si la parte decimal es mayor que 0.25 para mostrar la mitad de la estrella
                if (calificacion - i >= 0.25 && calificacion - i <= 0.75) {
                    estrella.classList.add('half');
                } else {
                    estrella.classList.add('filled');
                }
            }

            contenedorEstrellas.appendChild(estrella);
        }
    });
});

setInterval(mostrarSiguienteElemento, 3000);

// Inicializar el primer elemento como activo
elementos[indiceActual].classList.add('active');
