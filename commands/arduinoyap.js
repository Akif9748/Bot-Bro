const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "arduinoyap",
    description: "Work your a** off",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 60000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);
        let arduino = await db.get('userInfo.ardn');

        
        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`Bunu şu süre boyunca yapamazsın: ${time.minutes}Dakika ve ${time.seconds}saniye`)
        } else {
            db.add('userInfo.ardn', 500)
            let amount = Math.floor(Math.random() * 5) + 1;
            db.add(`ardn_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(`${user}, ${amount} Arduino ürettin.`)
            message.react('810932667905474601');
        }
            
        

        
            
        
    }
}