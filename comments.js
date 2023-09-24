// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import controller
const controller = require('../controllers/comments');

// Import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//Create routes
router.post('/create', auth, multer, controller.createComment);
router.get('/list', auth, controller.listComment);
router.get('/:id', auth, controller.getOneComment);
router.put('/:id', auth, multer, controller.modifyComment);
router.delete('/:id', auth, controller.deleteComment);

// Export routes


module.exports = router;