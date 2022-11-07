//startup
const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "gk~";
const fs = require("fs");
var util = require('util');
var guildkickchannel
var guildbanchannel
var guildverifychannel

//Logging
var log_file = fs.createWriteStream(__dirname + '/Logs/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
  };

   
//Jsons
const config = require("./Jsons/config.json");

//vars


//liseners
process.setMaxListeners(300);
bot.setMaxListeners(300);

//login
bot.login(config.token);

//Ready Function
bot.on('ready', () => {
bot.user.setActivity(`Starting up... please wait`);
console.log('Starting up... please wait');
bot.user.setStatus("online");
console.log("   _____       _       _  __                         ")
console.log("  / ____|     | |     | |/ /                         ")
console.log(" | |  __  __ _| |_ ___| ' / ___  ___ _ __   ___ _ __ ")
console.log(" | | |_ |/ _` | __/ _ \  < / _ \/ _ \ '_ \ / _ \ '__|")
console.log(" | |__| | (_| | ||  __/ . \  __/  __/ |_) |  __/ |   ")
console.log("  \_____|\__,_|\__\___|_|\_\___|\___| .__/ \___|_|   ")
console.log("                                    | |              ")
console.log("                                    |_|              ")

console.log('launched');
bot.user.setActivity(`${prefix}help | Guarding ${bot.guilds.cache.size} servers!`);
});

bot.use

