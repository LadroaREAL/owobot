const rolly = require('discord.js'); 
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
const rollycode = message.mentions.channels.first() || message.channel
const rolly1 = args[0]

if (!rolly1) {
  
const herostimere = new rolly.MessageEmbed()
  
.setDescription(`Reklam engel sistemini açmak için ${ayarlar.prefix}**reklam-engel aç #kanal** veya ${ayarlar.prefix}**reklam-engel aç** yazmalısın!`)
.setColor('RED')

return message.channel.send(herostimere)
}
 
if (rolly1 == 'aç') { 
  
let açıkkapalı = await db.fetch(`reklamEngelrollycode_${rollycode.id}`)
    
db.set(`reklamEngelcodework_${rollycode.id}`,'açık')

const embed = new rolly.MessageEmbed()
  
.setDescription(`Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda aktif edildi!`)
.setColor('GREEN')

return message.channel.send(embed)

}
  
if (rolly1 == 'kapat') {
  
let açıkkapalı = await db.fetch(`reklamEngelrollycode_${rollycode.id}`)
    
db.delete(`reklamEngelcodeshare_${rollycode.id}`)
  
const herostimere = new rolly.MessageEmbed()
  
.setDescription(`Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda deaktif edildi!`)
.setColor('GREEN')

return message.channel.send(herostimere)
}
  
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'reklam-engel',
  description: 'reklam engellemeyi açar',
  usage: 'reklam-engel'
}