const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('', userController.all);
router.post('', userController.create);
router.get('/:id', userController.one);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);

module.exports = router;
