const Discord = require('discord.js');

var cevaplar = [
  'sen nasılsın?',
  'ben iyiyim, siz nasılsınız?',
  '<@539506680140922890> in SSDsinde yaşıyorum, iyi buralar.',
  'Dedim ya, ben bir botum, ama tekrar söyleyim, ben yaşıyorum, siz ne yapıyorsunuz?',
  'geçen MEMO6 beni sinirlendirdi, ondan beri keyfim yok, siz iyisinizdir İnşallah.',
  'Kasasal ısınma beni de etkiliyor, PC 100 derece olmuş geçen.'
]






module.exports = {
  name: "nasılsın",
  description: "Bota hal hatır sorar",
  async run (client, message, args){



    const mesaj = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    message.channel.send(mesaj);
  }




}
