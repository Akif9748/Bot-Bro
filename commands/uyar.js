const Discord = require('discord.js');

module.exports = {
    name: "uyar",
    description: "Bir kişiyi uyarır",

    async run (client, message, args) {


        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (message.author.id !== '539506680140922890'){
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Üzgünüm, buna yetkin yok :grinning:')

        }
        if(!args[0]) return message.channel.send('Ya kişiyi yazsan');
        
        
        if(member == "539506680140922890"){
            const weatherinfo = new Discord.MessageEmbed()

        .setColor("RANDOM")
        .addField('ONU UYARAMAZSIN!!!!!!!!!!!!!')
        .setImage('https://cdn.discordapp.com/attachments/832641962564911185/832645980779315211/fb325679bd86c061503844b363babc7f.png')



         return message.channel.send(weatherinfo)


 

        } 

        if(!member) return message.channel.send('Öyle bir adam bulamadım');
    
       



        let reason = args.slice(1).join(" ");

        



      

        
        const embed = new Discord.MessageEmbed()
        .setTitle(`UYARILDIN!`)
        
        .setColor("RANDOM")
        .setDescription("Şu yüzden uyarıldın: " + reason)
        .setDescription("Uyaran kişi: " + message.author.username )

        member.send(embed)
        message.channel.send("<@" + member + "> uyarıldı.")



    }
}
