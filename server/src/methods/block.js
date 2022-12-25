const { ethers } = require("ethers");

async function getBlockNumber(provider) {
    const result = await provider.getBlockNumber()
    return result
}

module.exports = {
    getBlockNumber
}