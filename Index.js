// Ініціалізація WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // Розгорнути на весь екран
document.getElementById('username').textContent = tg.initDataUnsafe?.user?.first_name || 'користувач';

// Закриття додатка
document.getElementById('close').addEventListener('click', () => tg.close());