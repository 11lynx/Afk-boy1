const mineflayer = require('mineflayer');

const HOST = 'Skibidi-7004.aternos.me';
const PORT = 18824;
const USERNAME = 'Slobot00';

let bot;
let reconnecting = false;

function startBot() {
  console.log('[BOT] Starte Verbindung...');

  bot = mineflayer.createBot({
    host: HOST,
    port: PORT,
    username: USERNAME,
    auth: 'offline'
    // KEINE version erzwingen → verhindert viele Fehler
  });

  bot.on('spawn', () => {
    console.log('[BOT] ✅ Online!');
    reconnecting = false;

    bot.chat('Ich bin online!');

    // kleines Anti-AFK (optional stabil)
    setInterval(() => {
      if (bot.entity) {
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 500);
      }
    }, 30000);
  });

  bot.on('kicked', (reason) => {
    console.log('[BOT] ❌ Gekickt:', reason);
  });

  bot.on('error', (err) => {
    console.log('[BOT] ⚠️ Fehler:', err.message);
  });

  bot.on('end', () => {
    console.log('[BOT] 🔌 Verbindung verloren');

    if (!reconnecting) {
      reconnecting = true;
      console.log('[BOT] 🔁 Reconnect in 5 Sekunden...');
      setTimeout(startBot, 5000);
    }
  });
}

startBot();
