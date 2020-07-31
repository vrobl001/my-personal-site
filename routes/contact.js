const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact');

// Get
router.get('/', contactCtrl.index);

module.exports = router;
