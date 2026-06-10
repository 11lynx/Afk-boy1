const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'Skibidi-7004.aternos.me',
    port: 18824,
    username: 'Slobot00',
    auth: 'offline'
  });

  bot.on('spawn', () => {
    console.log('Bot ist online!');
  });

  bot.on('error', (err) => {
    console.log('FEHLER:', err);
  });

  bot.on('kicked', (reason) => {
    console.log('GEKICKT:', reason);
  });

  bot.on('end', () => {
    console.log('Verbindung verloren → Neustart...');
    setTimeout(startBot, 5000);
  });
}

startBot();
