const logger = require("../_components/logger.js");

module.exports = function(client) {
    logger(`ThingsEris ahora está funcionando en ${client.guilds.size} servidores y ${client.users.size} members`, "gateway")
    client.editStatus(null, { name: "spotify", type: 2 })
}