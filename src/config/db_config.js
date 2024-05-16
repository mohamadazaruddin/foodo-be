var mysql = require("mysql2");

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: 3306,
});

con.connect(function (err) {
  if (err) {
    console.log(err, "err");
  }
  console.log("Connected!");
});
