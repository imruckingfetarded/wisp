const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args, moment) => {
    if(args.length < 1) {
        urban.random().first(json => {
            let rdef = new Discord.RichEmbed()
            .setColor("#5287BD")
            .setTitle(json.word)
            .setDescription(json.definition)
            .addField("👍", json.thumbs_up, true)
            .addField("👎", json.thumbs_down, true)
            .setFooter(`Written by ${json.author}`)
            .setThumbnail("https://i.gyazo.com/609c250a68db4342e8f2a8d242557e93.png");

            message.channel.send(rdef);
        });
    } else {
        let string = args.join(" ");

    

        urban(string).first(json => {
            
            let def = new Discord.RichEmbed()
                .setColor("#5287BD")
                .setTitle(json.word)
                .setDescription(json.definition)
                .addField("👍", json.thumbs_up, true)
                .addField("👎", json.thumbs_down, true)
                .setFooter(`Written by ${json.author}`)
                .setThumbnail("https://i.gyazo.com/609c250a68db4342e8f2a8d242557e93.png");
                
    
            message.channel.send(def);
        });
    
    }
   

}

module.exports.config = {
    name: "urban",
    aliases: ["ud"]
}