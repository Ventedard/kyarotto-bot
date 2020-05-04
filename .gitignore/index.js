const Discord = require('discord.js');
var radio = require("./radio.json");

const client = new Discord.Client();

client.ticketReg = require("./ticketRegister.json");
var prefix = "c!";

var version = "0.1.0";

client.login(process.env.TOKEN);

const uneCommande = 'c!msg '
const uneCommande2 = 'c!radio '
var vlastmsg = "";
var lastname = "";
var inChannel = false;
global.servers = {};



client.on("message", message =>{
    if(!message.guild) return
    
        client.user.setActivity("❤☣Kyarotto☢❤", { type: 'WATCHING'});
        client.user.setStatus('online')

    
    if(message.content === prefix + "carrot"){

        if(inChannel == true){
		message.channel.send(`${message.author} ❗🛑, Action impossible pour cause, le bot est connecté à un channel veuillez le déconnecter pour utiliser cette commande. 😥`)
    }else{
		
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
    }
    if(message.content === prefix + "hey"){
	    if(message.member.roles.some(r=>["👾 Zarmah 👾"].includes(r.name)) ) {
		            if(inChannel == true){
		message.channel.send(`${message.author} ❗🛑, Action impossible pour cause, le bot est connecté à un channel veuillez le déconnecter pour utiliser cette commande. 😥`)
	}else{
        message.channel.send(`Bonjour à toi ${message.author}, et au fait! j'ai un truc à te montrer 😋`)
         message.channel.send ( {files: ["./Pictures/" + "Guy" + ".jpg"]} )
	}
	    } else{
		    message.channel.send(`Désolé mais, tu n'as pas la permission d'effectuer cette commande, il faut être minimum 👾 Zarmah 👾`).then(msg => {
    msg.delete(5000)
  })
	    }
    }

	if(message.content === prefix + "oh"){
		        if(inChannel == true){
		message.channel.send(`${message.author} ❗🛑, Action impossible pour cause, le bot est connecté à un channel veuillez le déconnecter pour utiliser cette commande. 😥`)
	}else{
		message.channel.send ( {files: ["./autre/OH.mp4"]} )
    }
}
    if(message.content === prefix + "me"){
                if(inChannel == true){
		message.channel.send(`${message.author} ❗🛑, Action impossible pour cause, le bot est connecté à un channel veuillez le déconnecter pour utiliser cette commande. 😥`)
	}else{
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
}
        if(message.content === prefix + "encore"){
                if(inChannel == true){
		message.channel.send(`${message.author} ❗🛑, Action impossible pour cause, le bot est connecté à un channel veuillez le déconnecter pour utiliser cette commande. 😥`)
	}else{
         message.channel.send ( {files: ["./autre/" + "encore" + ".mp4"]} )
    }
}
    
        if(message.content === prefix + "meme"){
        
        if(inChannel == true){
		message.channel.send(`${message.author} ❗🛑, Action impossible pour cause, le bot est connecté à un channel veuillez le déconnecter pour utiliser cette commande. 😥`)
	}else{
        number = 28;
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
            //message.delete (1000)
        var embed = new Discord.RichEmbed()
            .setTitle("Aide")
            .setDescription("Voici la liste des commandes")
            .addField("c!carrot", "image", true)
            .addField("c!hey", "image monsieur Guy", true)
            .addField("c!me", "transition de bâtard", true)
            .addField("c!encore", "tu sais lire ?", true)
            .addField("c!meme", "image de meme", true)
            .addField("c!oh", "Le criste cosmic", true)
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
	   if(message.member.roles.some(r=>["🐼Staff 🐼", "🐼Config Discord🐼", "🔥 Shey 🔥", "🐲 Yhey 🐲"].includes(r.name)) ) {
			   var embed = new Discord.RichEmbed()
            .setTitle("Résumé du test")
            .setDescription("test : ok >> version : " + version)
            .setColor("0x33CC33")
            .setFooter("")
        message.channel.sendEmbed(embed).then(msg => {
    msg.delete(5000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/); 	   
	   } else{
message.channel.send(`Désolé mais, tu n'as pas la permission d'effectuer cette commande, il faut être minimum 🐼Config Discord🐼`).then(msg => {
    msg.delete(5000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
	   }
	   
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
            .setDescription("❗ La radio n'a pas été trouvé, fait c!radioliste pour obtenir la liste des radios.")
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
            .setTitle("▶ Lecture de la radio")
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
//try {
                if (inChannel) {
			var server = client[message.guild.id];
		    if(message.guild.voiceConnection){
                     for(var i = server.queue.length -1; i >=0; i--){
                        server.queue.splice(i, 1);
                    }
                    server.dipatcher.end(); 
                    }
                   if(message.guild.connection) message.guild.me.voiceChannel.disconnect();
			  message.guild.me.voiceChannel.leave();
                    inChannel = false;
			 var embed = new Discord.RichEmbed()
            .setTitle("🛑 Arrêt de la radio")
            .setDescription(lastname + " à été arrêté ⏹")
            .setColor("0xCC0000")
            .setFooter("")
        message.channel.sendEmbed(embed);
                }
//}catch (e){}
    }
    if (message.content === prefix + "radioliste") {
	    var embed = new Discord.RichEmbed()
            .setTitle("Radio liste")
            .setDescription("Voici la liste des radio (c!radio nom de la radio)")
            .addField("c!radio fun", "1️⃣Fun Radio", false)
            .addField("c!radio nrj", "2️⃣NRJ", false)
            .addField("c!radio hitwest", "3️⃣Hit West", false)
            .addField("c!radio skyrock", "4️⃣Skyrock", false)
            .addField("c!radio virgin", "5️⃣Virgin Radio", false)
	    .addField("c!radio rtl", "8️⃣RTL", false)
	    .addField("c!radio francebleu", "9️⃣France Bleu", false)
	    .addField("c!radio europe", "🔟Europe 1", false)
	    .addField("c!radio rtl2", "1️⃣1️⃣RTL 2", false)
	    .addField("c!radio rmc", "1️⃣2️⃣RMC Sport", false)
	    .addField("c!radio rfm", "1️⃣3️⃣RFM", false)
	    .addField("c!radio rire&chansons", "1️⃣4️⃣Rire & Chansons", false)
	    .addField("c!radio nostalgie", "1️⃣5️⃣Nostalgie", false)
            .setColor("0x2E64FE")
            .setFooter("")
        message.channel.sendEmbed(embed);
    }
 
	
	
	
	    //test ticket ***********************************************************************************************

    if(message.content === prefix + "cdTicket"){
	    if(message.member.roles.some(r=>["🐼Config Discord🐼"].includes(r.name)) ) {

            makeChannel(message)


	    } else{
		    message.channel.send(`Désolé mais, tu n'as pas la permission d'effectuer cette commande, il faut être minimum 🐼Config Discord🐼`).then(msg => {
    msg.delete(5000)
  })
	    }
    }




    if(message.content === prefix + "Ticketclose"){
	    if(message.member.roles.some(r=>["🐼Config Discord🐼"].includes(r.name)) ) {

            


	    } else{
		    message.channel.send(`Désolé mais, tu n'as pas la permission d'effectuer cette commande, il faut être minimum 🐼Config Discord🐼`).then(msg => {
    msg.delete(5000)
  })
	    }
    }

                function makeChannel(message){
                var server = message.guild;
                var name = message.author.username;
		var category = message.guild.channels.get("706873489402888192");
            var idx;
                //server.createChannel(name, "text");
                var chan =  server.createChannel(name, {
		
                    type: 'text',
		    parent: category,
                    permissionOverwrites: [{
                      id: '596442306274525206',
                      deny: ['VIEW_CHANNEL'],
                      allow: []
                    },
                    {
                        id: message.author.id,
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                    },]
                })
            .then(chan => chan.send(`${message.author}, Tu peux écrire la nature de ton problème ici un membre du staff va y répondre d'ici peux !`))
            	.catch(console.error);
                
            idx = chan.channel.id
              // var embed = new Discord.RichEmbed()
            //.setTitle("Bonjour")
            //.setDescription(`${message.author}, Tu peux écrire la nature de ton problème ici un membre du staff va y répondre d'ici peux !`)
            //.setColor("0xFFBF00")
            //.setFooter("")
            

            client.ticketReg [message.author.username] = {
                TicketID: idx
            }
            fs.writeFile ("./ticketRegister.json", JSON.stringify (client.ticketReg, null, 4), err => {
                if(err) throw err;
                message.channel.send("ok !")
            });
            }


            function delTicketChannel(message){
                var server = message.guild;
                var name = message.author.username;

            }
});


