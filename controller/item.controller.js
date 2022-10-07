const db = require('../db')

class ItemController {
  async create(req, res) {
    const { id, date, name, count, distance } = req.body;
    const newItem = await db.query('INSERT INTO items_table (id, date, name, count, distance) VALUES ($1, $2, $3, $4, $5) RETURNING *', [id, date, name, count, distance])
    res.json(newItem.rows[0]);
  }

  async getAll(req, res) {
    const items = await db.query('SELECT * FROM items_table')
    res.json(items.rows);
  }
}

module.exports = new ItemController();
