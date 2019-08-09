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
var PrefixDef = 'h!';

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`invite.gg/hectic | Prefix h!`, { type: 'WATCHING' });
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`invite.gg/hectic | Prefix h!`, { type: 'WATCHING' });
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`invite.gg/hectic | Prefix h!`, { type: 'WATCHING' });
});

client.on('guildMemberAdd', member => {
  // This Command Send Message When Someone Joins The Server
  const channel = member.guild.channels.find(channel => channel.name === "┇join-leave");
  if (!channel) return;
  let membername = member.displayName
  let joineserverembed = new Discord.RichEmbed()
      .setTitle('\`\`\`HecTic Team Bot\`\`\`')
      .addField('Welcome To HecTic Team', `${membername} ; Please Read The Rules And The Message Sent To You By Mee6`)
      .setColor("#15f153")
  channel.send(joineserverembed);   
});

client.on('guildMemberRemove', member => {
  // This Command Send Message When Someone Joins The Server
  const channel = member.guild.channels.find(channel => channel.name === "┇join-leave");
  if (!channel) return;
  let membername = member.displayName
  let leaveserverembed = new Discord.RichEmbed()
      .setTitle('\`\`\`HecTic Team Bot\`\`\`')
      .addField('Rip', `${membername}; Just Left The Server`)
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
  if (command === "tempmute") {
    
  }
  
  if (command === "serverinfo") {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
      .setDescription("Server Information")
      .setColor("#15f153")
      .setThumbnail(sicon)
      .addField("Server Name", message.guild.name)
      .addField("Created On", message.guild.createdAt)
      .addField("You Joined", message.member.joinedAt)
      .addField("Total Members", message.guild.memberCount)

    message.channel.send(serverembed);
  }

  if (command === "report") {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#15f153")
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "┇reports");
    if (!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o => { });
    reportschannel.send(reportEmbed);

  }

  if (command === "removerole") {
    if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send('You Do Not Have Perms')
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Couldn't find that user, yo.");
    let role = args.join(" ").slice(22);
    if (!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply("Couldn't find that role.");

    if (!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await (rMember.removeRole(gRole.id));

    try {
      await rMember.send(`RIP, you lost the ${gRole.name} role.`)
    } catch (e) {
      message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
    }
  }

  if (command === "addrole") {
    if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send('You Do Not Have Perms')
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Couldn't find that user, yo.");
    let role = args.join(" ").slice(22);
    if (!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply("Couldn't find that role.");

    if (!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await (rMember.addRole(gRole.id));

    try {
      await rMember.send(`RIP, you lost the ${gRole.name} role.`)
    } catch (e) {
      message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
    }
  }

  if (command === "tryout") {
    message.reply('Please Check The How To Join Team Channel!')
  }

  if (command === "help") {
    const embed = new Discord.RichEmbed()
      .setTitle('\`\`\`HecTic Team Bot\`\`\`')
      .addField('Prefix', 'h!')
      .addField('Moderation', 'Kick, Ban, Clear, Addrole, Removerole')
      .addField('Just 4 Fun', 'Avatar, Ping, Say, ServerInfo')
      .addField('Fortnite / Apex Servers Only', 'Tryout')
      .addField('If Someone Has Been Bad, Report Them', 'Report')
      .addField('Version', '1.0.0.1')
      .addField('Current Server', message.guild.name)
      .setColor(0xEA3007)
    message.channel.sendEmbed(embed);
  }

  if (command === "avatar") {
    message.reply(message.author.avatarURL)
  }

  if (command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  if (command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => { });
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

  if (command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You Do Not Have Perms')
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason provided";

    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }

  if (command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You Do Not Have Perms')

    let member = message.mentions.members.first();
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason provided";

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }

  if (command === "clear") {
    // This command removes all messages from all users in the channel, up to 100.
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You Do Not Have Perms')
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
  
});

client.login(config.token);
