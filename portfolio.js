const toggleButton = document.querySelectorAll('.toggle-info');

toggleButton.forEach(button => {
  button.addEventListener('click', () => {

    const infoDiv = button.nextElementSibling;

    if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
      infoDiv.style.display = 'block';
    } else {
      infoDiv.style.display = 'none';
    }
  });
});