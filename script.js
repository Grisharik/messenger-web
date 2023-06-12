
function addMessage(message) {
  const messageContainer = document.getElementById('message-container');
  const newMessage = document.createElement('p');
  newMessage.textContent = message;
  messageContainer.appendChild(newMessage);
}


document.getElementById('send-button').addEventListener('click', function() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  
  // Ïðîâåðêà íàëè÷èÿ ñîîáùåíèÿ
  if (message.trim() !== '') {
    addMessage(message);
    messageInput.value = '';
  }
});


document.getElementById('message-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('send-button').click();
  }
});

