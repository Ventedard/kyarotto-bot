const Discord = require('discord.js');
var radio = require("./radio.json");
const client = new Discord.Client();
var prefix = "c!";


client.login(process.env.TOKEN);

const uneCommande = 'c!msg '
const uneCommande2 = 'c!radio '
var vlastmsg = "";
var lastname = "";
var inChannel = false;
global.servers = {};

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
            message.delete (1000)
        var embed = new Discord.RichEmbed()
            .setTitle("Aide")
            .setDescription("Voici la liste des commandes")
            .addField("c!carrot", "image", true)
            .addField("c!hey", "image monsieur Guy", true)
            .addField("c!me", "transition de bâtard", true)
            .addField("c!encore", "tu sais lire ?", true)
            .addField("c!meme", "image de meme", true)
            .addField("c!msg votre message", "evoyer un message anonyme", true)
	    .addField("c!radioliste", "affiche la liste des radios", true)
	    .addField("c!radioleave", "quiter la radio en cours de lecture", true)
	    .addField("c!radio votre radio", "permet de lanver votre radio dans un salon vocal", true)
            .setColor("0x2E64FE")
            .setFooter("")
        message.channel.sendEmbed(embed);
   }
    
   if(message.content === prefix + "test"){
       message.delete (1000)
       message.channel.send("OK").then(msg => {
    msg.delete(5000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/); 
   }
    
    
      if (message.content.startsWith(uneCommande2)) {
      
     // message.delete (1000)
    var str = message.content.substring(uneCommande2.length)
    	            try {
			    
		var rstat = radio[str]
		lastname = rstat.name;
			    
            } catch (e){
		    		 var embed = new Discord.RichEmbed()
            .setTitle("Erreur")
            .setDescription("La radio n'a pas été trouvé, fait c!radioliste pour obtenir la liste des radios.")
            .setColor("0xCC0000")
            .setFooter("")
        message.channel.sendEmbed(embed);
		    return;
		    
	    }
         
        
	 
	 
     const channel = message.member.voiceChannel;

	      if(!client[message.guild.id])
{
    client[message.guild.id] = {queue: []}
}
    channel.join()
    .then(connection => {
	    
	    var server = client[message.guild.id];

server.queue.push(rstat.url);
	   Play(connection, message)
    })
    .catch(console.error);
        inChannel = true;
	      
	      
	      var embed = new Discord.RichEmbed()
            .setTitle("Lecture de la radio")
            .setDescription(rstat.name)
            .setColor("0x33CC33")
            .setFooter("")
        message.channel.sendEmbed(embed);
	      //client.voiceConnection.playFile(rstat.url);
	       // message.channel.send(rstat.url).then(msg => {
   // msg.delete(5000)
 // })
  //.catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
         
  }
	function Play(connection, message)
{
    var server = client[message.guild.id];
    server.dipatcher = connection.playStream(server.queue[0]);
    server.queue.shift();
    server.dipatcher.on("end", function(){});
}
 
   
    if (message.content === prefix + "radioleave") {
try {
                if (inChannel) {
                    message.guild.me.voiceChannel.leave();
                    inChannel = false;
			 var embed = new Discord.RichEmbed()
            .setTitle("Arrêt de la radio")
            .setDescription(lastname + " à été arrêté")
            .setColor("0xCC0000")
            .setFooter("")
        message.channel.sendEmbed(embed);
                }
}catch (e){}
    }
    if (message.content === prefix + "radioliste") {
	    var embed = new Discord.RichEmbed()
            .setTitle("Radio liste")
            .setDescription("Voici la liste des radio (c!radio nom de la radio)")
            .addField("c!radio fun", "Fun Radio", false)
            .addField("c!radio nrj", "NRJ", false)
            .addField("c!radio hitwest", "Hit West", false)
            .addField("c!radio skyrock", "Skyrock", false)
            .addField("c!radio virgin", "Virgin Radio", false)
            .setColor("0x2E64FE")
            .setFooter("")
        message.channel.sendEmbed(embed);
    }
 
});


