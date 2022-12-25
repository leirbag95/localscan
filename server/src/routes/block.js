var express = require('express');
const { ethers } = require("ethers");
const { getBlockNumber } = require('../methods/block')
var router = express.Router();

/* GET block*/

/**
 * return block detail from block number
 * @param number int
*/
router.get('/detail/:number', async function (req, res, next) {
    const number = parseInt(req.params.number)
    try {
        const provider = new ethers.providers.JsonRpcProvider()
        const totalBlock = await provider.getBlockNumber()
        if (number < 0 || totalBlock < number)
            throw Error('Block number must be lower than total block number or greater than 0.')
        const result = await provider.getBlock(number, true)
        res.send(result)
    } catch (err) {
        return res.status(res.statusCode).send({
            message: err.message
         });
    }
});

/**
 * return current block number
*/
router.get('/count', async function (req, res, next) {
    try {
        const provider = new ethers.providers.JsonRpcProvider()
        res.send({'count': await getBlockNumber(provider)})
    } catch (err) {
        return res.status(res.statusCode).send({
            message: err.message
         });
    }
});


module.exports = router;
