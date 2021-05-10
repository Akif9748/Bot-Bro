
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');




module.exports = {
    name: "çal",
    description: "Müzik çalar",

    async run (client, message, args) {
        let msj = args.slice(0).join(' ');
      const voiceChannel = message.member.voice.channel;

      if (!message.member.voice.channel) return message.channel.send('Müzik dinlemek için önce **ses kanalına** bağlanman gerekir.')

      if (message.guild.me.voice.channel) return message.channel.send('Hali hazırda bot **birisi** için çalıyor.');

      if (!args.length) return message.channel.send('Lütfen şarkının **adını** gir..');

      

      const connection = await voiceChannel.join();

      const videoFinder = async (query) => {
          const videoResult = await ytSearch(query);
          return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
      } 

      const video = await videoFinder(args.join(' '));

      if(video){
          const stream = ytdl(video.url, {filter: 'audioonly'});
          connection.play(stream, {seek: 8, volume: 1})
          .on('finish', () =>{
              voiceChannel.leave();
              
          });

          let bu = await message.reply('Şarkı çalınmaya başlandı: ' + video.url )
          bu.react('🎶');
          bu.react('🎵');
          bu.react('🎸');
      } else {
          message.reply('Böyle bir şarkı yok Youtubenin içinde!');
      }
      




    }


}
