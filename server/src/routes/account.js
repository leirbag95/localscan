var express = require('express');
const { ethers } = require("ethers");
var router = express.Router();
const account = require('../methods/account')
const { getHistoryFromLocalStorage } = require('../methods/account')

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
router.get('/history/:address', async function (req, res, next) {

    let address = req.params.address

    // boolean query param indicate if data should be fetch 
    // from localstorage or not
    let load = req.query?.load

    const provider = new ethers.providers.JsonRpcProvider()
    if (load) {
        try {
            let transactionList = await account.getHistory(provider, address)
            res.send(transactionList)
        } catch (err) {
            return res.status(res.statusCode).send({
                message: err.message
            });
        }
    } else {
        let start = req.query?.start ? parseInt(req.query?.start) : 0
        let end = req.query?.end ? parseInt(req.query?.end) : null
        try {
            let transactionList = await getHistoryFromLocalStorage(provider, address, start, end)
            res.send(transactionList)
        } catch (err) {
            return res.status(res.statusCode).send({
                message: err.message
            });
        }
    }
});

module.exports = router;
