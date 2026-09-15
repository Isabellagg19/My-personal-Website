const toggleButton = document.querySelector('.toggle-info');
const infoDiv = document.querySelector('.info');

// Agrega un evento al botón
toggleButton.addEventListener('click', () => {
  // Si está oculto, lo muestra; si está visible, lo oculta
  if (infoDiv.style.display === 'none') {
    infoDiv.style.display = 'block';
  } else {
    infoDiv.style.display = 'none';
  }
});