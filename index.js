const mineflayer = require('mineflayer');

function start() {
  const bot = mineflayer.createBot({
    host: 'Skibidi-7004.aternos.me',
    port: 18824,
    username: 'Slobot00',
    auth: 'offline',
    version: '1.20.4'
  });

  bot.on('spawn', () => {
    console.log('Bot online');
  });

  bot.on('end', () => {
    console.log('Reconnect...');
    setTimeout(start, 5000);
  });
}

start();
