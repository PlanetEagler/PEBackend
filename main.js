const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });


if (fs.existsSync('mods.db')) {
    console.log('DB File found!');
} else {
    console.log('File not found! Creating file...');
    fs.open('mods.db', 'a', (err, data) => {
        if (err) console.log(err.message);
        else console.log('Created file!');
    });
}

const db = new sqlite3.Database('./mods.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
    else console.log("Opened SQL DB.");
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

wss.on('connection', function connection(ws) {
    console.log('Connection Recived');
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });
    
    ws.send('something');
});