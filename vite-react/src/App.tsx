import { useState } from 'react'
import './App.css'
import { umi } from './umi.ts'
import { BlockhashWithExpiryBlockHeight } from '@metaplex-foundation/umi'

function App() {
  const [blockhash, setBlockhash] = useState<BlockhashWithExpiryBlockHeight | null>(null)

  async function onClick() {
    umi.rpc.getLatestBlockhash()
      .then(res => {
        console.log(res)
        setBlockhash(res)
      })
  }

  return (
    <div className="card">
      <button onClick={onClick}>
        Get Latest Blockhash
      </button>
      <pre>{blockhash ? JSON.stringify(blockhash, null, 2) : 'Loading...'}</pre>
    </div>
  )
}

export default App
