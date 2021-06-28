const { Client, Message, MessageEmbed } = require("discord.js");
const moment = require("moment");
const config = require('../../setting.json')
const flags = {
  DISCORD_EMPLOYEE: "Discord Employee",
  DISCORD_PARTNER: "Discord Partner",
  BUGHUNTER_LEVEL_1: "Bug Hunter (Level 1)",
  BUGHUNTER_LEVEL_2: "Bug Hunter (Level 2)",
  HYPESQUAD_EVENTS: "HypeSquad Events",
  HOUSE_BRAVERY: "Hypesquad Bravery",
  HOUSE_BRILLIANCE: "Hypesquad Brilliance",
  HOUSE_BALANCE: "Hypesquad Balance",
  EARLY_SUPPORTER: "Early Supporter",
  TEAM_USER: "Team User",
  SYSTEM: "System",
  VERIFIED_BOT: "Verified Bot",
  VERIFIED_DEVELOPER: "Verified Bot Developer",
};

module.exports = {
  name: "user-info",
  category: "Utilities",
  description: "Displays information about the user mentioned",
  cooldown: 0,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    var status;
    target = args[0];
    const member =
      message.mentions.members.last() ||
      message.guild.members.cache.get(target) ||
      message.member;
    switch (member.user.presence.status) {
      case "dnd":
        status = "<:dnd:782258830863892520>";
        break;
      case "offline":
        status = "<:offlin:782259116399263744>";
        break;
      case "online":
        status = "<:online:782258830746189874>";
        break;
      case "idle":
        status = "<:idle:782258830813823037>";
        break;
    }
    const roles = member.roles.cache
      .sort((a, b) => b.position - a.position)
      .map((role) => role.toString())
      .slice(0, -1);
    const userFlags = member.user.flags.toArray();

    function trimArray(arr, maxLen = 10) {
			if (arr.length > maxLen) {
				const len = arr.length - maxLen;
				arr = arr.slice(0, maxLen);
				arr.push(`${len} more...`);
			}
			return arr;
		}

    
    const embed = new MessageEmbed()
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
      .setAuthor(`${member.user.username}#${member.user.discriminator}`)
      .setColor(config.panel.embedColor)
      .addField("`User`", [
        `**➥🆔:** ${member.id}`,
        `**❯ NickName:** ${member.nickname ? member.nickname : "❌"}`,
        `**❯ Discriminator:** ${member.user.discriminator}`,
        `**❯ Badges:** ${
          userFlags.length
            ? userFlags.map((flag) => flags[flag]).join(", ")
            : "None"
        }`,
        `**❯ Avatar:** [Avatarlink](${member.user.displayAvatarURL({
          dynamic: true,
        })})`,
        `**❯ Account:** ${moment(member.user.createdTimestamp).format(
          "LT"
        )} ${moment(member.user.createdTimestamp).format("LL")} ${moment(
          member.user.createdTimestamp
        ).fromNow()}`,
        `**❯ Status:** ${status}`, //member.user.presence.status
        `**❯ Game:** ${member.user.presence.game || "Not playing a game."}`,
        `\u200b`,
      ])
      .addField("`Member`", [
        `**➥ Server Join Date:** ${moment(member.joinedAt).format("LL LTS")}`,
        `**➥ Highest Role:** ${
          member.roles.highest.id === message.guild.id
            ? "None"
            : member.roles.highest.name
        }`,
        `**➥ Roles [${roles.length}]:** ${
          roles.length <= 10
            ? roles.join(", ")
            : roles.length > 10
            ? trimArray(roles)
            : "None"
        }`,
        `\u200b`,
      ])
      .setFooter(
        `• Requested by: ${member.user.tag}`,
        member.user.displayAvatarURL({ format: "png" })
      )
      .setTimestamp();
    return message.channel.send(embed);
  },
};