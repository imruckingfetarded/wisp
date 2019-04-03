const Discord = require("discord.js");

module.exports.run = async (bot, message, args, moment) => {

let totalSeconds = (bot.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

let tick = "`"

let uptime = `I've been on for ${tick}${days} days, ${hours} hours and ${minutes} minutes${tick}!`;

message.channel.send(uptime)

}

module.exports.config = {
    name: "uptime",
    aliases: ["ut"]
}