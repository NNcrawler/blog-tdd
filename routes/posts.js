const express = require('express');
const router = express.Router();
const controller = require('../controllers/post');

router.post('/', controller.post);
router.get('/all', controller.getRecent);
router.get('/detail/:id', controller.getById);
router.get('/:token', controller.getAll);
router.put('/', controller.update);
router.delete('/', controller.delete);

module.exports = router;
