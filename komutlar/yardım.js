const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('BLACK')
.setAuthor(`Ladroa#0001 Tarafından OwO Public sunucusuna yapılmış özel bot`)
.setDescription(`
\`o!rol-koruma\` : **Rol Koruma Aç/Kapat**
\`o!reklam-engel\` :  **Reklam Engel Aç/Kapat**
\`o!ban\`: **Etiketlediginiz Kişiyi Sunucudan Atar**
\`o!ban-log\`: **Ban Log Kanalını Ayarlar**
\`o!ban-limit\`: **Banlama Yetkisine Sahip Kişiler Limitden Fazla Kişi Banlayamazlar**
\`o!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
\`o!sil\`:  **Belirttiğiniz Sayıda Mesajı Siler**
\`o!ping\`:  **Pinginizi Ölçüp Atar**
\`o!avatar\`:  **Avatarınızı Atar**
\`o!yapımcım\`:  **Botun Sahibini Gösterir**
\`o!herkeserolver\`:  **Herkese Belirlediginiz Rolü Verir**
\`o!herkestenrolal\`:  **Herkesden Rol Alır**
\`o!sa-as\`:  **Sa-As Sistemini Açarsınız**
\`o!yetkilerim\`:  **Yetkilerinizi Gösterir**
`)
.setImage("")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: 'yardım menüsü',
  usage: 'yardım'
};