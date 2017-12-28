const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = '`'
var CheckTimer = setInterval(CheckClock,5000);
var Check = false;
    bot.on("ready",async ()=>{CheckClock();
    });

bot.on('message', (message) => {
    if(message.content == prefix + "check"){
        message.channel.sendMessage("Timer Reset !");
            clearInterval(CheckTimer);
            CheckTimer = setInterval(CheckClock,5000);
        }
    });
function CheckClock(){
        for(var x = 0; x<50;x++){
            bot.channels.get('395662013595910149').send('CHECK WALLS CHECK WALLS CHECK WALLS');
    }
} 

bot.login(process.env.Mzk1NjY1MjYyNjQyMzMxNjQ4.DSYH6Q.JztHOVU790z3NxWeRQv3qbMkiJU);
