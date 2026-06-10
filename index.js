const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Skibidi-7004.aternos.me',
    port: 18824,
    username: 'Slobot00',
    auth: 'offline'
  });

  bot.on('spawn', () => {
    console.log('Bot ist online!');
    bot.chat('Ich bin da!');
  });

  bot.on('kicked', (reason) => {
    console.log('GEKICKT:', reason);
  });

  bot.on('error', (err) => {
    console.log('FEHLER:', err);
  });

  bot.on('end', () => {
    console.log('Verbindung verloren → Reconnect in 5s');
    setTimeout(createBot, 5000);
  });
}

createBot();
