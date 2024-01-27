// router.js
const express = require('express');
const router = new express.Router();
const userController = require('../Controllers/userController');
const addTableData = require('../Controllers/addTabledata');
const formcontroller = require('../Controllers/formController');

router.get('/tabledata', userController.vrtabledetailes);
router.post('/addtable', addTableData.tabledatadetailes);
router.post('/formdata', formcontroller.formadddetailes);
router.delete('/deletetable', addTableData.deletetabledatadetailes);

module.exports = router;
