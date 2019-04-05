const Discord = require("discord.js");
var rHex = require("random-hex");

module.exports.run = async (bot, message, args, moment) => {
message.delete();

    let binfo = new Discord.RichEmbed()
        .setColor(`${rHex.generate()}`)
        .setDescription("Bot Info | Wisp")
        .setAuthor("Wisp", "https://i.imgur.com/DbPQs8Z.png")

        message.channel.send(binfo);


}

module.exports.config = {
    name: "botinfo",
    aliases: ["binfo"]
}