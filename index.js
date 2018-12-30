const Discord = require('discord.js');
const client = new Discord.client();
var prefix = "&";

client.login('NTAyNjE0MDY2OTUxMzU2NDE5.DwbVTw.6zxprldIevfcCZVJvgQN2cA2zx0');

client.on('message', message =>(
    if(message.content === "&credits"){
        message.reply('Mon dev est Shadow Corax#1000');
    
        client.login('NTAyNjE0MDY2OTUxMzU2NDE5.DwbVTw.6zxprldIevfcCZVJvgQN2cA2zx0')
    }
})