const { ethers } = require("ethers");
const dataFileName = '../../.data/transactions.json';
const data = require(dataFileName);
const fs = require('fs').promises;
const { compile } = require('morgan');

async function initData() {
    console.log(data)
    var count = data?.blockNumber;
    const provider = new ethers.providers.JsonRpcProvider()
    try {
        count = await provider.getBlockNumber()
        data.blockNumber = count
    } catch (err) {
        console.log('error', err)
    }
    while (count >= 0) {
        var detail = {}
        try {
            detail = await provider.getBlock(count, true)
        } catch (err) {
            console.log(err);
        }
        detail?.transactions.forEach(async (hash) => {
            console.log(hash)
            var tx;
            try {
                tx = await provider.getTransaction(hash)
            } catch (err) {
               console.log(err) 
            }
            if (data[tx?.from] && data[tx?.from].from) {
                data[tx.from].from.push(hash)
            } else {
                data[tx?.from] = {
                    'from': [hash],
                    'to': data[tx?.from]?.to
                }
            }
            if (data[tx?.to] && data[tx?.to].to) {
                data[tx?.to].to.push(hash)
            } else {
                data[tx?.to] = {
                    'to': [hash],
                    'from': data[tx?.from]?.from
                }
            }
        });
        count -= 1
    }
    console.log(data)
    await fs.writeFile('.data/transactions.json', JSON.stringify(data), function writeJSON(err) {
        if (err) console.log(err);
      });
}

module.exports = {
    initData
}