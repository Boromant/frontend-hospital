<template>
  <div class="border-2 border-beige bg-tan text-blackbrown">
    <div class="flex flex-col py-4">
      <p class="mx-auto pb-4 text-2xl">Simulation #{{ number }}</p>
      <div class="flex flex-row">
        <div class="flex flex-col w-1/2 m-auto p-1">
          <p class="mx-auto pb-4 text-xl">Before</p>
          <div class="flex flex-col sm:flex-row justify-between px-4">
            <div class="flex flex-col">
              <p class="mx-auto">Patients</p>
              <PatientsCard class="text-xs sm:text-base" :states="results.before.states" :numbers="results.before.numbers"/>
            </div>
            <div class="flex flex-col">
              <p class="mx-auto">Drugs</p>
              <DrugsCard class="text-xs sm:text-base" :drugs="results.before.drugs"/>
            </div>
          </div>
        </div>
        <i class="fa-solid fa-chevron-right fa-2xl my-auto px-4"></i>
        <div class="flex flex-col w-1/3 m-auto p-1">
          <p class="mx-auto pb-4 text-xl">After</p>
          <div class="flex flex-col">
            <p class="mx-auto">Patients</p>
              <PatientsCard class="text-xs sm:text-base" :states="results.before.states" :numbers="results.after.numbers"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PatientsCard from './PatientsCard.vue'
import DrugsCard from './DrugsCard.vue'

export default {
  name: 'SimulationCard',
  components: {
    PatientsCard,
    DrugsCard
  },
  props: {
    number: Number,
    results: Object
  }
}
</script>

<style scoped>
</style>
