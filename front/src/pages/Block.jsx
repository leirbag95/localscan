import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar, CardNavTab } from '../components'

import { getBlockHistory } from '../utils/api';

function Block() {
  let  [blockDetails, setBlockDetails] = useState({})
  const [loading, setLoading] = useState(true)
  let { blockNumber } = useParams();

  useEffect(() => {
    async function getBlockDetails(block) {
      let blockHistory = await getBlockHistory(block)
      setBlockDetails(blockHistory.data)
      setLoading(false)
      console.log(blockHistory.data)
    }
    if (loading)
    getBlockDetails(blockNumber)
  }, [loading])
  return (
    <div class="h-screen" style={{backgroundColor: '#F2F2F2'}}>
        <Navbar></Navbar>
        
        <div class="max-w-screen-xl mx-auto my-12" style={{height:"100px"}}>
            <div class="text-xl font-bold my-3">
                Block <span class="text-gray font-medium">#{blockNumber}</span>
            </div>
            <div>
                <CardNavTab block={blockDetails}></CardNavTab>
            </div>
        </div>
    </div>
  )
}

export default Block