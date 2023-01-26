import React, { useState, useEffect } from 'react';
import { Navbar, Searchbar, LatestCard } from '../components';
import { getBlockNumber, getBlockHistory, getTransactionDetail } from '../utils/api';

import BKLogo from '../assets/bk_logo.svg'
import TXLogo from '../assets/tx_logo.svg'
import banner from '../assets/abstract-shapes-20.svg'

function Home() {
  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([])
  const [blockCount, setBlockCount] = useState(0);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      let bc = await (await getBlockNumber()).data.count
      setBlockCount(bc)
      let count = 0;
      let txCount = 0;
      let blocksTmp = []
      let txs = []
      while (count < 5 && bc > 0) {
        let i = 0;
        let block = await (await getBlockHistory(bc)).data
        while (txCount < 5 && i < block.transactions.length) {
          let tx = await (await getTransactionDetail(block.transactions[i])).data
          console.log(tx)
          txs.push(tx)
          i += 1
        }
        blocksTmp.push(block)
        bc -= 1;
        count += 1;
      }
      setBlocks(blocksTmp)
      setTransactions(txs)
      setLoading(!loading)
    }
    if (loading) {
      fetchData()
    }
  }, [loading]);
  return (
    <div className="App">
      <Navbar></Navbar>
      <div class="text-center flex flex-col justify-center items-center" style={{ height: "18em", backgroundColor: "#5A474D" }}>
        <div class="font-sans font-medium text-white text-xl mb-5">Local Scan Explorer</div>
        <Searchbar></Searchbar>
      </div>
      <div class="flex justify-center">
        <div class="grid gap-4 grid-cols-2 my-12">
          <LatestCard icon={BKLogo} name="blocks" blocks={blocks} type="bc"></LatestCard>
          <LatestCard icon={TXLogo} name="transactions" transactions={transactions} type="tx"></LatestCard>
        </div>
      </div>
    </div>
  );
}

export default Home;
