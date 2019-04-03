const Discord = require("discord.js");


module.exports.run = async (bot, message, args, moment) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("");
    if(args.length < 1) return message.channel.send("❌ Please specify the amount of messages you want to purge!");

    if(args.length >= 5) {
        message.channel.send("❌ You may not purge more than 9,999 messages!")
    } else {

    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send("✅  `" + `${args[0]}` + "` messages have been purged!").then(msg => msg.delete(5000));
  });
    }

}

module.exports.config = {
    name: "purge",
    aliases: ["pg"]
}