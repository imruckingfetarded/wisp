const Discord = require("discord.js");


module.exports.run = async (bot, message, args, moment) => {
message.delete();

if (args.length < 1) return channel.message.send("Are you going to tell me what to say?")
    let theMessage = args.join(" ")
message.channel.send(theMessage)

}

module.exports.config = {
    name: "say",
    aliases: ["s"]
}