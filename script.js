// Функция для добавления сообщения в чат
function addMessage(message) {
  const messageContainer = document.getElementById('message-container');
  const newMessage = document.createElement('p');
  newMessage.textContent = message;
  messageContainer.appendChild(newMessage);
}

// Обработчик события для кнопки отправки
document.getElementById('send-button').addEventListener('click', function() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  
  // Проверка наличия сообщения
  if (message.trim() !== '') {
    addMessage(message);
    messageInput.value = '';
  }
});

// Обработчик события для клавиши Enter
document.getElementById('message-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('send-button').click();
  }
});

// Добавление некоторых смайликов
addMessage('Привет! ??');
addMessage('Как дела? ??');
