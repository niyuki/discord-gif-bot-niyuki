const config = require('../../setting.json')
const client = require('../../index')
client.on("messageUpdate", (oldMessage, newMessage) => {

    const swear = config.panel.swearings
    if (swear.some(word => newMessage.content.includes(word))) {
      try {
        if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
              oldMessage.delete();
                  return oldMessage.channel.send(new MessageEmbed().setDescription(`${oldMessage.author} Mesajını düzenleyerek küfür etmek? Akıllısın :wink:`).setColor('0x800d0d').setAuthor(oldMessage.member.displayName, oldMessage.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
        }              
      } catch(err) {
        console.log(err);
      }
    }
  });