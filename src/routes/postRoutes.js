const router = require('express').Router();
const { isAuth } = require('../middlewares/isAuth.middleware');

const postController = require('../controllers/postController');

router.get('', postController.all);
router.post('', isAuth, postController.create);
router.get('/:id', postController.one);
router.put('/:id', postController.update);
router.delete('/:id', isAuth, postController.destroy);

module.exports = router;
