const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
var os = require("os");

module.exports = {
    name: "botbilgi",
    description: "bot resetlenir.",

    async run (client, message, args) {
        let serverlist = ''
        let count = 0; //<---
        client.guilds.cache.forEach((guild) => {
        count += guild.memberCount // <---
 
    })
    const duration = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  var usedMemory = os.totalmem() - os.freemem(),
    totalMemory = os.totalmem();
  var getpercentage = ((usedMemory / totalMemory) * 100).toFixed(2) + "%";
    
   
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Durumu:')
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/832641962564911185/832645980779315211/fb325679bd86c061503844b363babc7f.png')
        .setTimestamp()
        .addField("Bot İsmi           :" + client.user.username) 
        .addField("Bot ID             :" + client.user.id)
        .addField("Botun Pingi        :`" + client.ws.ping + 'ms`')
        .addField(`Sunucular          : ${client.guilds.cache.size}`) 
        .addField(`Kanallar           : ${client.channels.cache.size}`)
        .addField(`Aktif Kullanıcı sayısı   : ` + count) 
        .addField("Sahip              : `Akif9748#0189`")
        .addField("Node.js Sürümü     :" + process.version)
        .addField("Discord.js sürümü  :" + Discord.version)
        .addField("Prefix             : !")
        .addField("Durum              : `!komutlarım`")
        .addField("RAM kullanımı      : " + (usedMemory / Math.pow(1024, 3)).toFixed(2) + "MB")
        .addField("Disk kullanımı     : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB")
        .addField("CPU ve kullanımı   : " + os.cpus().map(i => `${i.model}`)[0] + " %" + (process.memoryUsage().heapUsed / 31000 / 31000).toFixed(2) )
        .addField("Çalışma süresi     : " + duration)
        .addField("Sahip              : `Akif9748#0189`")
        
    
 
        message.channel.send(embed);
    }

}


