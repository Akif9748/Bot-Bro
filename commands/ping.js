const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "test command",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setDescription(`ping:\`${client.ws.ping}\`ms`);


        message.channel.send(ping);
    }
}
