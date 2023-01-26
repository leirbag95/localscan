import axios from 'axios';

export const getBlockNumber = async () => {
    let res = await axios.get('http://127.0.0.1:3001/block/count')
    return res
}

export const getBlockHistory =  async (blockNumber) => {
    return await axios.get(`http://127.0.0.1:3001/block/detail/${blockNumber}`)
}


export const getTransactionDetail =  async (hash) => {
    return await axios.get(`http://127.0.0.1:3001/transaction/detail/${hash}`)
}