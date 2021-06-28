const client = require('../../index');
const config = require('../../setting.json')

client.on('ready', async(message) => {
    //--------------LOG IF BOT IS ONLINE
    console.log('<==============================================>')
    console.log(`🔥 ${client.user.tag} is On Fire 🔥`)
    console.log('<==============================================>')

    //--------JOIN VOICE CHANNEL
    client.channels.cache.get(config.channellist.voiceChannel).join().catch(err => console.log("[------WARN-------] Could not connect to Voice Channel. Please check for correct id."))

    //--------BOT PRESENCE STATUS
    setInterval(() => {
      let x = [`${client.user.username} 💞 Niyuki`, `Niyuki 💓 ${client.user.username}`, `${client.user.username} 💗 Niyuki`, `Niyuki 💖 ${client.user.username}`, `${client.user.username} 💘 Niyuki`, `Niyuki 💝 ${client.user.username}`]
let random = x[Math.floor(Math.random()* x.length)];
      client.user.setPresence({ activity: { name: random , type: 'STREAMING', url:'https://github.com/niyuki'}, status: 'dnd'/*online, idle, dnd, invisible */ })
      //.then(console.log)
        .catch(console.error); 
    }, 30000);
 
})