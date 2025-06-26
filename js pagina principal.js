// Script para alternar modo claro/oscuro
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

// Establece el modo según preferencia previa (si existe)
if (localStorage.getItem('mode') === 'dark') {
  body.classList.add('dark');
} else {
  body.classList.add('light');
}

// Alternar entre modos
function toggleMode() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('mode', 'light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('mode', 'dark');
  }
}

toggleButton.addEventListener('click', toggleMode);
