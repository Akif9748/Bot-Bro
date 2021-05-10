module.exports = {
    name: "sayaç",
    description: "Sürpriz",

    async run (client, message, args){
        let msj = args.slice(0).join(' ');
        
        
        if(!msj) {
            return message.reply('Bir sayı da yazmalısın... Saniye cinsinden yaz.')
        }
        
        message.channel.send("Sayaç " + msj + " Saniye olarak ayarlandı, başlatıldı.");
        setTimeout(function(){
      message.reply( msj + ' saniye doldu!');

 }, msj * 1000); 
        

    }
}