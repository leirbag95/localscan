var express = require('express');
const { ethers } = require("ethers");
var router = express.Router();
var store = require('../methods/store')

/* UPDATE local storage data */

/**
 * init transaction.json
*/
router.get('/init', async function (req, res, next) {
    try {
        await store.initData()
        res.send(true)
    } catch (err) {
        return res.status(res.statusCode).send({
            message: err.message
        });
    }
});

/**
 * update transactions.json file with newest block
*/
router.get('/update', async function (req, res, next) {
    try {
        await store.updateData()
        res.send(true)
    } catch (err) {
        return res.status(res.statusCode).send({
            message: err.message
        });
    }
});

module.exports = router;
