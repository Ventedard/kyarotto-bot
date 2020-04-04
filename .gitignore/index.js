const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "c!";

client.login(process.env.TOKEN);

const uneCommande = 'c!msg '
var vlastmsg = "";

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
    
  if (message.content.startsWith(uneCommande)) {

    vlastmsg = message.author.toString()
      
      message.delete (100)
    const str = message.content.substring(uneCommande.length)
    //message.channel.sendMessage(str)
        var embed = new Discord.RichEmbed()
            .setTitle("Message anonyme")
            .setDescription(str)
            .setColor("0xFFBF00")
            .setFooter("")
        client.channels.get("622192865144995851").sendEmbed(embed)
    //client.channels.get("622192865144995851").send("Message anonyme : " + str)
      

  }
    if(message.content === prefix + "lastmsg"){
        //message.channel.sendMessage("verification des permission")
        message.delete (1000)
    if(message.member.roles.some(r=>["🐼Staff 🐼", "🐼Config Discord🐼", "🔥 Shey 🔥", "🐲 Yhey 🐲"].includes(r.name)) ) {
        if(vlastmsg === ''){
            message.channel.send("Désolé mais je n'ai trouvé personne !😥").then(msg => {
    msg.delete(5000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/); 
        } else{
           message.channel.send("La dèrnière personne à avoir utilise msg est : " + vlastmsg).then(msg => {
    msg.delete(5000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/); 
        }
  
    } else {
  message.channel.send(`Désolé mais, tu n'as pas la permission d'effectuer cette commande, il faut être minimum 🐼Config Discord🐼`).then(msg => {
    msg.delete(5000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
    }
        
    }
        if(message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Aide")
            .setDescription("Voici la liste des commandes")
            .addField("c!carrot", "image", true)
            .addField("c!hey", "image monsieur Guy", true)
            .addField("c!me", "transition de bâtard", true)
            .addField("c!encore", "tu sais lire ?", true)
            .addField("c!meme", "image de meme", true)
            .addField("c!msg votre message", "evoyer un message anonyme", true)
            .setColor("0x2E64FE")
            .setFooter("")
        message.channel.sendEmbed(embed);
   }
});
