document.addEventListener('DOMContentLoaded', function() {
    const showGifBtn = document.getElementById('show-gif-btn');
    const gifContainer = document.getElementById('gif-container');

    showGifBtn.addEventListener('click', function() {
        if (gifContainer.classList.contains('visible')) {
            gifContainer.style.opacity = '0';
            gifContainer.style.maxHeight = '0';
            setTimeout(() => {
                gifContainer.classList.remove('visible');
            }, 500); // Tempo da transição em milissegundos
            showGifBtn.textContent = 'Mostrar Corrente Elétrica';
        } else {
            gifContainer.classList.add('visible');
            setTimeout(() => {
                gifContainer.style.opacity = '1';
                gifContainer.style.maxHeight = '1000px'; // Ajuste este valor conforme necessário
            }, 10); // Pequeno atraso para garantir que a transição ocorra
            showGifBtn.textContent = 'Esconder Corrente Elétrica';
        }
    });
});