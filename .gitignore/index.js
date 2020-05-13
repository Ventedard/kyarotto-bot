const Discord = require('discord.js');
var radio = require("./radio.json");

const client = new Discord.Client();
const fs = require("fs").promises;
client.ticketReg = require("./ticketRegister.json");
var prefix = "c!";
const ytdl = require('ytdl-core');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM();
const document = dom.window.document;

var version = "0.1.0";

client.login(process.env.TOKEN);

const CMDmsg = 'c!msg '
const CMDmsg2 = 'c!radio '
const CMDPlay = 'c!play '
var vlastmsg = "";
var lastname = "";
var inChannel = false;
global.servers = {};



client.on("message", async message =>{
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
    
  if (message.content.startsWith(CMDmsg)) {

    vlastmsg = message.author.toString()
      
      message.delete (100)
    const str = message.content.substring(CMDmsg.length)
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
	   if(message.content === prefix + "reboot"){
       message.delete (1000)
	   if(message.member.roles.some(r=>["🐼Staff 🐼", "🐼Config Discord🐼", "🔥 Shey 🔥", "🐲 Yhey 🐲"].includes(r.name)) ) {
			   
            message.channel.send(`redémarrage du bot en cour ...`).then( () => {
		   	client.destroy()
			client.login(process.env.TOKEN);
	    });
 		
  
	   } else{
message.channel.send(`Désolé mais, tu n'as pas la permission d'effectuer cette commande, il faut être minimum 🐼Config Discord🐼`).then(msg => {
    msg.delete(5000)
  })
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
	   }
	   
   }
    
    
      if (message.content.startsWith(CMDmsg2)) {
      
     // message.delete (1000)
    var str = message.content.substring(CMDmsg2.length)
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
	    
		message.delete (10)
            makeChannel(message)

    }




    if(message.content === prefix + "Ticketclose"){
	    


            if(message.channel.name.startsWith(`『📩』ticket-`)){
                delTicketChannel(message)
            }else{}
            
    }
    if(message.content === prefix + "sav"){
	    

        saveTranscript(message)

}
	
                function makeChannel(message){
                var server = message.guild;
                var name = "『📩』ticket-" + message.author.username;
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
            .then(chan => {
		    chan.send(`${message.author}`);
             var embed = new Discord.RichEmbed()
	     
            .setTitle("Bonjour")
            .setDescription(`Tu peux écrire la nature de ton problème ici un membre du staff va y répondre d'ici peux ! Fais "c!Ticketclose" pour fermer ce tiket`)
            .setColor("0xFFBF00")
            .setFooter("")
                chan.sendEmbed(embed);
            idx = chan.channel.id
            })
            	.catch(console.error);
                
            


            
            }


           async function delTicketChannel(message){
                var server = message.guild;
                var name = message.author.username;
                
        message.channel.send(`sauvegarde en cour ...`)
        await saveTranscript(message)
        message.channel.delete();
            }
    
            

	async function saveTranscript(message){
        
        var ChannelNames = message.channel.name;
        var authorNameId;
        var messageNumberCount;

	        let messageCollection = new Discord.Collection();
        let channelMessages = await message.channel.fetchMessages({
            limit: 100
        }).catch(err => console.log(err));

        messageNumberCount = channelMessages.size;

        messageCollection = messageCollection.concat(channelMessages);

        while(channelMessages.size === 100){
            let lastMessageId = channelMessages.lastKey();
            channelMessages = await message.channel.fetchMessages({ limit: 100, before: lastMessageId }).catch(err => console.log(err));
            if(channelMessages)
                messageCollection = messageCollection.concat(channelMessages);
        }

        let msgs = messageCollection.array().reverse();
        let data = await fs.readFile('./template.html', 'utf8').catch(err => console.log(err));
        if(data){
            await fs.writeFile('index.html', data).catch(err => console.log(err));
            let guildElement = document.createElement('div');
            let guildText = document.createTextNode(message.guild.name);
            let guildImg = document.createElement('img');
            guildImg.setAttribute('src', message.guild.iconURL);
            guildImg.setAttribute('width', '150');
            guildElement.appendChild(guildImg);
            guildElement.appendChild(guildText);
            console.log(guildElement.outerHTML);
            await fs.appendFile('index.html', guildElement.outerHTML).catch(err => console.log(err));

            var count = 0;

            msgs.forEach(async msg => {
                let parentContainer = document.createElement("div");
                parentContainer.className = "parent-container";

                let avatarDiv = document.createElement("div");
                avatarDiv.className = "avatar-container";

                let img = document.createElement('img');
                img.setAttribute('src', msg.author.displayAvatarURL);
                img.className = "avatar";

                avatarDiv.appendChild(img);

                parentContainer.appendChild(avatarDiv);

                let messageContainer = document.createElement('div');
                messageContainer.className = "message-container";

                let nameElement = document.createElement("span");
                let name = document.createTextNode(msg.author.tag + " " + msg.createdAt.toDateString() + " " + msg.createdAt.toLocaleTimeString() + " EST");
                nameElement.appendChild(name);
                messageContainer.append(nameElement);

                if(msg.content.startsWith("```")){
                    let m = msg.content.replace(/```/g, "");
                    let codeNode = document.createElement("code");
                    let textNode = document.createTextNode(m);
                    codeNode.appendChild(textNode);
                    messageContainer.appendChild(codeNode);
                }
                else{
                    let msgNode = document.createElement('span');
                    let textNode = document.createTextNode(msg.content);
                    msgNode.append(textNode);
                    messageContainer.appendChild(msgNode);
                    if(count == 0){
                        authorNameId = msg.content
                        count ++;
                    }
                }

                parentContainer.appendChild(messageContainer);
                await fs.appendFile('index.html', parentContainer.outerHTML).catch(err => console.log(err));

                
            });
        }
        //message.channel.send ( {files: ["./index.html"]} )
        var embed = new Discord.RichEmbed()
	     
            embed.setTitle("Sauvegarde")
            embed.setDescription(`sauvegarde du ticket`)
            embed.addField("Ticket fermé par ", `${message.author}`, true)
            embed.addField("Nom du Ticket ", `${ChannelNames}`, true)
            embed.addField("Ticket créer par ", `${authorNameId}`, true)
            embed.addField("Nombre de message ", `${messageNumberCount}`, true)

            var maMap = [];
            var tcxt = "";

        msgs.forEach(async msg => {
            //client.channels.get("707197819789770793").send(`${msg.author}`)
            
            var checker = false;
            

            for (var i = 0; i < maMap.length; i++) {
                if(maMap[i] == msg.author){
                    checker = true;
                }
            }
           
            if(checker == false){
                maMap.push(msg.author)
                tcxt += maMap[i] + "\n";
            }

        });

            embed.addField("contribuer", `${tcxt}`, true)
            embed.setColor("0xFFBF00")
            embed.setFooter("")
            client.channels.get("707197819789770793").sendEmbed(embed);
        client.channels.get("707197819789770793").send( {files: ["./index.html"]} )

        }

        if (message.content.startsWith(CMDPlay)) {
      
            // message.delete (1000)
           var str = message.content.substring(CMDPlay.length)

           if(!message.member.voiceChannel)
           return message.channel.send("Connectez vous à un salon vocal!");
          if(message.guild.me.voiceChannel)
           return message.channel.send("Le bot est déjà connecter à un salon!");
          if(!str[0])
           return message.channel.send('Merci de préciser votre URL');
      
          const validate = await ytdl.validateURL(str[0]);
          if (!validate) return message.channel.send("Désolé, l'URL n'est pas valide!");
      
          const info = await ytdl.getInfo(str[0]);
          const connection = await message.member.voiceChannel.join();
          const dispatcher = await connection.playStream(
              ytdl(str[0], { filter: 'audioonly'})
          );
          message.channel.send(`Musique ajoutée : ${info.title}`);

        }
	
});


