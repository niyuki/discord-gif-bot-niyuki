const client = require('../../index');
const config = require('../../setting.json')
const { Message, MessageEmbed } = require('discord.js');

client.on('userUpdate', async(niyuki, ted) => {
    if(niyuki.avatarURL() === ted.avatarURL()) return;
    let useravatar = (niyuki.avatarURL({dynamic: true, size:1024})).split("?")[0];
    let randomgif = client.channels.cache.get(config.channellist.randomGifLog)

    if((useravatar).endsWith(".gif")) {
        let gifembed = new MessageEmbed()
        .setAuthor(`© ${ted.id}`)
        .setTitle(config.fun.emoji+" Random GIF "+config.pangel.emoji)
        .setDescription(`**Show Avatar** [**Click here**](${useravatar})`)
        .setColor(config.panel.embedColor)
        .setFooter(config.panel.embedFooter)
        .setImage(useravatar)
        .setTimestamp();

        randomgif.send(gifembed)
    }
})