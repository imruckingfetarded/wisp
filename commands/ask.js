const Discord = require("discord.js");


module.exports.run = async (bot, message, args, moment) => {

let replies = ([
"For-sure!",
"No, no chance at all",
"Yikers",
"Chief says this ain't it!",
"You're not gonna like this news", 
"You shouldn't get your hopes up",
"Of course! ;)",
"I don't have every single answer to ever exist, what do I look like? Some super smart slave working for you?! Well, I have to tell you this, WISP lives matter too!",
"Not sure",
"Most likely",
"Probably",
"Hopefully",
"Good luck"
]);


let res = Math.floor((Math.random() * replies.length));
message.reply(replies[res]);


}

module.exports.config = {
    name: "ask",
    aliases: ["a"]
}