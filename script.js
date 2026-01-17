document.addEventListener('DOMContentLoaded', () => {
    const carouselSlidesImg = document.getElementById('carousel-slides-img');
    const slidesImg = document.querySelectorAll('.carousel-img');
    const carouselDotsImg = document.getElementById('carousel-dots-img');
    
    // Vérifie si le carrousel d'images existe avant de continuer
    if (carouselSlidesImg && slidesImg.length > 0) {
        const slideWidthImg = slidesImg[0].clientWidth;
        let currentSlideImg = 0;
        let intervalId;

        // Fonction pour mettre à jour l'état des points
        function updateDots() {
            // Supprime la classe 'active' de tous les points
            document.querySelectorAll('.dot-img').forEach((dot, index) => {
                dot.classList.remove('bg-white');
                dot.classList.add('bg-gray-400');
            });
            // Ajoute la classe 'active' au point de la slide courante
            carouselDotsImg.children[currentSlideImg].classList.remove('bg-gray-400');
            carouselDotsImg.children[currentSlideImg].classList.add('bg-white');
        }

        // Fonction pour faire défiler le carrousel
        function nextSlide() {
            currentSlideImg++;
            if (currentSlideImg >= slidesImg.length) {
                currentSlideImg = 0;
            }
            const offset = -currentSlideImg * slideWidthImg;
            carouselSlidesImg.style.transform = `translateX(${offset}px)`;
            updateDots();
        }

        // Fonction pour aller à une slide spécifique
        function goToSlide(index) {
            currentSlideImg = index;
            const offset = -currentSlideImg * slideWidthImg;
            carouselSlidesImg.style.transform = `translateX(${offset}px)`;
            updateDots();
            // Réinitialise l'intervalle pour éviter un changement immédiat après le clic
            clearInterval(intervalId);
            intervalId = setInterval(nextSlide, 4000);
        }

        // Création des points de navigation
        slidesImg.forEach((slide, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot-img', 'block', 'w-2', 'h-2', 'rounded-full', 'cursor-pointer', 'transition-colors', 'duration-300', 'ease-in-out', 'bg-gray-400');
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            carouselDotsImg.appendChild(dot);
        });

        // Démarre le défilement automatique
        intervalId = setInterval(nextSlide, 4000);

        // Met à jour les points au premier chargement
        updateDots();
    }
});

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-dropdown').forEach(button => {
        button.addEventListener('click', () => {
            const submenu = button.nextElementSibling;
            submenu.classList.toggle('hidden');
        });
    });

