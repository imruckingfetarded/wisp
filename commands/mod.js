const Discord = require("discord.js");
let FieldValue = require("firebase-admin").firestore.FieldValuel;

module.exports.run = async (bot, message, args, db) => {
//currently looking into making for specific commands
    let reply = new Discord.RichEmbed()
        .setColor("#D6D62A")
        .setAuthor("Admin command", bot.user.avatarURL)
        .setTimestamp(new Date())
        .setFooter("Wisp is replying to you!")

    if (args === 0) {
        reply.addField("{prefix}valid-role @rolename", '\u200b')
        message.channel.send(reply)
    } else if (args === 1){
        if (args[0].length > 5){
            let role_id = args[0].substring(3,args[0].length - 1); // removes first 3 characters, deletes last 1 giving us role id, ie 234576315865 
            let added = false;

            message.guild.roles.forEach( elem => {
                let serverR = String(elem);
                let temp = serverR.substring(3, serverR.length - 1);

                if (temp === role.id) {
                    db.collection('roles').doc(message.guild.id).update({
                        "role_id" : FieldValue.arrayUnion(role_id)
                    }).then(() => {
                        reply.addField("✅ Role is now a moderator!", `${args[0]} has access to the mod commands!`);
                        message.channel.send(reply)
                        added = true;
                    });
                }
            });
            
            setTimeout(() => {
                if (!added){
                    reply.addField("❌ Oh no! Something went wrong!", `The role must exist on this server!`);
                    message.channel.send(reply)
                }
            }, 2000);
        }
    }

}

module.exports.config = {
    name: "mod",
    aliases: ["m"]
}