// Carga modo guardado (localStorage)
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('brailia-mode') || 'light';
  document.body.classList.toggle('dark', savedMode === 'dark');

  const toggleBtn = document.getElementById('toggle-mode');
  toggleBtn.textContent = savedMode === 'dark' ? 'Modo Día' : 'Modo Noche';

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('brailia-mode', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? 'Modo Día' : 'Modo Noche';
  });

  // Enviar mensaje al chat
  const chatWindow = document.getElementById('chat-window');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');

  function addMessage(text, fromUser = true) {
    const msg = document.createElement('div');
    msg.textContent = text;
    msg.style.padding = '0.5rem 1rem';
    msg.style.borderRadius = '12px';
    msg.style.maxWidth = '70%';
    msg.style.alignSelf = fromUser ? 'flex-end' : 'flex-start';
    msg.style.backgroundColor = fromUser ? '#00b6a8' : '#00fff2';
    msg.style.color = fromUser ? 'white' : '#004136';
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  sendBtn.addEventListener('click', () => {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, true);
    chatInput.value = '';
    // Aquí podrías agregar lógica para responder o procesar el texto
  });

  chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });

  // Opciones predefinidas
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('click', () => {
      const text = option.textContent;
      addMessage(text, true);
    });
  });
});
