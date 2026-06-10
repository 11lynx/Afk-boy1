const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'Skibidi-7004.aternos.me',
    port: 18824,
    username: 'Slobot00',
    auth: 'offline',
    version: '1.21.4'
  });

  bot.on('spawn', () => {
    console.log('Bot ist online!');
    bot.chat('Ich bin da!');
  });

  bot.on('error', (err) => {
    console.log('FEHLER:', err);
  });

  bot.on('end', () => {
    console.log('Reconnect in 5 Sekunden...');
    setTimeout(startBot, 5000);
  });
}

startBot();
