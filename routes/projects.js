const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

// Get
router.get('/', projectsCtrl.index);

module.exports = router;
