const db = require('../db')

class ItemController {
  async create(req, res) {
    const { id, date, name, count, distance } = req.body;
  
    res.json('OK');
  }

  async getAll(req, res) {}
}

module.exports = new ItemController();
