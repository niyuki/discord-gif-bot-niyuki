const { MessageEmbed } = require('discord.js')
const config = require('../../setting.json')
const pm = require('pretty-ms');


module.exports = {
  name: 'ping',
  aliases: [],
  category: ['Info'],
  utilisation: '{prefix}ping',
  description: 'Ping but with more swag B)',


  async run(client, message, args) {

   const msg = await message.channel.send(await client.translate("🏓 Pinging...",message));

    const botLatency = pm(msg.createdTimestamp - message.createdTimestamp)
    const shardLatency = pm(message.guild.shard.ping);
    
    const embed = new MessageEmbed()
      .setAuthor('🏓Pong!')
      .addFields({
          name: await client.translate('Message Latency:', message),
          value: `${botLatency}`,
          inline: true
        }, {
          name: `Shard ${await client.translate(` | ${message.guild.shard.id} Latency:`, message)}`,
          value: `${shardLatency}`,
          inline: true
        })
      .setColor(config.panel.embedColor)
      .setFooter(config.panel.embedFooter)

    await msg.edit(embed)
  }
}