const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "hesapla",
    description: "Bir işlem yazın, çözsün.",


    async run (client, message, args){

        if(!args[0]) return message.channel.send('Bir soru sor');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Bir **değer** gir.')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Hesap Makinesi')
        .addField('Soru', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Cevap', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}
