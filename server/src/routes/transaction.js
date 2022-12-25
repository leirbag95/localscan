var express = require('express');
const { ethers } = require("ethers");
var router = express.Router();

/* GET transaction*/

/**
 * return transaction detail from hash
 * @param hash tx
*/
router.get('/:hash', async function (req, res, next) {
    const hash = req.params.hash
    try {
        const provider = new ethers.providers.JsonRpcProvider()
        const result = await provider.getTransaction(hash)
        res.send(result)
    } catch (err) {
        return res.status(res.statusCode).send({
            message: err.message
         });
    }
});

/**
 * return total transaction count
*/
router.get('/count', async function (req, res, next) {
    try {
        const provider = new ethers.providers.JsonRpcProvider()
        const result = await provider.getTransactionCount()
        res.send(result)
    } catch (err) {
        return res.status(res.statusCode).send({
            message: err.message
         });
    }
});


module.exports = router;
