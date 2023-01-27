<template>
  <div class="flex flex-row justify-between px-4 py-2 border-2 border-beige bg-tan text-blackbrown">
    <ul>
      <li v-for="drug in drugs" :key="drug">
        {{drug}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DrugsCard',
  props: {
    drugs: Array
  }
}
</script>

<style scoped>
</style>
