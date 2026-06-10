const mineflayer = require('mineflayer');

const CONFIG = {
  host: 'Skibidi-7004.aternos.me',
  port: 18824,
  username: 'Slobot00',
  auth: 'offline'
};

let bot;
let reconnectDelay = 5000;
let reconnecting = false;

function createBot() {
  console.log('[BOT] Starte Verbindung...');

  bot = mineflayer.createBot({
    ...CONFIG,
    // ❗ KEINE version setzen → Auto-Detect (wichtig!)
  });

  bot.on('login', () => {
    console.log('[BOT] Login erfolgreich');
  });

  bot.on('spawn', () => {
    console.log('[BOT] ✅ Im Spiel!');
    reconnectDelay = 5000;

    bot.chat('Bot online ✔');

    // kleine Aktivität (gegen Kick auf manchen Servern)
    const interval = setInterval(() => {
      if (!bot.entity) return clearInterval(interval);
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 200);
    }, 30000);
  });

  bot.on('kicked', (reason) => {
    console.log('[BOT] ❌ GEKICKT:', JSON.stringify(reason, null, 2));
  });

  bot.on('error', (err) => {
    console.log('[BOT] ⚠️ ERROR:', err.message);
  });

  bot.on('end', () => {
    console.log('[BOT] 🔌 Verbindung beendet');

    if (!reconnecting) {
      reconnecting = true;

      console.log(`[BOT] 🔁 Reconnect in ${reconnectDelay / 1000}s`);

      setTimeout(() => {
        reconnecting = false;

        // exponentieller Backoff (stabiler bei Crash-Loops)
        reconnectDelay = Math.min(reconnectDelay * 1.5, 30000);

        createBot();
      }, reconnectDelay);
    }
  });
}

createBot();
