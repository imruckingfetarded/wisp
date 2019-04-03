const Discord = require("discord.js");


module.exports.run = async (bot, message, args, db) => {
    db.collection("guilds").doc(message.guild.id).get().then((q) => {
        if (q.exists) {
            if (q.data().guildOwnerID != message.author.id) {


                message.channel.send("You must be the `owner` of the server in-order to change the server prefix!");
                return;
            } else if(args.length === 0) {
                message.channel.send("Need a prefix to change!")
             } else if (args.length === 1) {
                 let nPre = args[0];
        
                 db.collection('guilds').doc(message.guild.id).update({
                     'prefix' : nPre
                 }).then(() => {
                     let tick = "`"
                    message.channel.send(`Prefix has been set to ${tick}${nPre}${tick}`);
                 });
                 
             }
        }
    });
    
    
    


    
    


}

module.exports.config = {
    name: "prefix",
    aliases: ["p"]
}