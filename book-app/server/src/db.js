const { Client } = require("pg");

const client = new Client({
    connectionString: "postgresql:///react-app"
});

client.connect();

module.exports = client;