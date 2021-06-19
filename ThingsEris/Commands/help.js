const colors = require("../_components/colors.json");
const logger = require("../_components/logger.js");

module.exports = {
    config: {
        description: "idk.... lol",
        usage: "help"
    },
    name: "help",
    async execute(client, msg) {
        logger(`${msg.author.username}#${msg.author.discriminator} ha usado el comando`, "command")
        try {
            client.createMessage(msg.channel.id, {
                embed: {
                    description: `${msg.author.username}`,
                    color: colors.GREEN
                }
            });

        } catch (err) {
            logger(err, "error")
            client.createMessage(msg.channel.id, {
                embed: {
                    description: `${emojis.error} ***¡Error!***\n${err}`,
                    color: colors.RED
                }
            });
        }
    }
}