const express = require('express');
const contacts = require('../controllers/contact.controllers');

const router = express.Router();

router.route('/')
    .get(contacts.findAll)
    .delete(contacts.deleteAll)
    .post(contacts.create);

router.route('/favorite')
    .get(contacts.findAllFavorite);

router.route('/:id')
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;