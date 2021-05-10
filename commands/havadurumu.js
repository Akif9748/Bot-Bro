const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "havadurumu",
    description: "Hava durumunu bulur.",

    async run (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' celcius için
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Bir lokasyon yaz')

        if(result === undefined || result.length === 0) return message.channel.send('Geçersiz **yer**');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`${current.observationpoint} için hava durumu`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Zaman Dilimi', `UTC${location.timezone}`, true)
        .addField('Sıcaklık tipi', 'Santigrat', true)
        .addField('Sıcaklık', `${current.temperature}°`, true)
        .addField('Rüzgar', current.winddisplay, true)
        .addField('Hissedilen Sıcaklık', `${current.feelslike}°`, true)
        .addField('Nem', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })
    }
}
