const db = require("../db.js")

class PostController {
    async createPost(req, res) {
        const {title, content, user_id} = req.body;
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) values($1, $2, $3) RETURNING *`, [title, content, user_id]);

        res.json(newPost.rows[0]);
    }

    async getAllPosts(req, res) {
        const post = await db.query(`SELECT * FROM post`)
        return res.json(post.rows)
    }

    async getOnePost(req, res) {
        const {id} = req.query; // здесь мы получими айди как квери параметр // http://localhost:8080/api/post?id=2
        const post = await db.query(`SELECT * FROM post where id = $1`, [id])
        return res.json(post.rows[0])
    }

    async updatePost(req, res) {
        const {id, title, content, user_id} = req.body;
        const updatedPost = await db.query(`UPDATE post set title = $1, content = $2, user_id= $3 where id = $4 RETURNING *`, [title, content, user_id, id]);
        res.json(updatedPost.rows[0])
    }

    async deletePost(req, res) {
        const {id} = req.params;
        const deletedPost = await db.query(`DELETE FROM post WHERE id = $1;`, [id]);
        res.json(deletedPost.rows[0]); // почему-то не возвращает удалённый айтем
    }
}

module.exports = new PostController()