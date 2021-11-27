const express = require('express');
const router = express.Router();
const {list,nueva,recommended,detail} = require('../controllers/moviesController');

router.get('/movies', list);
router.get('/movies/new', nueva);
router.get('/movies/recommended', recommended);
router.get('/movies/detail/:id', detail);


module.exports = router;