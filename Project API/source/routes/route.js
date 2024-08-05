const express = require('express')
const router = express.Router()
const control = require('../controllers/controls.js');
// Retrieve all users
router.get('/', control.findAll);
// Create a new user
router.post('/', control.create);
// Retrieve a single user with id
router.get('/:id', control.findOne);
// Update a user with id
router.put('/:id', control.update);
// Delete a user with id
router.delete('/:id', control.delete);
module.exports = router