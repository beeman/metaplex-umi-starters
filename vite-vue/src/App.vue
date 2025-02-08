<script setup lang="ts">
import { umi } from './umi.ts'
import type { BlockhashWithExpiryBlockHeight } from '@metaplex-foundation/umi'
import { ref } from 'vue'

const blockhash = ref<BlockhashWithExpiryBlockHeight | null>(null)

function onClick() {
  umi.rpc.getLatestBlockhash().then((res) => {
    console.log(res)
    blockhash.value = res
  })
}
</script>

<template>
  <div>
    <button @click="onClick">Get Latest Blockhash</button>
    <pre>{{ blockhash ? JSON.stringify(blockhash, null, 2) : '' }}</pre>
  </div>
</template>
