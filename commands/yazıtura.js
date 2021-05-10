  
const Discord = require('discord.js');

const yt = ["1", "2"];

module.exports = {
    name: "yazıtura",
    description: "Brodcast someone's avatar",

    async run (client, message, args) {

        const yazıtura = yt[Math.floor(Math.random() * yt.length)]; 

        if(yazıtura == "1"){
            const embed = new Discord.MessageEmbed()
            .setTitle(`Yazıtura attın ve sonuç:`)
            .setDescription("**Yazı çıktı!**")
            .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/1TL_obverse.png/199px-1TL_obverse.png");
           
        message.channel.send(embed);

        }
        if(yazıtura == "2"){
        const embed = new Discord.MessageEmbed()
        .setTitle(`Yazıtura attın ve sonuç:`)
            .setDescription("**TURA çıktı!**")
            .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/1TL_reverse.png/200px-1TL_reverse.png");
           

        message.channel.send(embed);
        }
        

    }
}