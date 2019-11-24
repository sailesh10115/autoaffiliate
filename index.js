// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token 
// config.prefix contains the message prefix.
var PrefixDef = 'c!';


client.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the "ClientUser".
    client.user.setActivity(`Cryptic Tournaments | Prefix c!`, { type: 'WATCHING' });
});

client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`Cryptic Tournaments | Prefix c!`, { type: 'WATCHING' });
});

client.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Cryptic Tournaments | Prefix c!`, { type: 'WATCHING' });
});

client.on('guildMemberAdd', member => {
    // This Command Send Message When Someone Joins The Server
    const channel = member.guild.channels.find(channel => channel.name === "lounge");
    if (!channel) return;
    let membername = member.displayName
    let joineserverembed = new Discord.RichEmbed()
        .setTitle('\`\`\`Cryptic Tournaments Bot\`\`\`')
        .addField('Welcome To Cryptic Events', `${membername} ; Please Read Welcome To Cryptic And The Message Sent To You By Mee6`)
        .addField('Total Members', channel.guild.memberCount)
        .setColor("#15f153")
    channel.send(joineserverembed);
});

client.on('guildMemberRemove', member => {
    // This Command Send Message When Someone Leaves The Server
    const channel = member.guild.channels.find(channel => channel.name === "join-leave");
    if (!channel) return;
    let membername = member.displayName
    let leaveserverembed = new Discord.RichEmbed()
        .setTitle('\`\`\`Cryptic Tournaments Bot\`\`\`')
        .addField('Rip', `${membername}; Just Left The Server`)
        .addField('Total Members', channel.guild.memberCount)
        .setColor(0xEA3007)
    channel.send(leaveserverembed);
});

client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.

    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if (message.author.bot) return;

    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if (message.content.indexOf(config.prefix) !== 0) return;

    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Let's go with a few common example commands! Feel free to delete or change those.                                                                                                                                                                                                                                                        


    if (command === "say") {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o => { });
        // And we get the bot to say the thing: 
        message.channel.send(sayMessage);
    }

    if (command === "avatar") {
        message.reply(message.author.avatarURL)
    }

    if (command === "members") {
        let sicon = message.guild.iconURL
        let memberserverembed = new Discord.RichEmbed()
            .addField("Total Members", message.guild.memberCount)
            .addField("You Joined", message.member.joinedAt)
            .setColor("#15f153")
            .setThumbnail(sicon)

        message.channel.send(memberserverembed);
    }
});

client.login(config.token);