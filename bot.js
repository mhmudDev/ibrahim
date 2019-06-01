const Discord = require("discord.js");
const client = new Discord.Client();
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("549012135833763845");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**#~Wèlcòme To __Z__èro Sèrvèr **`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء