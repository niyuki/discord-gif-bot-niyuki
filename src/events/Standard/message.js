const client = require('../../index')
const prefix = client.prefix;
const { Collection, MessageEmbed } = require('discord.js');
const Timeout = new Collection();
const ms = require('ms')
const config = require('../../setting.json')

client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
        if(command.cooldown) {
            if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(await client.translate(`You are on cooldown of \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\`. `,message)).then(x => x.delete({timeout: ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}))
            command.run(client, message, args)
            Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
            setTimeout(() => {
                Timeout.delete(`${command.name}${message.author.id}`)
            }, command.cooldown)
        } else 
            command.run(client, message, args)
            client.channels.cache.get(config.channellist.commandLog).send(new MessageEmbed()
                .setTitle(`${await client.translate(`Used Command: `, message)} ${command.name}`)
                .setDescription(` ${message.author.tag} ${await client.translate(` user used the command ${command.name}! Command was used in this channel: ${message.channel.name}`,message)}`)
                .setColor(config.panel.embedColor)
                .setFooter(config.panel.embedFooter))
        }
});





































