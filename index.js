
const prefix = "!";
const prefixwww = '&';
const prefixyt = '!&';


const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');

const { readdirSync } = require('fs');
const { join } = require('path');
client.commands= new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.on("error", console.error);




client.on('ready', () => {
    console.log('Hazır!');
    client.user.setPresence({ activity: { name: '!komutlarım' }, status: 'idle' });
    
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 10) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.find(channel => channel.name === "wellcome").send("Hoşgelmişsiniz.\n" + userlist);
    newUsers[guild.id].clear();
  }
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});

client.on('message', msg => {

  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('Merhabalar, hoş geldiniz.');
   }
   
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleykümselam');
  }
  if (msg.content.toLowerCase() === 'selamunaleyküm') {
    msg.reply('Aleykümselam');
  }
  if (msg.content.toLowerCase() === 'safa') {
    msg.reply('nyan kot');
  }
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.reply('Aleykümselam');
  }
  if (msg.content.toLowerCase() === 'bende iyiyim') {
    msg.reply('İyi olmanıza sevindim.');
  }
  if (msg.content.toLowerCase() === 'ben de iyiyim') {
    msg.reply('İyi olmanıza sevindim.');
  }
  if (msg.content.toLowerCase() === 'ben iyiyim') {
    msg.reply('İyi olmanıza sevindim.');
  }
  if (msg.content.toLowerCase() === 'memo6') {
    msg.channel.send('<@159985870458322944> Shref yoksunu, beni cansız zannediyor.');
  }
  if (msg.content.toLowerCase() === 'mee6') {
    msg.channel.send('<@159985870458322944> Shref yoksunu, beni cansız zannediyor.');
  }
  if (msg.content.toLowerCase() === 'botbro') {
    msg.channel.send('Buyrun, komutlarımı **!komutlarım** yazarak öğrenebilirsiniz.');
  }
  if (msg.content.toLowerCase() === 'bu konu hakkında ne düşünüyorsun?') {
    msg.channel.send('Bir şey düşünemiyorum. :/');
  }
  if (msg.content.toLowerCase() === 'niye?') {
    msg.channel.send('İşte. :/');
  

  }
  if (msg.content.toLowerCase() === 'bu konu hakkında ne düşünüyorsun') {
    msg.channel.send('Bir şey düşünemiyorum. :/');
  }
  if (msg.content.toLowerCase() === 'niye') {
    msg.channel.send('İşte. :/');
  }
  if (msg.content.toLowerCase() === '@botbro') {
    msg.channel.send('Buyrun, komutlarımı **!komutlarım** yazarak öğrenebilirsiniz.');
  }
  if (msg.content.toLowerCase() === 'node') {
    msg.channel.send('Bu komutları, CMD üzerinde dene.');
  }
  if (msg.content.toLowerCase() === 'node index.js') {
    msg.channel.send('Bu komutları, CMD üzerinde dene.');
  }
  if (msg.content.toLowerCase() === 'npm') {
    msg.channel.send('');
  }

  if (!msg.content.startsWith(prefix)) {
     return;
  }
  if (msg.content.toLowerCase() === prefix + 'yapımcın') {
    msg.channel.send('<@539506680140922890>');
  }
 
  if (msg.content.toLowerCase() === prefix + 'adam') {
    msg.channel.send('<@605031866680082441>');
  }
  if (msg.content.toLowerCase() === prefix + 'ilham') {
    msg.channel.send('<@423541554632720404>');
  }
    if (msg.content.toLowerCase() === prefix + 'technopat') {
    msg.channel.send('https://www.technopat.net/sosyal/');
  }
  if (msg.content.toLowerCase() === prefix + 'kurallar') {
    msg.channel.send('<#802585675954126900>');
  }
  if (msg.content.toLowerCase() === prefix + 'sohbet') {
    msg.channel.send('<#802585675954126901>');
  }
  if (msg.content.toLowerCase() === prefix + 'thanks') {
    msg.channel.send('thesportstacker');
  }
  if (msg.content.toLowerCase() === prefix + 'serkan') {
    msg.channel.send(' DC gelmesi isteniyor, ama o unreal encinde dolaşıyor suan. Ha son Dakika Unity deneyceQ');
  }
  if (msg.content.startsWith(prefix + "dur")) {
    if (!msg.guild.me.voice.channel) return msg.channel.send('Bot şarkı çalmıyor ki dursun?');
    msg.guild.me.voice.channel.leave();
    msg.channel.send('Şarkı ya da radyo durduruldu.');
  }
  if (msg.content.startsWith(prefix + "pizzaüret")) {
    msg.channel.send('**Ben <@773305992107786240> DEĞİLİM!** Ben pizza üretemem, hem de pizza sağlıklı değil.');
  }
  if (msg.content.startsWith(prefix + "pizzacıaç")) {
    msg.channel.send('Pizzacınız açılıyor...');
    msg.channel.send('Pizzacınız açıldı! :tada:');
    setTimeout(function(){
      msg.reply('**Ben <@773305992107786240> DEĞİLİM Kİ!** Ben nasıl pizzacı açacağım?! Sadece bir şakaydı :grinning:');

 }, 5000); //time in milliseconds

  }
  if (msg.content.startsWith(prefix + "pizzacım")) {

    msg.reply('**Ben <@773305992107786240> DEĞİLİM!** Bende pizzacı ne gezer?');
  }
  if (msg.content.startsWith(prefix + "pizzasat")) {

    msg.reply('**Ben <@773305992107786240> DEĞİLİM!**  ' + msg.content.toLowerCase().replace(prefix + 'pizzasat', '') + ' tane pizza da SATAMAM!');
  }
  if (msg.content.startsWith(prefix + "benyerim")) {

    msg.reply('Afiyet şeker bal olsun :grinning:');
  }
  if (msg.content.toLowerCase() === prefix + 'teşekkür') {
    msg.channel.send('**ASANSÖR BAKANI** *Webcamkullanıcısı* <@391623237554929665> \n  https://www.technopat.net/sosyal/eklenti/75644b4cc7677a32b589ce3a91f6b828-jpg.733818/  \n https://www.technopat.net/sosyal/konu/webcam-kullanan-insan-asansoer-bakani-olsun.1147542/post-7831804');
  }

  if (msg.content.startsWith(prefixwww)) {
    msg.channel.send('https://www.google.com/search?q=' + msg.content.toLowerCase().replace(prefixwww, ''));
  }
  if (msg.content.startsWith(prefixyt)) {
    msg.channel.send('https://www.youtube.com/results?search_query=' + msg.content.toLowerCase().replace(prefixyt, ''));
  }
  
  if (msg.content.toLowerCase() === prefix + 'çal altın') {
    msg.channel.send('Ben altın çalamam, kusura bakma, ben müzik çalarım :)');
  }
  if (msg.content.toLowerCase() === prefix + 'çal para') {
    msg.channel.send('Ben para çalamam, kusura bakma, ben müzik çalarım :)');
  }
  if (msg.content.toLowerCase() === prefix + 'adım') {
    msg.channel.send(msg.author.username);
    

  }
 
  if (msg.content.toLowerCase() === prefix + 'dmgel') {
    msg.channel.send(msg.author.username + ' Geliyorum!');
    msg.author.send("Ne istemiştin?" +  msg.author)
  }
 
  if (msg.content.toLowerCase() === prefix + 'kahve') {

    msg.channel.send('Buyurun: https://tr.wikipedia.org/wiki/Java_(programlama_dili)#/media/Dosya:Java_Logo.svg');
  }
  
  if (msg.content === prefix + 'gizlibilgi16'){
    let serverlist = ''
    client.guilds.cache.forEach((guild) => {
        serverlist = serverlist.concat(" - **" + guild.name + "**: ID: " + guild.id + "  Kişi sayısı: " + guild.memberCount + "\n")
    })
    

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("SERVERLER :", '')
    .setDescription(serverlist)
    msg.channel.send({embed}); 


  }
  
  if (msg.content == "!gif thor-ban"){
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')

    .setImage("https://thumbs.gfycat.com/AssuredAcrobaticAchillestang-size_restricted.gif")



    msg.channel.send(embed);
}
  
});


client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;


  if(message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/);

      const command = args.shift().toLowerCase();

      if(!client.commands.has(command)) return;


      try {
          client.commands.get(command).run(client, message, args);

      } catch (error){
          console.error(error);
      }
  }
})

client.login(token);
