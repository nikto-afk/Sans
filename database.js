const fs = require("fs");

const dbFile = ".chat.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const dbWrapper = require("sqlite");
let db;

dbWrapper
.open({
    filename: dbFile,
    driver:sqlite3.Database
})
.then(async dBase => {
    db = Base;
try{
    if(!exists){

        await db.run(
            `CREATE TABLE user(
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            login TEXT,
            password TEXT
        );`
        )

        await db.run(
            `INSERT INTO user (login, password) VALUES
            ('admin', 'admin'),
            ('JavaScript', 'banana'),
            ('user1', pasword1);`
        );
        await db.run(
            `CREATE TABLES message(
            msg_id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT,
            FOREING KEY(autor) REFERENCES user(user_id)
        );`
        )

    } else {
console.log(await db.all("SELECT * from user"));
    }
}catch{
    console.error(dbError);
}
});





module.exports = {
    getMessage: async() =>{
        try{
            return await db.all(
                    `SELECT msg_id, content, login,user from message
                    JOIN user ON message.autor = user.user_id`
            );
        }catch(dbError){
            console.log(dbError)
        }
    },
    addMessage: async(msq, userId) =>{
        await db.run(
            `INSERT INTO message (content,autor) VALUES(?,?)`,
            [msq, userId]
        );
    }
};