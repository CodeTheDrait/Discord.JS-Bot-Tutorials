module.exports = {
    name: "ping",
    aliases: ['latency'],
    description: "Shows your bot latency",
    usage: "ping",
    run: async (client, message, args) => {
        const m = await message.channel.send("Ping?")
        m.edit(`Ping!\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ws.ping) + `ms. `)
    }
};
