const Discord = require('discord.js');

exports.run = async(client, message) => {
try{
  let botMsg = await message.channel.send("Ping ölcülüyor...")  ;botMsg.edit("Mesaj Pingi  : " + (botMsg.createdAt - message.createdAt) + "ms");
    message.channel.send(`Pingim: ` + client.ws.ping + `ms `);
}catch(e){message.reply(e);}
}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ["ms", "ping"], 
    permLevel : 0
}

exports.help = {
    name : 'ping',
    description : 'Botun pingini göstermeye uarar.',
    usage : 'ping'
}