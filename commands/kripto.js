const Discord = require("discord.js");
const crypto = require('crypto-global')


module.exports = {
    name: "kripto",
    description: "Müzik çalar",

    async run (client, message, args) {
        
        unit = args[0]
        if (!unit) return message.channel.send("Lütfen bir crypto para belirtiniz. \`!crypto bitcoin\`")
        message.channel.send(new Discord.MessageEmbed().setDescription('Bilgiler getiriliyor. Lütfen bekleyiniz..')).then(async m => {
            let all = await crypto.all(unit)
            const embed = await new Discord.MessageEmbed()
                .setColor('#BLUE')
                .setThumbnail(all.icon)
                .setAuthor(all.name)
                .addField('Fiyat (TRY)', `\`${all.try}\``)
                .addField('Fiyat (USD)', `\`${all.usd}\``)
                .addField('24 Saatlik Hacim', `\`${all.vol24}\``)
                .addField('Aktif Hacim', `\`${all.market}\``)
                .addField('1 yılın en düşük değeri', `\`${all.lower}\``)
                .addField('1 yılın en yüksek değeri', `\`${all.higher}\``)
                .addField('Anlık Yüzdelik Değeri', `\`${all.percent}\``)
                .setImage(all.table)
            await m.edit(embed);
        });
    }


}