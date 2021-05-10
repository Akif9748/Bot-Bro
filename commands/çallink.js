const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const opus = require('opusscript');



module.exports = {
    name: "çallink",
    description: "Müzik çalar",

    async run (client, message, args, ops) {
      let msj = args.slice(0).join(' ');

      if (!message.member.voice.channel) return message.channel.send('Müzik dinlemek için önce **ses kanalına** bağlanman gerekir.')

      if (message.guild.me.voice.channel) return message.channel.send('Hali hazırda bot **birisi** için çalıyor.');

      if (!args[0]) return message.channel.send('Lütfen şarkının **URL**sini gir. https://www.youtube.com/ den bakabilirsin.');

      let validate = await ytdl.validateURL(args[0]);

      if (!validate) return message.channel.send('Üzgünüm, bu geçerli bir **URL** değil. https://www.youtube.com/ den bakabilirsin.');

      let info = await ytdl.getInfo(args[0]);

      let connection = await message.member.voice.channel.join();

      let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly' }));



      let bu = await message.channel.send('Şarkı çalınmaya başlandı!');

      bu.react('🎶');
      bu.react('🎵');
      bu.react('🎸');
      
      

      

      


    }


}
