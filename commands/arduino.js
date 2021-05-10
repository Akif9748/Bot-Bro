const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "arduino",
    description: "Work your a** off",

    async run (client, message, args) {
        let user = message.author;
        let items = await db.fetch(message.author.id);
        let arduino = await db.fetch(`ardn_${message.guild.id}_${user.id}`);
    
        if(!arduino) return message.channel.send('Hiç Arduinon yok ki, B R U H')
        message.channel.send(`${user}, ${arduino} var.`);
        


  
            
        
    }
}