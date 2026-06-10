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
    console.log('✅ Bot ist online!');
    bot.chat('Ich bin da!');
  });

  bot.on('kicked', (reason) => {
    console.log('❌ GEKICKT:', reason);
  });

  bot.on('error', (err) => {
    console.log('⚠️ FEHLER:', err.message);
  });

  bot.on('end', () => {
    console.log('🔌 Verbindung verloren → Retry...');
    setTimeout(startBot, 5000);
  });
}

startBot();