//Message Function
bot.on('message', async (message) => {
if(message.guild === null) return;
if(message.author.bot) return;
if(message.author == null){
    return;
}

//Json Parsing
let greeters = JSON.parse(fs.readFileSync("./Jsons/guildgreeter.json", "utf8"));
let gatekeepers = JSON.parse(fs.readFileSync("./Jsons/guildgatekeepers.json", "utf8"));
let guildmembers = JSON.parse(fs.readFileSync("./Jsons/guildmembers.json", "utf8"));
let joinroles = JSON.parse(fs.readFileSync("./Jsons/joinroles.json", "utf8"));
let joinroletoggles = JSON.parse(fs.readFileSync("./Jsons/joinroletoggle.json", "utf8"));
let lockdowns = JSON.parse(fs.readFileSync("./Jsons/Lockdowns.json", "utf8"));
let invitetoggles = JSON.parse(fs.readFileSync("./Jsons/invitetoggle.json", "utf8"));
let verifytoggles = JSON.parse(fs.readFileSync("./Jsons/verifytoggle.json", "utf8"));
let banloggingtoggles = JSON.parse(fs.readFileSync("./Jsons/banchannelactive.json", 'utf8'));
let kickloggingtoggles = JSON.parse(fs.readFileSync('./Jsons/kickchannelactive.json', 'utf8'));
let banloggingchannels = JSON.parse(fs.readFileSync("./Jsons/banchannel.json", 'utf8'));
let kickloggingchannels = JSON.parse(fs.readFileSync('./Jsons/kickchannel.json', 'utf8'));
let verifyloggingtoggles = JSON.parse(fs.readFileSync("./Jsons/verifychannelactive.json", 'utf8'));
let verifyloggingchannels = JSON.parse(fs.readFileSync('./Jsons/verifychannel.json', 'utf8'));

if(!verifyloggingtoggles[message.guild.id]){
    verifyloggingtoggles[message.guild.id] = {
        verifyloggingtoggles: false
    }
}

if(!verifyloggingchannels[message.guild.id]){
    verifyloggingchannels[message.guild.id] = {
        verifyloggingchannels: "No Channel Set"
    }
}

if(!banloggingtoggles[message.guild.id]){
    banloggingtoggles[message.guild.id] = {
        banloggingtoggles: false
    }
}

if(!kickloggingtoggles[message.guild.id]){
    kickloggingtoggles[message.guild.id] = {
        kickloggingtoggles: false
    }
}

if(!banloggingchannels[message.guild.id]){
    banloggingchannels[message.guild.id] = {
        banloggingchannels: "No Channel Set"
    }
}

if(!kickloggingchannels[message.guild.id]){
    kickloggingchannels[message.guild.id] = {
        kickloggingchannels: "No Channel Set"
    }
}

if(!greeters[message.guild.id]){
    greeters[message.guild.id] = {
        greeters: ""
    }
}

if(!gatekeepers[message.guild.id]){
    gatekeepers[message.guild.id] = {
        gatekeepers: ""
    }
}

if(!guildmembers[message.guild.id]){
    guildmembers[message.guild.id] = {
        guildmembers: ""
    }
}

if(!joinroles[message.guild.id]){
    joinroles[message.guild.id] = {
        joinroles: ""
    }
}

if(!joinroletoggles[message.guild.id]){
    joinroletoggles[message.guild.id] = {
        joinroletoggles: false
    }
}

if(!lockdowns[message.guild.id]){
    lockdowns[message.guild.id] = {
        lockdowns: false
    }
}

if(!invitetoggles[message.guild.id]){
    invitetoggles[message.guild.id] = {
        invitetoggles: false
    }
}

if(!verifytoggles[message.guild.id]){
    verifytoggles[message.guild.id] = {
        verifytoggles: false
    }
}


let greeterrole = greeters[message.guild.id].greeters
let gatekeeperrole = gatekeepers[message.guild.id].gatekeepers
let guildmemberrole = guildmembers[message.guild.id].guildmembers
let memberjoinrole = joinroles[message.guild.id].joinroles
let guildlockdown = lockdowns[message.guild.id].lockdowns
let guildverifytoggle = verifytoggles[message.guild.id].verifytoggles
let guildinvitetoggle = invitetoggles[message.guild.id].invitetoggles

let guildkickloggingtoggle = kickloggingtoggles[message.guild.id].kickloggingtoggles
let guildbanloggingtoggle = banloggingtoggles[message.guild.id].banloggingtoggles
let guildkickloggingChannel = kickloggingchannels[message.guild.id].kickloggingchannels
let guildbanloggingChannel = banloggingchannels[message.guild.id].banloggingchannels
let guildverifyloggingtoggle = verifyloggingtoggles[message.guild.id].verifyloggingtoggles
let guildverifyloggingChannel = verifyloggingchannels[message.guild.id].verifyloggingchannels

//Args
const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);

//commands


    //Help Commands:
    if(message.content==`${prefix}help`){
        let helpmenu = new Discord.MessageEmbed()
        .setTitle("**GateKeeper Command List**")
        .setColor("#FF69B4")
        .setDescription(`:door: **Gatekeeping** \n ${prefix}help gatekeeping \n\n :tools: **Moderation** \n ${prefix}help moderation \n\n :closed_lock_with_key: **Lockdown** \n ${prefix}help lockdown \n\n :wrench: **Utility** \n ${prefix}help utility \n\n :scroll: **Logging** \n ${prefix}help logging`)
        message.channel.send(helpmenu)
        //\n\n :small_red_triangle: Hey You! Come join the new offical GateKeeper support server! :small_red_triangle_down:  \n [Click Here to join!](https://discord.gg/HnykDHB6ex)
    }
    if(message.content==`${prefix}help gatekeeping`){
        let helpmenugatekeeping = new Discord.MessageEmbed()
        .setTitle("**Gatekeeping Commands**")
        .setColor("#FF69B4")
        .setDescription(`:hammer: **${prefix}setup**: Sets up the gatekeeping function \n\n :white_check_mark: **${prefix}verify** [@someone]: verifys said user \n\n`)
        .setFooter("[something] = required | (something) = optional ")
        message.channel.send(helpmenugatekeeping)
    }
    if(message.content==`${prefix}help moderation`){
        let helpmenumoderation = new Discord.MessageEmbed()
        .setTitle("**Moderation Commands**")
        .setColor("#FF69B4")
        .setDescription(`:hammer: **${prefix}ban** [@someone]: bans said user \n\n :boot: **${prefix}kick** [@someone]: kicks said user \n\n :anger: **${prefix}clear [1-100]**: Clears said number of messages \n\n`)
        .setFooter("[something] = required | (something) = optional ")
        message.channel.send(helpmenumoderation)
    }
    if(message.content==`${prefix}help lockdown`){
        let helpmenulockdown = new Discord.MessageEmbed()
        .setTitle("*Lockdown Commands**")
        .setColor("#FF69B4")
        .setDescription(`:closed_lock_with_key: **${prefix}lockdown**: Puts said server in lockdown mode \n\n :flags: **${prefix}lockdownflags**: Shows the flags that you can configure for lockdown`)
        .setFooter("[something] = required | (something) = optional ")
        message.channel.send(helpmenulockdown)
    }
    if(message.content==`${prefix}help utility`){
        let helpmenuutility = new Discord.MessageEmbed()
        .setTitle("**Utility Commands**")
        .setColor("#FF69B4")
        .setDescription(`:ping_pong: **${prefix}ping**: Tells the bots ping \n\n :information_source: **${prefix}info**: Shows the bots info \n\n :arrow_right: **${prefix}joinrole**: sets up the join role`)
        .setFooter("[something] = required | (something) = optional ")
        message.channel.send(helpmenuutility)
        //\n\n :exclamation: **${prefix}support**: Invite for the offical support server \n\n
    }

    if(message.content==`${prefix}help logging`){
        let helpmenulogging = new Discord.MessageEmbed()
        .setTitle("**Logging Commands**")
        .setColor("#FF69B4")
        .setDescription(`:scroll: ${prefix}logging`)
        .setFooter("[something] = required | (something) = optional ")
        message.channel.send(helpmenulogging)
    }




//admin

//Clear Command
if(message.content.startsWith(prefix+"clear")){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You dont have sufficient permissions to do this!")
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("I dont have sufficient permissions to do this!")
    NumOfMsg = args[1];
    if(!NumOfMsg) return message.reply("You need to put a number after the command!").then(m => m.delete({timeout: 5000}))
    if(isNaN(NumOfMsg)) return message.reply("You can only put a number after the command!").then(m => m.delete({timeout: 5000}))
    if(NumOfMsg>=100) return message.reply("You can only delete less than **100** messages!").then(m => m.delete({timeout: 5000}))
    message.channel.bulkDelete(Number(NumOfMsg) + 1, true).catch(() =>{
        NumOfMsg = args[1];
        message.channel.send(`Unseccessful Deletion of ${NumOfMsg} messages | Error: Unkown Message`).then(m => m.delete({timeout: 10000}))
        return
    });
    message.channel.send(`Successfully deleted **${NumOfMsg}** messages!`).then(m => m.delete({timeout: 5000})).catch(console.log)
}

//Setup Command
if(message.content.toLocaleLowerCase()==prefix+"setup"){
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("You dont have sufficient permissions to do this!")
        let SetupGreeter = new Discord.MessageEmbed()
            .setTitle(`**Gatekeeping Setup: Greeter**`)
            .setColor("#FF69B4")
            .setDescription(`Please type the exact name of the role you want to be greeter...\n**This role is required to be able to use the verify command**`)
            .setFooter("You have 1 minute to respond")
            message.channel.send(SetupGreeter)       
        message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 60000}).then(collected =>{
        if(!message.guild.roles.cache.find(role => role.name === collected.first().content)) return message.channel.send(`I'm sorry, I cannot find a role named **${collected.first().content}**, make sure you have a role named **${collected.first().content}** or thats its spelled correctly and try again!`)
        let greeternew = message.guild.roles.cache.find(role => role.name === collected.first().content);
        let greeternewid = greeternew.id;
        greeters[message.guild.id] = {
            greeters: greeternewid
        };
        fs.writeFile("./Jsons/guildgreeter.json", JSON.stringify(greeters), (err) => {
             if (err) console.log(err)
        });
        let SetupMember = new Discord.MessageEmbed()
        .setTitle(`**Gatekeeping Setup: Greeter**`)
        .setColor("#FF69B4")
        .setDescription(`Great! The greeter role is now set too ${greeternew} \n\n  Now please type the exact name of your member role..`)
        .setFooter("You have 1 minute to respond")
        message.channel.send(SetupMember)      
        message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 60000}).then(collected => {
            if(!message.guild.roles.cache.find(role => role.name === collected.first().content)) return message.channel.send(`I'm sorry, I cannot find a role named **${collected.first().content}**, make sure you have a role named **${collected.first().content}** or thats its spelled correctly and try again!`)    
            let guildmembernew = message.guild.roles.cache.find(role => role.name === collected.first().content);
                 let guildmembernewid = guildmembernew.id;
                guildmembers[message.guild.id] = {
                     guildmembers: guildmembernewid
                };
                fs.writeFile("./Jsons/guildmembers.json", JSON.stringify(guildmembers), (err) => {
                    if (err) console.log(err)
                });
                let SetupMember = new Discord.MessageEmbed()
                .setTitle(`**Gatekeeping Setup: Complete**`)
                .setColor("#FF69B4")
                .setDescription(`Awesome! The member role is now set too ${guildmembernew}! \n\n The setup is now done! Use **gk~verify** to verify your users!`)
                .setFooter("You have 1 minute to respond")
                message.channel.send(SetupMember)                                
        });                             
    });      
}

