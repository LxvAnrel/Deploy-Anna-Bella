// Supondo que o pop-up já esteja criado no HTML com o conteúdo desejado
const popup = document.getElementById(popup); // Substitua 'meuPopup' pelo ID real do seu pop-up
function showPopup(event) {
  // Obtém a posição do cursor do mouse
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Calcula a posição do pop-up
  const popupWidth = popup.offsetWidth;
  const popupHeight = popup.offsetHeight;
  let popupX = mouseX + 10;
  let popupY = mouseY;

  if (popupX + popupWidth > window.innerWidth) {
    popupX = mouseX - popupWidth - 10;
  }
  if (popupY + popupHeight > window.innerHeight) {
    popupY = window.innerHeight - popupHeight - 10;
  }

  // Define a posição e mostra o pop-up
  popup.style.left = popupX + 'px';
  popup.style.top = popupY + 'px';
  popup.style.visibility = 'visible'; 

  // Adiciona eventos de mouseover e mouseout
  popup.addEventListener('mouseover', () => {
    popup.classList.add('hover'); 
  });

  popup.addEventListener('mouseout', () => {
    popup.classList.remove('hover');
    if (!popup.classList.contains('hover')) { 
      popup.style.visibility = 'hidden'; 
    }
  });
}

// Exemplo de uso (assumindo que você tem um botão com o ID 'trigger')
const popup_trigger = document.getElementById('popup_trigger');
popup_trigger.addEventListener('click', showPopup);