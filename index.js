const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Skibidi-7004.aternos.me',
  port: 18824,
  username: 'Slobot00'
});

bot.on('spawn', () => {
  console.log('Bot ist online!');
  bot.chat('Ich bin da!');
});

bot.on('error', (err) => {
  console.log('Fehler:', err.message);
});

bot.on('end', () => {
  console.log('Verbindung verloren');
});
