const Discord = require('discord.js');

module.exports = {
    name: "node",
    description: "node index.js",

    async run (client, message, args) {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Üzgünüm, çok küçüksün, bu tehlikeli bir komut olabilir :grinning:')

        if(message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bunun için Powershell veya CMD kullan.')



    }


}
