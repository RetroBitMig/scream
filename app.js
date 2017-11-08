const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
  console.log('Bot up');
  channel = client.channels.get('281830955876876290');
  channel.join().then(connection => {
  var screamArray = fs.readdirSync('./screams');
    function scream(connection) {
      var screamFile = screamArray[Math.floor(Math.random() * screamArray.length)];
      var screamPath = './screams/'+screamFile;
      console.log(screamPath);
      var dispatcher = connection.playFile(screamPath);
      dispatcher.on('end', () => {
        console.log('Done');
        scream(connection);
      });
      dispatcher.on('error', () => {
        console.log('Done1');
        scream(connection);
      });
      dispatcher.on('warn', () => {
        console.log('Done2');
        scream(connection);
      });
    }
    scream(connection);
  });
});

client.login('token');
