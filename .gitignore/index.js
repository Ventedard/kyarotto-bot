const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "c!";

client.login(process.env.TOKEN);

client.on("message", message =>{
    if(!message.guild) return
    
    client.user.setActivity("❤🐇Kyarotto🐇❤");
    
    if(message.content === prefix + "carrot"){
        

        number = 34;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        
        try {
            message.channel.send(`${message.author} Mmm, les Carottes 🥕`)
            message.channel.send ( {files: ["./Pictures/" + imageNumber + ".jpg"]} )
        } catch (error) {
            try {
                message.channel.send(`${message.author} Mmm, les Carottes 🥕`)
            message.channel.send ( {files: ["./Pictures/" + imageNumber + ".png"]} )
        } catch (error) {
            try {
                message.channel.send(`${message.author} Mmm, les Carottes 🥕`)
            message.channel.send ( {files: ["./Pictures/" + imageNumber + ".gif"]} )
        } catch (error) {
            message.channel.send(`${message.author} désolé impossible de charger l'image 😢`)
        }
        }
        }
        
    }
    if(message.content === prefix + "hey"){
        message.channel.send(`Bonjour à toi ${message.author}, et au fait! j'ai un truc à te montrer 😋`)
         message.channel.send ( {files: ["./Pictures/" + "Guy" + ".jpg"]} )
    }
    if(message.content === prefix + "me"){
        
        number = 6;
        videoNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        
        try {
            
            message.channel.send ( {files: ["./videos/" + videoNumber + ".mov"]} )
        } catch (error) {
            try {
                
            message.channel.send ( {files: ["./videos/" + videoNumber + ".mp4"]} )
        } catch (error) {
            try {
                
            message.channel.send ( {files: ["./videos/" + videoNumber + ".avi"]} )
        } catch (error) {
            message.channel.send(`${message.author} désolé impossible de charger la vidéo 😢`)
        }
        }
        }
         
    }
});
