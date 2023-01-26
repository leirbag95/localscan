import axios from 'axios';

export const getBlockNumber = async (setter) => {
    console.log('enterr')
    setter(await axios.get('http://127.0.0.1:3001/block/count'))
}

export const getBlockHistory =  async (setter, blockNumber) => {
    setter(await axios.get(`http://127.0.0.1:3001/block/detail/${blockNumber}`))
}