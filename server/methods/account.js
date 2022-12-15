const { ethers } = require("ethers");

async function getHistory(provider, account) {
    var currentBlock = await provider.getBlockNumber();
    var transactionList = []
    var n = await provider.getTransactionCount(account, currentBlock);
    var bal = await provider.getBalance(account, currentBlock);
    for (var i=currentBlock; i >= 0 && (n > 0); --i) {
        try {
            var block = await provider.getBlock(i, true);
            if (block && block.transactions) {
                block.transactions.forEach(async function(e) {
                    let tx = await provider.getTransaction(e)
                    if (account == tx.from) {
                        transactionList.push(tx)
                        --n;
                    }
                    if (account == tx.to) {
                        transactionList.push(tx)
                    }
                });
            }
        } catch (e) { throw Error("Error in block " + i, e); }
    }
    return transactionList
}

async function getAccount(provider, account) {
    const res = {
        'count': await provider.getTransactionCount(account),
        'balance': await provider.getBalance(account)
    }

    return res
}

// transformData.js
module.exports = {
    getAccount,
    getHistory
}