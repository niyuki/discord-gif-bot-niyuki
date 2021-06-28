const { Client, Message, MessageEmbed } = require('discord.js');
const config = require('../../setting.json')

module.exports = {
    name: "suggest",
    usage: "suggest <message>",
    description: "Send your Suggestion",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!args.length) {
            return message.channel.send(await client.translate("Please Give the Suggestion", message))
          }
          
          let channel = message.guild.channels.cache.get(config.channellist.suggestionlog)
          
          
          if(!channel) {
            return message.channel.send(await client.translate("there is no channel with for - suggestions", message))
          }
                                                          
          
          let embed = new MessageEmbed()
          .setAuthor(await client.translate("SUGGESTION by: ", message) + message.author.tag, message.author.avatarURL())
          .setColor(config.panel.embedColor)
          .setDescription(args.join(" "))
          .setFooter(await client.translate("Please vote below if you like this suggestion!", message))
          .setTimestamp()
          
          
          channel.send(embed).then(m => {
            m.react("👍")
            m.react("👎")
          })
          
      
          
          message.channel.send(await client.translate("Sended Your Suggestion to ", message) + channel)
          
    }
}