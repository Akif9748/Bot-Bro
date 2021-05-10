const Discord = require('discord.js');

module.exports = {
    name: "radyoliste",
    description: "radyolist",

    async run (client, message, args) {


        const embed = new Discord.MessageEmbed()
        .setTitle('Durma Komudu : !dur')
        .setDescription('Örnek = !radyo + numara')
        .addField('Radyo Kanalları','[1] - Fenomen\n[2] - Metro\n[3] - Number One FM\n[4] - Power\n[5] - Slow Türk\n[6] - JoYtR\n[7] - Radyo]\n[8] -  Efkar FM\n[9] - Ulku FM\n[10] Maydanoz\n[11] VURGUN\n[12] TGRT\n[13] SHOW\n[14] KRAL\n[15] KRAL POP\n[16] Gönül\n[17] Alem\n[18] TRT FM')
        .setFooter('Radyo Dinleme Servisi')

        .setTimestamp()
        message.channel.send(embed);

    }
}
