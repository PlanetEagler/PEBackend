const sqlite3 = require('sqlite3').verbose();
let sql;

const db = new sqlite3.Database('./mods.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

//sql = `CREATE TABLE modlist(id INTEGER PRIMARY KEY, mod_name, mod_author, mod_content)`
//db.run(sql);

//db.run(`DROP TABLE modlist`);

// sql = `INSERT INTO modlist(mod_name, mod_author, mod_content) VALUES (?, ?, ?)`;
// db.run(sql,
//     ["wxamplemod", "johndoe_123", "alert(5);"], (err) => {
//     if (err) return console.error(err.message);
// });

// sql =  `SELECT * FROM modlist`;
// db.all(sql, [], (err, rows) => {
//     if (err) return console.error(err.message);
//     rows.forEach(row => {
//         console.log(row);
//     })
// });