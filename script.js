document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const step1 = document.querySelector('.step-1');
    const step2 = document.querySelector('.step-2');
    const header = document.querySelector('header');
    const energies = document.querySelectorAll('.intro .energy');
    const headerEnergies = document.querySelectorAll('header .energy');
    const container = document.querySelector('.container');
    const cards = document.querySelectorAll('.card');

    function animateIntro() {
        setTimeout(() => {
            step1.style.opacity = '1';
            step1.style.transform = 'scale(1)';
            setTimeout(() => {
                step1.style.opacity = '0';
                step1.style.transform = 'scale(0.5)';
                setTimeout(() => {
                    step2.style.opacity = '1';
                    setTimeout(() => {
                        animateEnergies(energies);
                        setTimeout(() => {
                            intro.style.opacity = '0';
                            setTimeout(showMainContent, 500);
                        }, 2000);
                    }, 1000);
                }, 500);
            }, 2000);
        }, 100);
    }

    function showMainContent() {
        intro.style.display = 'none';
        document.body.style.overflow = 'auto';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
        animateEnergies(headerEnergies);
        initIntersectionObserver();
    }

    function animateEnergies(energyElements) {
        energyElements.forEach((energy, index) => {
            setTimeout(() => energy.classList.add('active'), index * 500);
        });
    }

    function initIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible', 'expanded');
                    showPreview(entry.target);
                } else {
                    entry.target.classList.remove('expanded');
                    hidePreview(entry.target);
                }
            });
        }, { threshold: 0.6 });

        cards.forEach(card => observer.observe(card));
    }

    function showPreview(card) {
        const preview = card.querySelector('.preview');
        const previewText = preview.querySelector('.preview-text');
        preview.style.opacity = '1';

        const previewContent = {
            solar: 'Explore o potencial da energia solar',
            quimica: 'Descubra os avanços da energia química',
            nuclear: 'Entenda os desafios da energia nuclear',
            eolica: 'Conheça o poder da energia eólica'
        };

        previewText.textContent = previewContent[card.id];
    }

    function hidePreview(card) {
        card.querySelector('.preview').style.opacity = '0';
    }

    document.body.style.overflow = 'hidden';
    animateIntro();

    cards.forEach(card => {
        card.addEventListener('click', () => console.log(`Clicou em ${card.id}`));
    });

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => showPreview(card));
            card.addEventListener('mouseleave', () => hidePreview(card));
        });
    }
});