// importar a dependencia do sqlite
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto de banco de dados, para nossas operações
/*db.serialize(() => {
    //criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    //inserir dados na tabela
    
    
    //consultar os dados da tabela*/


    //Deletar os dados
    /*db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso")
        
    })*/

    
//})
