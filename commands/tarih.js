const Discord = require("discord.js");




module.exports = {
    name: "tarih",
    description: "Tarihi gösterir.",

    async run (client, message, args){
        var zaman = new Date();
        message.channel.send('Saat:  ' + zaman.toLocaleTimeString() + '\nTarih:  ' + zaman.toLocaleDateString());
        
        

    }
}