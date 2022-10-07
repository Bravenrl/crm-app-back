const db = require('../db')

class ItemController {
  async create(req, res) {
    const { id, date, name, count, distance } = req.body;
    res.json('OK');
  }

  async getAll(req, res) {
    const items = await db.query('SELECT * FROM items_table')
    res.json(items.rows);
  }
}

module.exports = new ItemController();
