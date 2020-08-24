const mariadb = require("mariadb/callback");

const connection = mariadb.createConnection({
  host     : 'rename',
  user     : 'rename',
  password : 'rename',
  database : 'rename',
});

module.exports = {
  connection,
}