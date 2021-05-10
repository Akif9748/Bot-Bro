const Discord = require('discord.js');

const encler = [
  "http://image.bayimg.com/naohaaacb.jpg",
  "https://i.imgur.com/BenZWvv.jpg",         //şakalar buraya tanımlanır<<<<<<<<<<<<<
  "https://imgur.com/pPt1bVh"

];



module.exports = {
  name: 'enkoder',
  description: 'enkoder işte',
  async run (client, message, args){

    const rastgeleenc = encler[Math.floor(Math.random() * encler.length)];    //şakaların içinden rastgeleşaka verir<<<<<<<<<<


    message.channel.send(rastgeleenc);                       //rastgelelşakalardan birini mesaj olarak yaz.<<<<<<
  }
}
