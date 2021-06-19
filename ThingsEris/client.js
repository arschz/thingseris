const {
    token,
    prefix,
    owners
} = require("./_components/config.json");
const path = require("path");
const Eris = require("eris");
const fs = require("fs");
const logger = require("./_components/logger");

const client = new Eris.CommandClient(token, {}, {
    owner: owners,
    description: `bonk`,
    prefix: [prefix, "@mention"],
    defaultHelpCommand: false,
    ignoreBots: true,
    ignoreSelf: true
});

/* Command Loader */
const files = fs.readdirSync(path.join(__dirname, "./Commands"));
for (const file of files) {
    const data = require(`./Commands/${file}`);
    client.registerCommand(data.name, (...params) => data.execute(client, ...params), data.config)
}

/* Handlers */
require("./_components/eventHandler.js")(client);


client.on("error", (err) => {
    logger(err, "error")
});

client.on("warn", (msg) => {
    logger(msg, "Warn")
});

client.connect();