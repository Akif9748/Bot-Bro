const Discord = require('discord.js');

module.exports = {
  name: "anket",
  description: "Anket üretir.",

  async run (client, message, args, tools){
    
    
    let mesaj = args.slice(0).join(' ');
    if (!mesaj) return message.channel.send('!anket yazıdıktan sonra şık sayısını yaz! Ama sakın böyle bişey yapma :) :https://i.ytimg.com/vi/Sflh1cjhJx8/maxresdefault.jpg');
    
    
    if (mesaj.startsWith('1')) {
      const embed = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setFooter(' ✅ Haydi oyla! ⛔ ')
      .setDescription(mesaj.replace('1', ''))
      .setTitle('Oylama:')


      let msg = await message.channel.send(embed);

      msg.react('✅');
      msg.react('⛔');


    message.delete({timeout: 1000});
      
    };
    if (mesaj.startsWith('2')) {
      const embed = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setFooter('🔢Haydi oyla!🔢')
      .setDescription(mesaj.replace('2', ''))
      .setTitle('Oylama:')


      let msg = await message.channel.send(embed);

      msg.react('1️⃣');
      msg.react('2️⃣');


    message.delete({timeout: 1000});
      
    };
    if (mesaj.startsWith('3')) {
      const embed = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setFooter('🔢Haydi oyla!🔢')
      .setDescription(mesaj.replace('3', ''))
      .setTitle('Oylama:')


      let msg = await message.channel.send(embed);

      msg.react('1️⃣');
      msg.react('2️⃣');
      msg.react('3️⃣');
 


    message.delete({timeout: 1000});
      
    };
    if (mesaj.startsWith('4')) {
      const embed = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setFooter('🔢Haydi oyla!🔢')
      .setDescription(mesaj.replace('4', ''))
      .setTitle('Oylama:')


      let msg = await message.channel.send(embed);

      msg.react('1️⃣');
      msg.react('2️⃣');
      msg.react('3️⃣');
      msg.react('4️⃣');



    message.delete({timeout: 1000});
      
    };
    if (mesaj.startsWith('5')) {
      const embed = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setFooter('🔢Haydi oyla!🔢')
      .setDescription(mesaj.replace('5', ''))
      .setTitle('Oylama:')


      let msg = await message.channel.send(embed);

      msg.react('1️⃣');
      msg.react('2️⃣');
      msg.react('3️⃣');
      msg.react('4️⃣');
      msg.react('5️⃣');



    message.delete({timeout: 1000});
      
    };
    if (mesaj.startsWith('6')) {
      const embed = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setFooter('🔢Haydi oyla!🔢')
      .setDescription(mesaj.replace('6', ''))
      .setTitle('Oylama:')


      let msg = await message.channel.send(embed);

      msg.react('1️⃣');
      msg.react('2️⃣');
      msg.react('3️⃣');
      msg.react('4️⃣');
      msg.react('5️⃣');
      msg.react('6️⃣');


    message.delete({timeout: 1000});
      
    };
    if (mesaj.startsWith('7')) {
      const embed = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setFooter('🔢Haydi oyla!🔢')
      .setDescription(mesaj.replace('7', ''))
      .setTitle('Oylama:')


      let msg = await message.channel.send(embed);

      msg.react('1️⃣');
      msg.react('2️⃣');
      msg.react('3️⃣');
      msg.react('4️⃣');
      msg.react('5️⃣');
      msg.react('6️⃣');
      msg.react('7️⃣');


    message.delete({timeout: 1000});
      
    };

    
    

  }
}
