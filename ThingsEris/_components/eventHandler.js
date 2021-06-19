const logger = require("../_components/logger.js");

module.exports = function(client) {

    try {
        client.on("ready", () => require("../Events/ready.js")(client));

    } catch (err) {
        logger(err, "error")
    }
}