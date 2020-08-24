const mariadb = require("mariadb/callback");
const config = require("./config.js");

// const example = function(data, callback) {

//   config.connection.connect((err) => {
//     if(err) {
//       console.log('error connecting to database: ', err);
//         return;
//     } else {

//       var name = data.slice(2, data.length - 5);
//       var sql = `select * from templates where name = '${name.toUpperCase()}'`;
//       config.connection.query(sql, function(err, results) {
//         if (err) {
//          console.log('error ! ! !: ', err);
//         } else {
//           callback(results);
//           // config.connection.end();
//         }
//       });

//     }
//   })

// }


//   module.exports.example = example;

