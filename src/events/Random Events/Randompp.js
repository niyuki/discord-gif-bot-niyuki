const client = require('../../index');
const config = require('../../setting.json')
const { Message, MessageEmbed } = require('discord.js');

client.on('userUpdate', async(niyuki, ted) => {
    if(niyuki.avatarURL() === ted.avatarURL()) return;
    let useravatar = (ted.avatarURL({dynamic: true, size:1024})).split("?")[0];
    let randompp = client.channels.cache.get(config.channellist.randomPpLog)

    if((useravatar).endsWith(".jpg") || (useravatar).endsWith(".png") || (useravatar).endsWith(".webp")) {
        let ppembed = new MessageEmbed()
            .setAuthor(`© ${ted.id}`)
            .setTitle(config.fun.emoji+" Random PP "+config.fun.emoji)
            .setDescription(`**Show Avatar** [**Click here**](${useravatar})`)
            .setColor(config.panel.embedColor)
            .setFooter(config.panel.embedFooter)
            .setImage(useravatar)
            .setTimestamp();

        randompp.send(ppembed)
    }
})