const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "c!";

client.login(process.env.TOKEN);

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "carrot"){
        message.channel.send(`${message.author} Mmm, les Carottes 🥕`)

        number = 34;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        
        try {
            message.channel.send ( {files: ["./Pictures/" + imageNumber + ".jpg"]} )
        } catch (error) {
            try {
            message.channel.send ( {files: ["./Pictures/" + imageNumber + ".png"]} )
        } catch (error) {
            try {
            message.channel.send ( {files: ["./Pictures/" + imageNumber + ".gif"]} )
        } catch (error) {
            
        }
        }
        }
        
    }
    if(message.content === prefix + "hey"){
        message.channel.send(`Bienvenue à toi ${message.author}, et enfaite j'ai un truc a te montrer 😋`)
         message.channel.send ( {files: ["./Pictures/" + "Guy" + ".jpg"]} )
    }
});
