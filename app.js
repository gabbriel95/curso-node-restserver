//Las importaciones de terceros van arriba, las importaciones propias de node van antes de las de 3ros
require("dotenv").config();

const Server = require("./models/server");

const server = new Server();

server.listen();
