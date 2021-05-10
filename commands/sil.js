module.exports = {
    name: "sil",
    description: "Mesaj siler",

    async run (client, message, args) {

        const amount = args.join(" ");

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Üzgünüm, buna yetkin yok :grinning:')


        if(!amount) return message.reply('Silinecek mesaj sayısını yazın.')

        if(amount > 100) return message.reply(`100 mesajdan fazla silmek beni zorlar abi, anlayışla karşıla, o yükü kadılramam, daha az bir sayı yazarsan daha iyi olur. `)

        if(amount < 1) return message.reply(`En azından 1 mesaj silmen gerek.`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send(amount + 'Mesaj sildim!')

    }
}
