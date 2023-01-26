import React, { useState, useEffect } from 'react';
import { Navbar, Searchbar, LatestCard } from '../components';
import { getBlockNumber, getBlockHistory } from '../utils/api';

import BKLogo from '../assets/bk_logo.svg'
import TXLogo from '../assets/tx_logo.svg'
import banner from '../assets/abstract-shapes-20.svg'

function Home() {
  const [block, setBlock] = useState({});
  const [blocks, setBlocks] = useState([]);
  const [blockCount, setBlockCount] = useState(0);
   useEffect(() => {
    getBlockNumber(setBlockCount)
    console.log(blockCount)
    let count = 0; 
    while (count < 10 && blockCount > 0) {
      getBlockHistory(setBlock, blockCount)
      blocks.push(block.data)
      setBlockCount(blockCount - 1)
    } 
    setBlocks(blocks)
    console.log(blocks)
   }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <div class="text-center flex flex-col justify-center items-center" style={{ height: "18em", backgroundColor: "#5A474D" }}>
        <div class="font-sans font-medium text-white text-xl mb-5">Local Scan Explorer</div>
        <Searchbar></Searchbar>
      </div>
      <div class="flex justify-center">
        <div class="grid gap-4 grid-cols-2 my-12">
          <LatestCard icon={BKLogo} name="blocks"></LatestCard>
          <LatestCard icon={TXLogo} name="transactions"></LatestCard>
        </div>
      </div>
    </div>
  );
}

export default Home;
