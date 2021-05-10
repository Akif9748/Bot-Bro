const Discord = require("discord.js");
const bot = new Discord.Client();
const ffmpeg = require("ffmpeg");
const ayarlar = "./config.json";
const prefix = '!';



var fenomen = "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio";
var metro   = "http://17773.live.streamtheworld.com/METRO_FM_SC";
var number1 = "http://nr1digitalsc.radyotvonline.com/stream/264/";
var power   = "http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio";
var slowtr  = "https://radyo.dogannet.tv/slowturk";
var joyturk = "http://17733.live.streamtheworld.com/JOY_TURK_SC";
var mydonose = "http://radiotrucker.com/tr/play/11981/mydonose-turk"
var efkarfm = "http://17703.live.streamtheworld.com/EFKAR.mp3"
var ulkufm = "http://radiotrucker.com/tr/play/11981/ulku-fm"
var trt = "https://ssl4.radyotvonline.com/radyohome/trtfm.stream_aac/playlist.m3u8"
var yedi = "http://radiotrucker.com/tr/play/11981/radyo-7"
var vurgun = "http://radiotrucker.com/tr/play/11981/virgin-radio-turkiye"
var tgrt = "http://radiotrucker.com/tr/play/11981/tgrt-fm"
var showr = "http://radiotrucker.com/tr/play/11981/show-radyo"
var krl = "http://radiotrucker.com/tr/play/11981/kral-fm"
var krlpp = "http://radiotrucker.com/tr/play/11981/kral-pop"
var gonul = "http://radiotrucker.com/tr/play/11981/gonul"
var alem = "http://radiotrucker.com/tr/play/11981/alem-fm"



module.exports = {
    name: "radyo",
    description: "Sürpriz",

    async run (client, message, args){
        let mesaj = args.slice(0).join(' ');
        
        if(!mesaj) {
            message.reply('Bir radio gir, liste için : `!radyoliste` :radio:')

            
        }  
        if (!message.member.voice.channel) return message.channel.send('Radyo dinlemek için önce **Radyo kanalına** bağlanman gerekir. :radio:')
        if (mesaj === "7") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(yedi);
                return message.channel.send("**Radyo 7** FM çalıyorum. :radio: :radio:");
            }));
            return;
        };
        if (mesaj === "11") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(vurgun);
                return message.channel.send("**Virgin** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "12") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(tgrt);
                return message.channel.send("**TGRT** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "13") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(showr);
                return message.channel.send("**SHOW** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "14") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(krl);
                return message.channel.send("**Kral** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "15") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(krlpp);
                return message.channel.send("**Kral POP** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "16") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(gonul);
                return message.channel.send("**Gönül** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "17") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(alem);
                return message.channel.send("**Alem** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "18") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(trt);
                return message.channel.send("**TRT FM** çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "1") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(fenomen);
                return message.channel.send("**Fenomen** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "2") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(metro);
                return message.channel.send("**Metro** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "3") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(number1);
                return message.channel.send("**Number One** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "4") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(power);
                return message.channel.send("**Power** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "5") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(slowtr);
                return message.channel.send("**Slow Türk** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "6") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(joyturk);
                return message.channel.send("**Joy Türk** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "10") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(mydonose);
                return message.channel.send("**Maydonoz** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "8") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(efkarfm);
                return message.channel.send("**Efkar** FM çalıyorum. :radio:");
            }));
            return;
        };
        if (mesaj === "9") {
            if (message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(ulkufm);
                return message.channel.send("**ULKU** FM çalıyorum. :radio:");
            }));
            return;
        };
        

    }
}