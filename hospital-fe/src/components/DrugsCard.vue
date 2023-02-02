<template>
  <div class="flex flex-row justify-between px-4 py-2 border-2 border-beige bg-tan text-blackbrown">
    <ul>
      <li v-for="(drug, index) in this.drugs" :key="index">
        {{drug}}
      </li>
      <li v-if="isEmpty()">
        No drugs
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DrugsCard',
  props: {
    drugs: Array
  },
  methods: {
    isEmpty() {
      return this.drugs.length == 0
    }
  }
}
</script>

<style scoped>
</style>
