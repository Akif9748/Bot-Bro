const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "arduinosat",
    description: "Work your a** off",

    async run (client, message, args) {
        let user = message.author;
       
        let arduino = await db.get(`ardn_${message.guild.id}_${user.id}`);
        let mesaj = args.slice(0).join(' ');
        let amount = [Math.floor(Math.random() * 10)] * 10 * mesaj;
        if(!arduino) return message.channel.send('Hiç Arduinon yok ki, B R U H')
        if(mesaj > arduino) return message.channel.send('Elinde sadece' + arduino + ' arduino var ama.');
        if(!mesaj) return message.channel.send('Satılacak Arduino sayısı yazın.')

        db.subtract(`ardn_${message.guild.id}_${message.author.id}`, mesaj);
        db.add(`money_${message.guild.id}_${user.id}`, amount)

        db.set(`worked_${message.guild.id}_${user.id}`, Date.now())
        message.channel.send(`${user}, ${mesaj} Arduino satarak ${amount} para kazandın.`);
        message.react('810932667905474601');

        

        
            
        
    }
}