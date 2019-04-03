const Discord = require("discord.js");


module.exports.run = async (bot, message, args, moment, db) => {

    if(args.length === 0) {
        message.channel.send("Need a prefix to change!")
     } else if (args.length === 1) {
         let nPre = args[0];

         db.collection('guilds').doc(message.guild.id).update({
             'prefix' : nPre
         }).then(() => {
            message.channel.send(`Prefix has been set to ${nPre}`);
         });
         
     }
    


}

module.exports.config = {
    name: "prefix",
    aliases: ["p"]
}