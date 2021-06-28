const config = require('../../setting.json')
const client = require('../../index')

client.on("message", async msg => {
  
    const reklam = ["discord.gg/","https://discord.gg/",".gg/","gg/","discord.io"];
    if (reklam.some(word => msg.content.includes(word))) {
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