const Router = require('express');
const itemController = require('../controller/item.controller');

const router = new Router();

router.get('/item', itemController.getAll);
router.post('/item', itemController.create);

module.exports = router;