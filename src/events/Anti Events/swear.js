const config = require('../../setting.json')
const client = require('../../index')
client.on("message", async msg => {
  
    const swear = config.panel.swearings
    if (swear.some(word => msg.content.includes(word))) {
      try {
          if(msg.channel.type === "dm") return;
  
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
                msg.delete();
        }              
      } catch(err) {
        console.log(err);
      }
    }
  });