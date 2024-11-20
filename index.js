// Ініціалізація WebApp
const telegramWebApp = window.Telegram.WebApp;
if (!telegramWebApp) {
    console.log("telegramWebApp is undefined");
}

console.log(telegramWebApp);
updateTheme();
telegramWebApp.expand(); // Розгорнути на весь екран
document.getElementById('username').textContent = telegramWebApp.initDataUnsafe?.user?.first_name || 'користувач';

// Закриття додатка
document.getElementById('close').addEventListener('click', () => telegramWebApp.close());

function updateTheme() {
    const theme = telegramWebApp.themeParams;
    document.body.style.backgroundColor = theme.bg_color || '#ffffff';
    document.body.style.color = theme.text_color || '#000000';
}