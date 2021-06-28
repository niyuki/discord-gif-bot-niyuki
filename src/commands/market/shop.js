const { Client, Message, MessageEmbed } = require('discord.js');
const items = require('../../market');
const { listenerCount } = require('../../index');
const config = require('../../setting.json')
module.exports = {
    name: 'shop',
    aliases: ['market', 'm'],
    description: 'Go and buy some real hot sh*t in the shop lol :yum:',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!items.length === 0 ) return message.reply('there is no items in shop for deal!');

        const Listshop = items.map((value, index) => {
            return `\n \`${index+1})\` \`${value.item}\` (1 Week)    <@&${value.id}>  ➢  ${config.fun.coinsemoji} **${value.price} coins!** \n`
        });

        message.channel.send(
            new MessageEmbed()
                .setTitle(await client.translate(` Welcome to the shop! `, message))
                .setAuthor(`Item ID     Role                   Item Price`)
                .setDescription(Listshop)
                .setTimestamp()
                .setColor(config.panel.embedColor)
                .setFooter(await client.translate(`For each shared gif/pp each user wins ${config.fun.sharereward} coins`))
        )

    },
};