//Verify Command
if(message.content.startsWith(prefix+"verify")){
    if(guildlockdown==true){
        if(guildverifytoggle==true){
            return message.reply("Cannot do this, this server is in lockdown!")
        }
    } 
    if(!message.guild.me.hasPermission(("MANAGE_ROLES"))) return message.reply("I dont have sufficient permissions to do this!")
    if(!greeterrole) return message.channel.send(`You have not setup the greeter role! Do that now with **${prefix}setup**`)
    if(!guildmemberrole)  return message.channel.send(`You have not setup the member role! Do that now with **${prefix}setup**`)
    if(!message.member.roles.cache.has(greeterrole)) return message.channel.send("You dont have sufficient permissions to do this! You need the Greeter role!")
    if(!message.mentions.users.first()) return message.channel.send("Please spectify a user!")
    let verifyuser = message.guild.member(message.mentions.users.first());
    if(verifyuser.roles.cache.has(guildmemberrole)) return message.reply("They have already been verified!")
    verifyuser.roles.add(guildmemberrole).catch(console.error)
    if(guildverifyloggingtoggle==true){
        var currentDateAndTime = new Date().toLocaleString();
        let verifymodchannel = bot.channels.cache.get(guildverifyloggingChannel)
        let verifylog = new Discord.MessageEmbed()
            .setTitle(`**Verification Log**`)
            .setColor('#00FF00')
            .setDescription(`**Verifed User:** \n ${verifyuser} \n\n **Verifier:** \n ${message.author}`)
            .setFooter(currentDateAndTime)
        verifymodchannel.send(verifylog);             
    }
    message.reply("They have now been verified!")
    
}

