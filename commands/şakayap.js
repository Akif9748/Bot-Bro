const Discord = require('discord.js');

const şakalar = [
  "*Ali öğretmenini arar* \n Ali:Hocam ali bugün okula gelemeyecek. \n Hoca: Siz Alinin neyi olursunuz? \n Ali: Ben Alinin babasıyım.",
  "Sen bu mesajı uzaydan yazıyorsun.",         //şakalar buraya tanımlanır<<<<<<<<<<<<<
  "-Abi sana Sıla'nın selamı var. \n -Hangi Sıla? \n -Gayri Safi Milli HaSıla",
  "Taşıma suyla neden değirmen dönmez? \n Çünkü Taşıma-su bir Japon kızıdır. \n Peki Taşıma-su annesinden nasıl su ister? \n Peki Taşıma-su annesinden nasıl su ister? \n Matarama-su-ko.",
  "-Küçük su birikintisine ne denir? \n Sucuk",
  "+Bu yapacağımız işin hiç bir garantisi yok! \n -Garanti istiyorsan tost makinesi al.",
  "+Hangi termal macunu almalıyım? \n -CcC CoolerMEsir CcC."

];



module.exports = {
  name: 'şakayap',
  description: 'rasgele şaka işte',
  async run (client, message, args){

    const rastgeleşaka = şakalar[Math.floor(Math.random() * şakalar.length)];    //şakaların içinden rastgeleşaka verir<<<<<<<<<<


    message.channel.send(rastgeleşaka);                       //rastgelelşakalardan birini mesaj olarak yaz.<<<<<<
  }
}
