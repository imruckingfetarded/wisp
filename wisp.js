//required packages
const Discord = require("discord.js");
require("dotenv/config");
var moment = require("moment");

//the bot it's self
const bot = new Discord.Client({disableEveryone: true});


//import settings
let prefix;
const owner = process.env.OWNER;
const token = process.env.TOKEN;

//initialise db (firebase)
const firebase = require("firebase/app");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAcc.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

//on functions
bot.on("ready", async () => {
    console.log("Wisp is now online!")
    bot.user.setActivity(`${bot.guilds.size} servers`, {type: "WATCHING"});
});

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

//read command files
fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't find any commands!");
    }

    jsfile.forEach((f, i) => {

        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(aliases => {
            bot.aliases.set(aliases, pull.config.name)
        });
    });
});

//commands, args, messagearrays
bot.on("message", async message => {
   db.collection('guilds').doc(message.guild.id).get().then((q) => {
        if (q.exists) {
            prefix = q.data().prefix;
        }
   }).then(() => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

            if(!message.content.startsWith(prefix)) return;
            let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
                
                if(commandfile) commandfile.run(bot, message, args, moment, db);

   });
});

//db collection creation slots
bot.on("guildCreate", async gData => {
    db.collection("guilds").doc(gData.id).set({
        'guildID' : gData.id,
        'guildName' : gData.name,
        'guildOwner' : gData.owner.user.username,
        'guildOwnerID' : gData.owner.id,
        'prefix' : '.'
    });

    db.collection('roles').doc(gData.id).set({
        role_id: []
    });
});

bot.login(process.env.token);
