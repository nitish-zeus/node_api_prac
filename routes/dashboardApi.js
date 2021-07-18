const express  = require('express');
const router =  express.Router()
const data = require('../data')
const { getPerson,
    createPerson,
    updatePerson,
    deletePerson} = require('../controller/dashboardController')

router.get('/',getPerson)
router.post('/',createPerson)
router.put('/:id',updatePerson)
router.delete('/:id',deletePerson)

module.exports = router;



