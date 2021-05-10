
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');




module.exports = {
    name: "ytara",
    description: "Müzik çalar",

    async run (client, message, args) {
        let msj = args.slice(0).join(' ');

        if (!args.length) return message.channel.send('Lütfen videonun **adını** gir..');

      

      const videoFinder = async (query) => {
          const videoResult = await ytSearch(query);
          return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
      } 

      const video = await videoFinder(args.join(' '));

      if(video){
          message.channel.send('Video\'yu buldum :)' + video.url);
      } else {
          message.reply(msj + 'diye bir video yok ki Youtubenin içinde!');
      }




    }


}
