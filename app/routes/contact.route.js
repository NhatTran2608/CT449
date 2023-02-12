const express = require('express');
const contact = require('../controllers/contact.controllers');

const router = express.Router();

router.route('/')
.get(contact.findAll)
.delete(contact.deleteAll)
.post(contact.create)

router.route('/')
.get(contact.findAllFavorite)

router.route(':/id')
.get(contact.findOne)
.put(contact.update)
.delete(contact.delete)

module.exports = router;