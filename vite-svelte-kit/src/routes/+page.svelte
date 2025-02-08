<script lang="ts">
  import type { BlockhashWithExpiryBlockHeight } from '@metaplex-foundation/umi'
  import { umi } from '$lib/umi'

  let blockhash: BlockhashWithExpiryBlockHeight | null = null

  const onClick = () => {
    umi.rpc.getLatestBlockhash().then((res) => {
      console.log(res)
      blockhash = res
    })
  }
</script>

<main>
  <button on:click={onClick}>Get Latest Blockhash</button>
  <pre>{blockhash ? JSON.stringify(blockhash, null, 2) : ''}</pre>
</main>

