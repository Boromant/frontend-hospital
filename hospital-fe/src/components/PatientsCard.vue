<template>
  <div class="flex flex-row justify-between gap-4 px-4 py-2 border-2 border-beige bg-tan text-blackbrown">
    <ul>
      <li v-for="(state, index) in states" :key="index">
        {{state}}
      </li>
    </ul>
    <ul>
      <li v-for="(number, index) in numbers" :key="index">
        {{number}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PatientsCard',
  props: {
    states: Array,
    numbers: Array
  }
}
</script>

<style scoped>
</style>
