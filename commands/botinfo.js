const Discord = require("discord.js");
var rHex = require("random-hex");

module.exports.run = async (bot, message, args, moment) => {
message.delete();

let totalSeconds = (bot.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

    let binfo = new Discord.RichEmbed()
        .setColor(`${rHex.generate()}`)
        .setAuthor("Wisp", "https://i.imgur.com/DbPQs8Z.png")
        .setDescription(`Wisp has been on for ${days} day(s), ${horus} hour and ${minutes} minutes`)
        .addField("Currently in:", `${bot.guilds.size} servers`, true)
        

        message.channel.send(binfo);


}

module.exports.config = {
    name: "botinfo",
    aliases: ["binfo"]
}