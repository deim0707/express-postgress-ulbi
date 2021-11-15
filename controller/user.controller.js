const db = require("../db.js")

class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body;
        // любая операция с бд ассинхронная. ставим await
        // в db.query пишем sql запрос
        // значения в массиве соответствуют $1, $2
        const newUser = await db.query(`INSERT INTO person (name, surname) values($1, $2) RETURNING *`, [name, surname]);

        res.json(newUser.rows[0]);
    }

    async getAllUsers(req, res) {
        const allUsers = await db.query(`SELECT * FROM person;`);
        res.json(allUsers.rows);
    }

    async getOneUser(req, res) {
        const {id} = req.params; // http://localhost:8080/api/user/4
        const user = await db.query(`SELECT * FROM person where id = $1;`, [id]);
        res.json(user.rows[0]);
    }

    async updateUser(req, res) {
        const {id, name, surname} = req.body;
        const updatedUser = await db.query(`UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`, [name, surname, id]);
        res.json(updatedUser.rows[0])
    }

    async deleteUser(req, res) {
        const {id} = req.params;
        const deletedUser = await db.query(`DELETE FROM person where id = $1;`, [id]);
        res.json(deletedUser.rows[0]); // почему-то не возвращает удалённый айтем
    }
}

module.exports = new UserController();