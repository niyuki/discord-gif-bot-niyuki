# multilingual niyuki-gif-bot (/w MongoDB, Economy and Market)

<p align="center"> One of the most advanced Discord Gif BOT with MongoDB, Economy and Market System<br>
NOT MY FAULT IF BAD TRANSLATION</p>

# Important
<p align="center">I did not translate EVERYTHING just to make this good and customizable for everyone</p>

# Getting Started

Install the code and fill `setting.json`so your bot get's ready..

I added a feature command called setup(owner only). It's supposed to create all needed roles and emojis for the spaces below!
![setup](https://cdn.discordapp.com/attachments/858653613702119465/859154083855073290/unknown.png)

Additionally I will explain some more about settings section
```
{
    "panel": {
      "guildid": "GIF_GUILD_ID",
      "token": "BOT_TOKEN",
      "developers": ["730448609790787585","YOUR_ID"],
      "prefix": ".", //BOT PREFIX
      "embedFooter": "🔥 Niyuki On Fire 🔥", //EMBED FOOTER
      "embedColor": "f6f6f6", //EMBED COLOR
      "mongoPath": "MONGOURL",
      "language": "tr", //YOUR LANGUAGE | Example: en, fr, de
      "swearings": ["fuck", "nigger", "nigga","motherfucker"] //anti swear words (feel free to add more)
    },
    "channellist": {
      "chat": "CHAT_CHANNEL_ID", 
      "invitelog": "INVITELOG_CHANNEL_ID",
      "botcommands": "BOTCOMMANDS_CHANNEL_ID", 

      "sharecategory": ["woman_category_id","man_category_id", "..."], // Share category IDs
      "giflog": "SHARED_GIF_LOG_CHANNELID",

      "feedbacklog": "FEEDBACK_CHANNEL_ID",
      "suggestionlog": "SUGGESTION_CHANNEL_ID",

      "randomGifLog": "RANDOMGIF_CHANNEL_ID",
      "randomPpLog": "RANDOMPP_CHANNEL_ID",

      "commandLog": "COMMANDLOG_CHANNEL_ID",
      "voiceChannel": "VOICECHANNEL_ID"
    },
    "rolelist": {
      "Sharer": "SHARER_ID",
      "BotRole": "BOT_ROLE_ID",

      "Staff": ["STAFF_ROLE_1", "STAFF_ROLE_""],
      "Moderator": ["MOD_ROLE_1", "MOD_ROLE_2"],
      "Admin": ["ADMIN_ROLE_1", "ADMIN_ROLE_2"],


      "VipColor1": "VIP_ROLE_COLOR_1",
      "VipColor2": "",
      "VipColor3": "",
      "VipColor4": "",
      "VipColor5": "",
      "VipColor6": "",
      "VipColor7": "",
      "VipColor8": "",
      "VipColor9": "",
      "VipColor10": "",

      "ColorRole1": "",
      "ColorRole2": "",
      "ColorRole3": "",
      "ColorRole4": "",
      "ColorRole5": ""
    },
    "fun": {
      "jobs": ["Developer", "Architect", "Host/Hostess", "Bus Driver", "Cook", "Engineer", "Doctor", "Lawyer", "News Reporter", "Writer", "Actor", "Teacher", "Librarian", "Pilot"], //JOBS (feel free to add more)
      "sharereward": 50, //Coins added for each shared gif
      "emoji": "💖",
      "tickemoji": "✅",
      "crossemoji": "❌",
      "coinsemoji": "💸",

      "headsemoji": "",
      "tailsemoji": "",
      "coinspinemoji": "",

      "greendiamondemoji": "",
      "reddiamondemoji": "",
      "blackdiamondemoji": ""
    }
  }
```

After installing all modules just type in terminal `node .` so your bot get's on. Make sure you enter all correct IDs and Tokens!

# How to fix HTTPError
<p align="center">Either you will use your own texts or you go to ``index.js`` and switch the translate modules from one to another(Modules are not same)</p>

<p align="center">
  <a href="https://discord.gg/QXghTbvpGU"><img src="https://img.shields.io/badge/Serendia%20Squad%20-006400.svg?&style=for-the-badge&logo=discord&logoColor=white"></a>
  <a href="https://discord.com/users/730448609790787585"><img src="https://img.shields.io/badge/Niyuki%20-808080.svg?&style=for-the-badge&logo=discord&logoColor=white"></a>
  <a href="https://github.com/niyuki"><img src="https://img.shields.io/badge/Github%20-1d202b.svg?&style=for-the-badge&logo=github&logoColor=white"></a>
    <a href="https://npmjs.com/package/niyuki-cli"><img src="https://img.shields.io/badge/My%20Own%20NPM%20Package%20-ff2050.svg?&style=for-the-badge&logo=npm&logoColor=white"></a>
</p>
"# discord-presence-bot" 
"# discord-gif-bot-niyuki" 
