const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "günlük",
    description: "Receive a daily award of money",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 86400000;
        let amount = [Math.floor(Math.random() * 5)] + 1 * 100;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`Bugünün bonus parasını aldın, ${time.days}gün, ${time.hours}saat, ${time.minutes}dakika, ve ${time.seconds}saniye bekle.`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            message.channel.send(` ${amount} para hesabına aktarıldı.`)
        }
    }
}