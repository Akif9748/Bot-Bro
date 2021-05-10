const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "korona",
    description: "Koronayı takip etmeni sağlar.",

    async run (client, message, args){

        let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Eksik bilgi')
        .setColor(0xFF0000)
        .setDescription('Birşeyleri yazmayı unutmuşsunuz...Kodu böyle kullanmalısınız: !korona all veya !korona ülkeismi')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Tüm Dünyadaki COVID-19'un durumu 🌎`)
                .addField('Vakalar', confirmed)
                .addField('İyileşenler', recovered)
                .addField('Ölümler', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`**${countries}** için koronanın durumu`)
                .addField('Vakalar', confirmed)
                .addField('İyileşenler', recovered)
                .addField('Ölümler', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Geçersiz Ülke')
            })
        }
    }
}
