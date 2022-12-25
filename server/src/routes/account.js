var express = require('express');
const { ethers } = require("ethers");
var router = express.Router();
const account = require('../methods/account')

/* GET account*/

/**
 * get account details
 * @param address EOA or contract
*/
router.get('/:address', async function (req, res, next) {
    const address = req.params.address
    try {
        const provider = new ethers.providers.JsonRpcProvider()
        const result = await account.getAccount(provider, address)
        res.send(result)
    } catch (err) {
        return res.status(res.statusCode).send({
            message: err.message
         });
    }
});

/**
 *  returns a list of transactions of an address
 * @param address EOA or contract
 */
router.get('/transactions/:address', async function (req, res, next) {
    let address = req.params.address
    try {
        const provider = new ethers.providers.JsonRpcProvider()
        let transactionList = await account.getHistory(provider, address)
        res.send(transactionList)
    } catch (err) {
        return res.status(res.statusCode).send({
            message: err.message
         });
    }
});

module.exports = router;
