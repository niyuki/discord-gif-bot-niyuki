const { Client, Message, MessageEmbed } = require('discord.js');
const config = require('../../setting.json')
module.exports = {
    name: 'add',
    description: 'Adds coins to your balance.',
    usage:'.add <coins> @User',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        let array = config.panel.developers

        if(!array.includes(message.author.id.toString())) {
            return message.react('❌')
        }

        const victim = message.mentions.members.first() || message.member

        if(isNaN(args[0])) return message.channel.send(new MessageEmbed().setTimestamp().setFooter(config.panel.embedFooter).setAuthor(victim.user.username, victim.user.avatarURL({dynamic: true})).setColor('4a0000').setDescription(await client.translate(`**No (Valid) number provided shhh. | Usage: .add <coins> @User**`, message)))
        

        client.add(victim.id , parseInt(args[0]))
        message.channel.send(new MessageEmbed().setTimestamp().setFooter(config.panel.embedFooter).setAuthor(victim.user.username, victim.user.avatarURL({dynamic: true})).setColor(config.panel.embedColor).setDescription(await client.translate(`Succesfully added ${config.fun.coinsemoji} **${parseInt(args[0])}** coins to **${victim.user.tag}** 🥳`, message)))
        
    }
}