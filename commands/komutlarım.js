const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "komutlarım",
    description: "Komutları gösterir",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()

        .setTitle('Yönetim')
   
        .addField('`!kick`', 'Serverden birisini kickler')
        .addField('`!uyar`', 'Bir kişiyi uyarır.')
        .addField('`!sil`', 'Mesaj siler')
        .addField('`!tekrarla`', 'Mesajınızı tekrarlar')
        .addField('`!reset`', 'BotBro kapanıp açılır :)')
        .setImage('https://cdn.discordapp.com/attachments/832641962564911185/832645980779315211/fb325679bd86c061503844b363babc7f.png')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        
        .setTitle('Eğlence')

        .addField('`!meme`', 'Rastgele bir meme atar.')
        .addField('`!şekilliyazı`', 'Yazdığınız mesajı şekilli yazıya çevirir')
        .addField('`!şakayap`', 'Şaka yapar.')
        .addField('`!nasılsın`', 'Bota hal hatır soracaktır.')
        .addField('`!node`', '....')
        .setImage('https://cdn.discordapp.com/attachments/832641962564911185/832645980779315211/fb325679bd86c061503844b363babc7f.png')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        
        .setTitle('Çeşitli')

        .addField('`!botdurum`', 'Bot hakkında bilgi verir.')
        .addField('`!sunucu`', 'Sunucu hakkında bilgi verir.')
        .addField('`&`', 'Googlede arama yapmanızı sağlar')
        .addField('`!tarih`', 'Şimdiki tarih ve saati yazar')
        .addField('`!sayaç`', 'Belirlediğiniz sayıdan geriye sayar.')
        .addField('`ytara`', 'Youtubeda arama yapmanızı sağlar')
        .addField('`!korona`', 'Koronayı takip etmenizi sağlar')
        .addField('`!ping`', 'Bot ile pinginizi ölçer.')
        .addField('`!havadurumu`', 'Hava durumu verir')
        .addField('`!çal`', 'İsmini yazdığınız şarkıyı çalar')
        .addField('`!çallink`', 'URLsini yazdığınız şarkıyı çalar')
        .addField('`!radyo`', 'Listedeki radyoyu çalar. Liste için : `!radyoliste`')
        .addField('`!dur`', 'Şarkıyı durdurur.')
        .addField('`!technopat`', 'Technopat linki atar')
        .addField('`!dur`', 'Şarkıyı veya radyoyu durdurur.')
        .addField('`!teşekkür`', 'Bota destek olanların ismini yazar.')
        .addField('`!thanks`', 'İf u support my bot, type this.')
        .addField('`!hesapla`', 'Hesaplama yapar.')
        .addField('`!sohbet`', 'Sohbet kanalını atar.')
        .addField('`!kurallar`', 'Kurallar kanalını atar.')
        .addField('`!kişi`', 'Kişi hakkında bilgi verir.')
        .addField('`!anket`', '!anket 5 5 şıklı anket, verir mesela')
        .setImage('https://cdn.discordapp.com/attachments/832641962564911185/832645980779315211/fb325679bd86c061503844b363babc7f.png')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}
