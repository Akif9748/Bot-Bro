  
const Discord = require('discord.js');

module.exports = {
    name: "pp",
    description: "Brodcast someone's avatar",

    async run (client, message, args) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}\'in bilgileri:`)
        .setImage(avatar)
        .setColor("RANDOM")
        .setDescription('İD:  ' + member.id + '\nŞu kişi istedi:  ' + message.author.username )

        message.channel.send(embed);

    }
}