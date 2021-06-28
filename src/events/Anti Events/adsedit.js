const config = require('../../setting.json')
const client = require('../../index')

client.on("messageUpdate", (oldMessage, newMessage) => {

    const reklam = ["discord.gg/","https://discord.gg/",".gg/","gg/","discord.io"];
    if (reklam.some(word => newMessage.content.includes(word))) {
      try {
        if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
              oldMessage.delete();
        }              
      } catch(err) {
        console.log(err);
      }
    }
  });