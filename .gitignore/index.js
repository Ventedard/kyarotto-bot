const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "c!";

client.login("NjkyNzA3Nzk2Mjg1Nzg0MTA0.XnyfGA.Lo4btf98PGw0l5OICnGUpOIZmWQ");

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "carrot"){
        message.channel.send(`${message.author} Mmm, les Carottes <3`)

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
});
