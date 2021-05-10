const Discord = require("discord.js");
const fetch = require("node-fetch");




module.exports = {
    name: "mcip",
    description: "Müzik çalar",

    async run (client, message, args) {
        if (!args[0]) return message.channel.send(`${message.author} Sunucu IP adresi yazmalısın.`)
        const API = await fetch(`http://mcapi.tc/?${args[0]}/json`)
        const Data = await API.json();
        if (Data.status === "offline") {
            const embed2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor(args[0])
                .setDescription(`Girmiş olduğun IP adresine bağlı olan sunucu aktif değil.`)
                .setFooter("hamzamertakbaba ♥ ");
            message.channel.send(embed2)
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(args[0])
                .addField(`Sunucu IP Adresi`, Data.hostname, true)
                .addField(`Ping`, Data.ping, true)
                .addField(`Oyuncu Sayısı`, `${Data.players}/${Data.max_players}`, true)
                .addField(`Versiyon`, Data.version, true)
                .setImage(`http://status.mclive.eu/CodAre.fun/${args[0]}/25565/banner.png`)
                .setFooter("hamzamertakbaba ♥ ");
            message.channel.send(embed)
        }
    }


}