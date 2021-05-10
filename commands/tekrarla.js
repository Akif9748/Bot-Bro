const { MessageFlags } = require("discord.js");

module.exports = {
    name: "tekrarla",
    desciption: "Tekrarlanması gereken şeyleri yazın.",

    async run (client, message, args) {
        let msg;
        if (message.author.id !== '539506680140922890'){
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Üzgünüm, buna yetkin yok :grinning:')

        }
        
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}
