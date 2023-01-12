const { ethers } = require("ethers");
const dataFileName = '../../.data/transactions.json';
const data = require(dataFileName);
const fs = require('fs').promises;

async function initData() {
    var count = data?.blockNumber;
    const provider = new ethers.providers.JsonRpcProvider()
    try {
        count = await provider.getBlockNumber()
        data.blockNumber = count
    } catch (err) {
        throw Error(err);
    }
    while (count >= 0) {
        var detail = {}
        try {
            detail = await provider.getBlock(count, true)
        } catch (err) {
            throw Error(err);
        }
        detail?.transactions.forEach(async (hash) => {
            var tx;
            try {
                tx = await provider.getTransaction(hash)
                console.log(tx)
            } catch (err) {
               throw Error(err)
            }
            if (data[tx?.from]) {
                data[tx.from].push(hash)
            } else {
                data[tx?.from] = [hash]
            }
            if (data[tx?.to]) {
                data[tx?.to].push(hash)
            } else {
                data[tx?.to] = [hash]
            }
        });
        count -= 1
    }
    await fs.writeFile('.data/transactions.json', JSON.stringify(data), function writeJSON(err) {
        if (err) throw Error(err);
      });
}

async function updateData() {
    var currentCount = data?.blockNumber;
    var count;
    const provider = new ethers.providers.JsonRpcProvider()
    try {
        count = await provider.getBlockNumber()
        data.blockNumber = count
    } catch (err) {
        throw Error(err);
    }

    while (count >= currentCount) {
        var detail = {}
        try {
            detail = await provider.getBlock(count, true)
        } catch (err) {
            throw Error(err);
        }
        detail?.transactions.forEach(async (hash) => {
            var tx;
            try {
                tx = await provider.getTransaction(hash)
            } catch (err) {
               throw Error(err)
            }
            if (data[tx?.from]) {
                data[tx.from].push(hash)
            } else {
                data[tx?.from] = [hash]
            }
            if (data[tx?.to]) {
                data[tx?.to].push(hash)
            } else {
                data[tx?.to] = [hash]
            }
        });
        count -= 1
    }
    await fs.writeFile('.data/transactions.json', JSON.stringify(data), function writeJSON(err) {
        if (err) throw Error(err);
      });
}

module.exports = {
    initData,
    updateData
}