//Ban Command
if(message.content.toLowerCase().startsWith(prefix+"ban")){
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply ("You dont have sufficient permissions to do this!");
    if(!message.guild.me.hasPermission(("BAN_MEMBERS"))) return message.reply("I dont have sufficient permissions to do this!")
    let bUser = message.mentions.users.first()
    if(!bUser) return message.reply("Cant find user");
    let name = message.guild.member(bUser).displayName
    let bReason = args.join(" ").slice(27);
    if(message.guild.member(bUser).hasPermission("BAN_MEMBERS")) return message.reply("that person cannot be banned!")
    message.guild.member(bUser).ban(bReason);
    message.reply("Banned: " + name + " Reason: " + bReason);
}

//Kick Command
if(message.content.toLowerCase().startsWith(prefix+"kick")){
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply ("You dont have sufficient permissions to do this!");
    if(!message.guild.me.hasPermission(("KICK_MEMBERS"))) return message.reply("I dont have sufficient permissions to do this!")
    let kUser = message.mentions.users.first()
    if(!kUser) return message.reply("Cant find user");
    let name = message.guild.member(kUser).displayName
    let kReason = args.join(" ").slice(28);
    if(message.guild.member(kUser).hasPermission("KICK_MEMBERS")) return message.reply("that person cannot be kicked!")
    message.guild.member(kUser).kick(kReason);
    message.reply("Kicked: " + name + " Reason: " + kReason)              
}

