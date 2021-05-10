
const figlet = require('figlet');

module.exports = {
  name: "şekilliyazı",
  description: "Sürpriz",

  async run (client, message, args){
      if(!args[0]) return message.channel.send('Birşeyler yazın.');

      msg = args.join(" ");

      figlet.text(msg, function (err, data){
          if(err){
              console.log('Birşeyler bozuk');
              console.dir(err);
          }
          if(data.length > 2000) return message.channel.send('2000 karakter ')

          message.channel.send('```' + data + '```')
      })
  }
}
