const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "Bir kişiyi kickler",

    async run (client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Üzgünüm, çok küçüksün, bunu yapamazsın :grinning:')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('Bunun için **yetkim** yok!')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Ya kickleyeceğin kişiyi yazsan');

        if(!member) return message.channel.send('Öyle bir adam bulamadım, yani kickleyememem :/');
        if(!member.kickable) return message.channel.send('Bu adamı kickleyemezsin, bu adam ya mod ya da admin, o yüzden. Yoksa da kıdemli olmalı senden.');

        if(member.id === message.author.id) return message.channel.send('Bruh, sen kendini nasıl kickleyeceksin?');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Nedeni yok işte';

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('Bir şeyler ters gitti.')
        })


        message.channel.send('<@' + member + '> Sunucudan atıldı!');


    }
}
