const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = '!'
var CheckTimer;

bot.on('message', (message) => {
    if (message.content == prefix + 'check') {
        message.channel.send('Timer Reset !');
        clearInterval(CheckTimer);
        CheckTimer = setInterval(CheckClock, 10000);//1800000
    } else if (message.content == prefix + 'stop') {
        throw new Error('BOT STOPPED !');
    } else if (message.content == prefix + 'start') {
        CheckTimer = setInterval(CheckClock, 10000);
    }

});
function CheckClock() {
    bot.channels.get(bot.channels.find('name', 'wallcheck').id).send('@everyone CHECK WALLS CHECK WALLS CHECK WALLS');
    bot.channels.get(bot.channels.find('name', 'wallcheck').id).send('@everyone CHECK WALLS CHECK WALLS CHECK WALLS');
    bot.channels.get(bot.channels.find('name', 'wallcheck').id).send('@everyone CHECK WALLS CHECK WALLS CHECK WALLS');
    bot.channels.get(bot.channels.find('name', 'wallcheck').id).send('@everyone CHECK WALLS CHECK WALLS CHECK WALLS');
    bot.channels.get(bot.channels.find('name', 'wallcheck').id).send('@everyone CHECK WALLS CHECK WALLS CHECK WALLS');

}

bot.login(process.env.BOT_TOKEN);