//Join Role Command
if(message.content.toLowerCase()==prefix+"joinrole"){
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("You dont have sufficient permissions to do this!")
    let JoinRoleWizard = new Discord.MessageEmbed()
        .setTitle(`**Join Role Wizard: Setup**`)
        .setColor("#FF69B4")
        .setDescription(`Welcome to the user join role wizard! \n\n Please reply to this message with either "**on**" or "**off**" to turn on/off the join role, or "**setup**" to setup the join role!`)
        .setFooter("You have 1 minute to respond")
    message.channel.send(JoinRoleWizard) 
    message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 60000}).then(collected =>{
        if(collected.first().content.toLowerCase()=="on"){
            if(!memberjoinrole) return message.reply("You have to setup the join role first!")
            joinroletoggles[message.guild.id] = {
                joinroletoggles: true
            };
            fs.writeFile("./Jsons/joinroletoggle.json", JSON.stringify(joinroletoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The join role has now been activated!")              
        }
        if(collected.first().content.toLowerCase()=="off"){
            if(!memberjoinrole) return message.reply("You have to setup the join role first!")
            joinroletoggles[message.guild.id] = {
                joinroletoggles: false
            };
            fs.writeFile("./Jsons/joinroletoggle.json", JSON.stringify(joinroletoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The join role has now been disabled!")                
        }
        if(collected.first().content.toLowerCase()=="setup"){
            let JoinRoleSetupWizard = new Discord.MessageEmbed()
                .setTitle(`**Join Role Wizard: Setup**`)
                .setColor("#FF69B4")
                .setDescription(`Welcome to the user join role setup wizard! \n\n Please reply to this message with the exact name of the role you want people to get when they join..`)
                .setFooter("You have 1 minute to respond")
            message.channel.send(JoinRoleSetupWizard) 
            message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 60000}).then(collected =>{
                if(!message.guild.roles.cache.find(role => role.name === collected.first().content)) return message.channel.send(`I'm sorry, I cannot find a role named **${collected.first().content}**, make sure you have a role named **${collected.first().content}** or thats its spelled correctly and try again! Operation Canceled`)
                let joinrolenew = message.guild.roles.cache.find(role => role.name === collected.first().content);
                let joinroleid = joinrolenew.id;
                joinroles[message.guild.id] = {
                    joinroles: joinroleid
                };
                fs.writeFile("./Jsons/joinroles.json", JSON.stringify(joinroles), (err) => {
                    if (err) console.log(err)
                });
                joinroletoggles[message.guild.id] = {
                    joinroletoggles: true
                };
                fs.writeFile("./Jsons/joinroletoggle.json", JSON.stringify(joinroletoggles), (err) => {
                    if (err) console.log(err)
                });
                message.channel.send(`The join role is now set to **${joinrolenew.name}** and the join role function is now automaticly turned on!`)

            })
        }

    }).catch(() =>{
        return message.reply("No response, canceling")
    })

}



//Logging
if(message.content.startsWith(prefix+"logging")){
    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply("You dont have sufficient permissions to do this!");
    if(message.content==prefix+"logging"){
        if(guildkickloggingChannel=="No Channel Set"){
            guildkickchannel = "No Channel Set"
        }else{
                let channelname = bot.channels.cache.get(guildkickloggingChannel)
                guildkickchannel = channelname
        }
        if(guildbanloggingChannel=="No Channel Set"){
            guildbanchannel = "No Channel Set"
        }else{
                let channelname = bot.channels.cache.get(guildbanloggingChannel)
                guildbanchannel = channelname
        }
        if(guildverifyloggingChannel=="No Channel Set"){
            guildverifychannel = "No Channel Set"
        }else{
                let channelname = bot.channels.cache.get(guildverifyloggingChannel)
                guildverifychannel = channelname
        }
        let flags = new Discord.MessageEmbed()
            .setColor("#8B008B")
            .setTitle(`Logging:`)
            .setDescription(`Kick Logging: **${guildkickloggingtoggle}** \n Channel: **${guildkickchannel}** \n\n Ban Logging: **${guildbanloggingtoggle}** \n Channel: **${guildbanchannel}** \n\n Verification Logging: **${guildverifyloggingtoggle}** \n Channel: **${guildverifychannel}** \n`)
            .setFooter(`To turn on/off logging do ${prefix}logging kick/ban/verify -t/f \n To set the logging channel do ${prefix}logging kick/ban/verify #channel`)
             message.channel.send(flags);
    }
    if(message.content.toLowerCase().startsWith(prefix+"logging kick")){
        if(args[2]=="-t"){
            if(guildkickloggingChannel=="No Channel Set") return message.channel.send("Please set a channel to log first!")
            kickloggingtoggles[message.guild.id] = {
                kickloggingtoggles: true
            };
            fs.writeFile("./Jsons/kickchannelactive.json", JSON.stringify(kickloggingtoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The logging for kicking is now activated!")
        } 
        if(args[2]=="-f"){
            if(guildkickloggingChannel=="No Channel Set") return message.channel.send("Please set a channel to log first!")
            kickloggingtoggles[message.guild.id] = {
                kickloggingtoggles: false
            };
            fs.writeFile("./Jsons/kickchannelactive.json", JSON.stringify(kickloggingtoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The logging for kicking is now deactivated!")
        }
        if(args[2].startsWith(message.mentions.channels.first())){
            let channelid = message.mentions.channels.first().id;
            kickloggingchannels[message.guild.id] = {
                kickloggingchannels: channelid
            };
            fs.writeFile("./Jsons/kickchannel.json", JSON.stringify(kickloggingchannels), (err) => {
                if (err) console.log(err)
            });
            message.channel.send(`The logging channel for kicking is now set to **${message.mentions.channels.first()}**`)
        }
    }
    if(message.content.toLowerCase().startsWith(prefix+"logging ban")){
        if(args[2]=="-t"){
            if(guildbanloggingChannel=="No Channel Set") return message.channel.send("Please set a channel to log first!")
            banloggingtoggles[message.guild.id] = {
                banloggingtoggles: true
            };
            fs.writeFile("./Jsons/banchannelactive.json", JSON.stringify(banloggingtoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The logging for banning is now activated!")
        } 
        if(args[2]=="-f"){
            if(guildbanloggingChannel=="No Channel Set") return message.channel.send("Please set a channel to log first!")
            banloggingtoggles[message.guild.id] = {
                banloggingtoggles: false
            };
            fs.writeFile("./Jsons/banchannelactive.json", JSON.stringify(banloggingtoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The logging for banning is now deactivated!")
        }
        if(args[2].startsWith(message.mentions.channels.first())){
            let channelid = message.mentions.channels.first().id;
            banloggingchannels[message.guild.id] = {
                banloggingchannels: channelid
            };
            fs.writeFile("./Jsons/banchannel.json", JSON.stringify(banloggingchannels), (err) => {
                if (err) console.log(err)
            });
            message.channel.send(`The logging channel for banning is now set to **${message.mentions.channels.first()}**`)
        }
    }
    if(message.content.toLowerCase().startsWith(prefix+"logging verify")){
        if(args[2]=="-t"){
            if(guildverifyloggingChannel=="No Channel Set") return message.channel.send("Please set a channel to log first!")
            verifyloggingtoggles[message.guild.id] = {
                verifyloggingtoggles: true
            };
            fs.writeFile("./Jsons/verifychannelactive.json", JSON.stringify(verifyloggingtoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The logging for verfication is now activated!")
        } 
        if(args[2]=="-f"){
            if(guildverifyloggingChannel=="No Channel Set") return message.channel.send("Please set a channel to log first!")
            verifyloggingtoggles[message.guild.id] = {
                verifyloggingtoggles: false
            };
            fs.writeFile("./Jsons/verifychannelactive.json", JSON.stringify(verifyloggingtoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The logging for verification is now deactivated!")
        }
        if(args[2].startsWith(message.mentions.channels.first())){
            let channelid = message.mentions.channels.first().id;
            verifyloggingchannels[message.guild.id] = {
                verifyloggingchannels: channelid
            };
            fs.writeFile("./Jsons/verifychannel.json", JSON.stringify(verifyloggingchannels), (err) => {
                if (err) console.log(err)
            });
            message.channel.send(`The logging channel for verification is now set to **${message.mentions.channels.first()}**`)
        }
    }
}

//Lockdown
if(message.content==prefix+"lockdown"){
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("You dont have sufficient permissions to do this!")
    let LockdownWizard = new Discord.MessageEmbed()
        .setTitle(`**Lockdown Wizard: Enable/Disable**`)
        .setColor("#FF69B4")
        .setDescription(`Welcome to the lockdown wizard! \n\n Please reply to this message with either "**enable**" or "**disable**" to turn on/off the lockdown!`)
        .setFooter("You have 1 minute to respond")
    message.channel.send(LockdownWizard)    
    message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 60000}).then(collected =>{
        if(collected.first().content=="enable"){
            lockdowns[message.guild.id] = {
                lockdowns: true
            };
            fs.writeFile("./Jsons/Lockdowns.json", JSON.stringify(lockdowns), (err) => {
                if (err) console.log(err)
            });
            message.channel.send(`Now putting the server into lockdown! Use **${prefix}lockdownflags** to configure!`)       
        }
        if(collected.first().content=="disable"){
            lockdowns[message.guild.id] = {
                lockdowns: false
            };
            fs.writeFile("./Jsons/Lockdowns.json", JSON.stringify(lockdowns), (err) => {
                if (err) console.log(err)
            });
            invitetoggles[message.guild.id] = {
                invitetoggles: false
            };
            fs.writeFile("./Jsons/invitetoggle.json", JSON.stringify(invitetoggles), (err) => {
                if (err) console.log(err)
            });
            verifytoggles[message.guild.id] = {
                verifytoggles: false
            };
            fs.writeFile("./Jsons/verifytoggle.json", JSON.stringify(verifytoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("Now taking the server out of lockdown!")
        }
    }).catch(() =>{
        return message.reply("No response, canceling")
    });
}
//LockDownFlags
if(message.content.startsWith(prefix+"lockdownflags")){
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You dont have sufficient permissions to do this!")
    if(guildlockdown==false) return message.channel.send("This server is not in lockdown!")
    if(message.content==prefix+"lockdownflags"){
        let flags = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle(`Flags for lockdown:`)
            .setDescription(`VerifyLock: **${guildverifytoggle}** \n Locks the verification command \n\n InviteLock: **${guildinvitetoggle}** \n Stops new invites from being created`)
            .setFooter(`To turn on/off a flag do ${prefix}lockdownflags FLAG -t/f`)
             message.channel.send(flags);
    }
    if(message.content.toLowerCase().startsWith(prefix+"lockdownflags invitelock")){
        if(args[2]=="-f"){
            invitetoggles[message.guild.id] = {
                invitetoggles: false
            };
            fs.writeFile("./Jsons/invitetoggle.json", JSON.stringify(invitetoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The invite lock flag is now deactivated!")   
        }
        if(args[2]=="-t"){
            invitetoggles[message.guild.id] = {
                invitetoggles: true
            };
            fs.writeFile("./Jsons/invitetoggle.json", JSON.stringify(invitetoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The invite lock flag is now Activated")   
        }
    }

    if(message.content.toLowerCase().startsWith(prefix+"lockdownflags verifylock")){
        if(args[2]=="-f"){
            verifytoggles[message.guild.id] = {
                verifytoggles: false
            };
            fs.writeFile("./Jsons/verifytoggle.json", JSON.stringify(verifytoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The verify lock flag is now deactivated!")   
        }
        if(args[2]=="-t"){
            verifytoggles[message.guild.id] = {
                verifytoggles: true
            };
            fs.writeFile("./Jsons/verifytoggle.json", JSON.stringify(verifytoggles), (err) => {
                if (err) console.log(err)
            });
            message.channel.send("The verify lock flag is now activated!")   
        }
    }
}


//fun
if(message.content==prefix+"ping"){
    const m = await message.channel.send("Ping?");
    m.edit(`:ping_pong: Pong! | Latency is ${m.createdTimestamp - message.createdTimestamp}ms | API latency is ${bot.ws.ping}ms`);
}

//Misc
if(message.content==prefix+"info"){
    let infoemb = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle(" **Info:**")
    .setDescription(`Prefix: **${prefix}** \n Servers: **${bot.guilds.cache.size}** \n Ping: **${bot.ws.ping}ms** \n Date Created: **10/16/2021** \n Last Updated: **10/16/2021** \n Author: **Thermionic#9046** `)
    message.channel.send(infoemb)
    //\n Support Server: [Click Here to Join](https://discord.gg/HnykDHB6ex)
}

//if(message.content==prefix+"support"){
    //let supportemb = new Discord.MessageEmbed()
    //.setColor("#00FFFF")
    //.setTitle("**Offical Support Server!**")
    //.setDescription(`Want to join the GateKeeper community? \n Report a bug? \n Or help on the devopment of GateKeeper? \n\n [Then click here to join the offical GateKeeper Discord server!](https://discord.gg/HnykDHB6ex)`)
   // message.channel.send(supportemb)
//}

});




//Member Join Function
bot.on('guildMemberAdd', (member) => {
const guild = member.guild;
let joinroles = JSON.parse(fs.readFileSync("./Jsons/joinroles.json", "utf8"));
let joinroletoggles = JSON.parse(fs.readFileSync("./Jsons/joinroletoggle.json", "utf8"));

if(!joinroles[guild.id]){
    joinroles[guild.id] = {
        joinroles: ""
    }
}

if(!joinroletoggles[guild.id]){
    joinroletoggles[guild.id] = {
        joinroletoggles: false
    }
}

let memberjoinrole = joinroles[guild.id].joinroles
let memberjoinroletoggle = joinroletoggles[guild.id].joinroletoggles
//var amouuntofjoins;

//amouuntofjoins = amouuntofjoins + Number(1);

//if(amouuntofjoins==3){
  //  amouuntofjoins == 0
    //raid mode on
//}

//setTimeout(() => {
    //amouuntofjoins = 0;
//}, 5 * 1000)


if(memberjoinroletoggle==true){
    if(!memberjoinrole) return
    let newjoinrole = memberjoinrole;
    if(member.roles.cache.has(newjoinrole)) return
    member.roles.add(newjoinrole).catch(console.error);
}else{
    return
}


});

//Invite Create
bot.on('inviteCreate', (invite) => {
let invitetoggles = JSON.parse(fs.readFileSync("./Jsons/invitetoggle.json", "utf8"));
let lockdowns = JSON.parse(fs.readFileSync("./Jsons/Lockdowns.json", "utf8"));

let guild = invite.guild;

if(!lockdowns[guild.id]){
    lockdowns[guild.id] = {
        lockdowns: false
    }
}

if(!invitetoggles[guild.id]){
    invitetoggles[guild.id] = {
        invitetoggles: false
    }
}

let guildinvitetoggle = invitetoggles[guild.id].invitetoggles
let guildlockdown = lockdowns[guild.id].lockdowns

    if(guildlockdown==true){
        if(guildinvitetoggle==true){
            invite.delete();
        }
    }else{
        return
    }   
});

//Member Kicked Function
bot.on('guildMemberRemove', async member => {
    let kickloggingtoggles = JSON.parse(fs.readFileSync('./Jsons/kickchannelactive.json', 'utf8'));
    let kickloggingchannels = JSON.parse(fs.readFileSync('./Jsons/kickchannel.json', 'utf8'));
    if(!kickloggingtoggles[member.guild.id]){
        kickloggingtoggles[member.guild.id] = {
            kickloggingtoggles: false
        }
    }
    if(!kickloggingchannels[member.guild.id]){
        kickloggingchannels[member.guild.id] = {
            kickloggingchannels: "No Channel Set"
        }
    }
    let guildkickloggingtoggle = kickloggingtoggles[member.guild.id].kickloggingtoggles
    let guildkickloggingChannel = kickloggingchannels[member.guild.id].kickloggingchannels
    
    if(guildkickloggingtoggle==true){
        const fetchedLogs = await member.guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_KICK',
        });
        const kickLog = fetchedLogs.entries.first();
        if (!kickLog) return
        const { executor, target } = kickLog;
        var kickreason = kickLog.reason
        if(kickreason==null){kickreason="Unspecified"}
        if (target.id === member.id) {
            //Kicked Was Fully Member(member.user.tag) Kicker(executor.tag)
            let kickemb = new Discord.MessageEmbed()
            .setColor("#FFA500")
            .setTitle(`[KICK] ${member.user.tag}`)
            .setDescription(`Target: **${member}** \n Executor: **${executor}** \n\n Reason: **${kickreason}**`)
             bot.channels.cache.get(guildkickloggingChannel).send(kickemb);
        } else {
            return
        }
    }
});

//Ban Member Function
bot.on('guildBanAdd', async (guild, user) => {
    let banloggingtoggles = JSON.parse(fs.readFileSync("./Jsons/banchannelactive.json", 'utf8'));
    let banloggingchannels = JSON.parse(fs.readFileSync("./Jsons/banchannel.json", 'utf8'));
    if(!banloggingtoggles[guild.id]){
        banloggingtoggles[guild.id] = {
             banloggingtoggles: false
        }
    }
    if(!banloggingchannels[guild.id]){
        banloggingchannels[guild.id] = {
            banloggingchannels: "No Channel Set"
        }
    }
    let guildbanloggingtoggle = banloggingtoggles[guild.id].banloggingtoggles
    let guildbanloggingChannel = banloggingchannels[guild.id].banloggingchannels
    if(guildbanloggingtoggle==true){
    	const fetchedLogs = await guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_BAN_ADD',
        });
        const banLog = fetchedLogs.entries.first();
        if (!banLog) return
        const { executor, target } = banLog;
        var banreason = banLog.reason
        if(!banreason){banreason="Unspecified"}
        if (target.id === user.id) {
            //Full User(user.tag) Executor(executor.tag)
            let banemb = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle(`[BAN] ${user.tag}`)
            .setDescription(`Target: **${user}** \n Executor: **${executor}** \n\n Reason: **${banreason}**`)
             bot.channels.cache.get(guildbanloggingChannel).send(banemb);
        } else {
            return
        }    
    }
});




//Guild Join Funcion
bot.on("guildCreate", guild => {
bot.user.setActivity(`${prefix}help | Guarding ${bot.guilds.cache.size} servers!`);              
});

//Guild Leave Function
bot.on("guildDelete", guild => {
bot.user.setActivity(`${prefix}help | Guarding ${bot.guilds.cache.size} servers!`);

//Data Deletion
let greeters = JSON.parse(fs.readFileSync("./Jsons/guildgreeter.json", "utf8"));
let gatekeepers = JSON.parse(fs.readFileSync("./Jsons/guildgatekeepers.json", "utf8"));
let guildmembers = JSON.parse(fs.readFileSync("./Jsons/guildmembers.json", "utf8"));
let joinroles = JSON.parse(fs.readFileSync("./Jsons/joinroles.json", "utf8"));
let joinroletoggles = JSON.parse(fs.readFileSync("./Jsons/joinroletoggle.json", "utf8"));
let lockdowns = JSON.parse(fs.readFileSync("./Jsons/Lockdowns.json", "utf8"));
let invitetoggles = JSON.parse(fs.readFileSync("./Jsons/invitetoggle.json", "utf8"));
let verifytoggles = JSON.parse(fs.readFileSync("./Jsons/verifytoggle.json", "utf8"));
let banloggingtoggles = JSON.parse(fs.readFileSync("./Jsons/banchannelactive.json", 'utf8'));
let kickloggingtoggles = JSON.parse(fs.readFileSync('./Jsons/kickchannelactive.json', 'utf8'));
let banloggingchannels = JSON.parse(fs.readFileSync("./Jsons/banchannel.json", 'utf8'));
let kickloggingchannels = JSON.parse(fs.readFileSync('./Jsons/kickchannel.json', 'utf8'));
let verifyloggingtoggles = JSON.parse(fs.readFileSync("./Jsons/verifychannelactive.json", 'utf8'));
let verifyloggingchannels = JSON.parse(fs.readFileSync('./Jsons/verifychannel.json', 'utf8'));

banloggingtoggles[guild.id] = {
    banloggingtoggles: false
}
kickloggingtoggles[guild.id] = {
    kickloggingtoggles: false
}
fs.writeFile("./Jsons/kickchannelactive.json", JSON.stringify(kickloggingtoggles), (err) => {
    if (err) console.log(err)
});
banloggingchannels[guild.id] = {
    banloggingchannels: "No Channel Set"
}
fs.writeFile("./Jsons/banchannelactive.json", JSON.stringify(banloggingtoggles), (err) => {
    if (err) console.log(err)
});
kickloggingchannels[guild.id] = {
    kickloggingchannels: "No Channel Set"
}
fs.writeFile("./Jsons/kickchannel.json", JSON.stringify(kickloggingchannels), (err) => {
    if (err) console.log(err)
});
greeters[guild.id] = {
    greeters: ""
}
fs.writeFile("./Jsons/guildgreeter.json", JSON.stringify(greeters), (err) => {
    if (err) console.log(err)
});
gatekeepers[guild.id] = {
    gatekeepers: ""
}
fs.writeFile("./Jsons/guildgatekeepers.json", JSON.stringify(gatekeepers), (err) => {
    if (err) console.log(err)
});
guildmembers[guild.id] = {
    guildmembers: ""
}
fs.writeFile("./Jsons/guildmembers.json", JSON.stringify(guildmembers), (err) => {
    if (err) console.log(err)
});
joinroles[guild.id] = {
    joinroles: ""
}
fs.writeFile("./Jsons/joinroles.json", JSON.stringify(joinroles), (err) => {
    if (err) console.log(err)
});
joinroletoggles[guild.id] = {
    joinroletoggles: false
}
fs.writeFile("./Jsons/joinroletoggle.json", JSON.stringify(joinroletoggles), (err) => {
    if (err) console.log(err)
});
lockdowns[guild.id] = {
    lockdowns: false
}
fs.writeFile("./Jsons/Lockdowns.json", JSON.stringify(lockdowns), (err) => {
    if (err) console.log(err)
});
invitetoggles[guild.id] = {
    invitetoggles: false
}
fs.writeFile("./Jsons/invitetoggle.json", JSON.stringify(invitetoggles), (err) => {
    if (err) console.log(err)
});
verifytoggles[guild.id] = {
    verifytoggles: false
}
fs.writeFile("./Jsons/verifytoggle.json", JSON.stringify(verifytoggles), (err) => {
    if (err) console.log(err)
})
verifyloggingtoggles[guild.id] = {
    verifyloggingtoggles: false
}
fs.writeFile("./Jsons/verifychannelactive.json", JSON.stringify(verifyloggingtoggles), (err) => {
    if (err) console.log(err)
})

verifyloggingchannels[guild.id] = {
    verifyloggingchannels: "No Channel Set"
}
fs.writeFile("./Jsons/verifychannel.json", JSON.stringify(verifyloggingchannels), (err) => {
    if (err) console.log(err)
})

});

//Error Logging Function
bot.on("warn", function (info) {
    console.log(`Warn: ${info}`);
});
bot.on("error", function (error) {
    console.error(
        `Error: ${error}`
    );
})
bot.on("debug", function (info) {
    console.log(`Debug: ${info}`);
});
bot.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});