const Discord = require("discord.js");
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Tutorial Bot is online!');
});

client.login("SuperSecretToken");
