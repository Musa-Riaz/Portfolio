const express = require('express');
const router = express.Router();
const { getProjectsController } = require('../controllers/projectController')

router.get('/get-all-projects', getProjectsController)

module.exports = router;