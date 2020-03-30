const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "c!";

client.login(process.env.TOKEN);

client.on("message", message =>{
    if(!message.guild) return
    
    client.user.setActivity("❤🐇Kyarotto🐇❤", { type: 'WATCHING'});
    
    if(message.content === prefix + "carrot"){
        
message.channel.send(`${message.author} Mmm, les Carottes 🥕`)
        number = 43;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        
        try {
            
            message.channel.send ( {files: ["./Pictures/" + imageNumber + ".jpg"]} )
        } catch (error) {}
            try {
               
            message.channel.send ( {files: ["./Pictures/" + imageNumber + ".png"]} )
        } catch (error) {}
            try {
              
            message.channel.send ( {files: ["./Pictures/" + imageNumber + ".gif"]} )
        } catch (error) {
            
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
        } catch (error) {}
            try {
                
            message.channel.send ( {files: ["./videos/" + videoNumber + ".mp4"]} )
        } catch (error) {}
            try {
                
            message.channel.send ( {files: ["./videos/" + videoNumber + ".avi"]} )
        } catch (error) {
           
        }
        
        
         
    }
        if(message.content === prefix + "encore"){
        
         message.channel.send ( {files: ["./autre/" + "encore" + ".mp4"]} )
    }
    
        if(message.content === prefix + "meme"){
        

        number = 22;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        
        try {
            
            message.channel.send ( {files: ["./meme/" + imageNumber + ".jpg"]} )
        } catch (error) {}
            try {
               
            message.channel.send ( {files: ["./meme/" + imageNumber + ".png"]} )
        } catch (error) {}
            try {
              
            message.channel.send ( {files: ["./meme/" + imageNumber + ".gif"]} )
        } catch (error) {
            
        }
        
        
        
    }
    
        if(message.content === prefix + "rhitwest"){
        message.channel.send(`-play https://hitwest.ice.infomaniak.ch/hitwest-high.mp3`)
         
    }
            if(message.content === prefix + "rskyrock"){
        message.channel.send(`-play http://icecast.skyrock.net/s/natio_mp3_128k`)
         
    }
});
